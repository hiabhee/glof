"""Fetch dated Sentinel-2 inputs, georeferenced previews and candidate water polygons.

No model training or automatic approval. Uses exact scene IDs and local valid-pixel
coverage. Source RGI polygons stay historical. Lake vectors require analyst review.
"""
from __future__ import annotations
import argparse, concurrent.futures, datetime, json, os, pathlib, sys
import requests

ROOT = pathlib.Path(__file__).resolve().parents[2]
COLLECTION = 'COPERNICUS/S2_SR_HARMONIZED'
S2_SR_FIRST_DATE = datetime.date(2017, 3, 28)

def download(url, path):
    response = requests.get(url, timeout=120)
    response.raise_for_status()
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_bytes(response.content)
    temporary.replace(path)

def validate_export_coverage(path, minimum=0.65):
    """Measure coverage in the written raster, not only in an EE reduction."""
    import numpy as np
    import rasterio
    with rasterio.open(path) as src:
        if src.count < 6 or src.crs is None or src.width == 0 or src.height == 0:
            raise ValueError(f"invalid evidence export: {path}")
        scl = src.read(6)
    valid = ~np.isin(scl, [0, 1, 2, 3, 7, 8, 9, 10])
    fraction = float(valid.mean())
    if fraction < minimum:
        raise ValueError(f"exported raster valid coverage {fraction:.1%} is below {minimum:.0%}; likely incomplete tile coverage")
    return fraction

def prepare(site, year):
    import ee
    bbox = site['bbox']
    region = ee.Geometry.Rectangle(bbox, proj='EPSG:4326', geodesic=False)
    start, end = f'{year}-10-01', f'{year}-12-01'
    if datetime.date(year, 10, 1) < S2_SR_FIRST_DATE:
        raise ValueError(f'{site["id"]}: S2 SR is unavailable for {year}; do not substitute L1C into this SR analysis track. Create and validate a separately documented L1C track if 2016 is required.')
    if datetime.date.fromisoformat(end) > datetime.date.today():
        raise ValueError(f'{site["id"]}: seasonal window is not complete')
    scenes = (ee.ImageCollection(COLLECTION).filterBounds(region).filterDate(start, end)
              .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 35)))
    def assess(img):
        scl = img.select('SCL')
        valid = scl.neq(0).And(scl.neq(1)).And(scl.neq(2)).And(scl.neq(3)).And(scl.neq(7)).And(scl.neq(8)).And(scl.neq(9)).And(scl.neq(10)).unmask(0)
        fraction = valid.reduceRegion(ee.Reducer.mean(), region, 60, maxPixels=1000000).get('SCL')
        snow_free = scl.neq(11).And(valid).reduceRegion(ee.Reducer.mean(), region, 60, maxPixels=1000000).get('SCL')
        score = ee.Number(fraction).add(ee.Number(snow_free).multiply(0.5))
        return img.set({'local_valid_fraction':fraction, 'selection_score':score})
    scenes = scenes.map(assess).filter(ee.Filter.gte('local_valid_fraction', 0.65)).sort('selection_score', False)
    if scenes.size().getInfo() == 0:
        raise ValueError(f'{site["id"]}: no scene meets 65% local clear coverage; keep gap')
    selected = ee.Image(scenes.first())
    props = selected.toDictionary(['system:index','system:time_start','CLOUDY_PIXEL_PERCENTAGE','local_valid_fraction']).getInfo()
    date = datetime.datetime.fromtimestamp(props['system:time_start']/1000, datetime.timezone.utc).date().isoformat()
    # A study bbox can cross Sentinel tile boundaries.  A single selected granule
    # may look clear in EE but export with most of the requested grid as NoData.
    # Build a same-day mosaic, preferring the lowest-cloud granule in overlap.
    next_date = (datetime.date.fromisoformat(date) + datetime.timedelta(days=1)).isoformat()
    day_scenes = (ee.ImageCollection(COLLECTION).filterBounds(region).filterDate(date, next_date)
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 90))
                  .sort('CLOUDY_PIXEL_PERCENTAGE', False))
    image = ee.Image(day_scenes.mosaic())
    source_scene_ids = day_scenes.aggregate_array('system:index').getInfo()
    sid = site['id']; stem=f'{sid}-{date}'; public=ROOT/'apps/web/public'
    image_path=f'/imagery/sites/{stem}.png'; vector_path=f'/boundaries/{stem}-lake-candidate.geojson'
    west,south,east,north=bbox
    width=1024; height=round(width*(north-south)/(east-west))
    # Preserve the actual spectral inputs; PNG display pixels are never used for measurement.
    raster=ROOT/f'data/derived/evidence/{stem}-bands.tif'
    raster_tmp=raster.with_suffix('.tif.tmp')
    download(image.select(['B2','B3','B4','B8','B11','SCL']).toUint16().getDownloadURL({
        'region':region,'scale':20,'crs':'EPSG:4326','format':'GEO_TIFF'}),raster_tmp)
    exported_valid_fraction = validate_export_coverage(raster_tmp)
    raster_tmp.replace(raster)
    download(image.visualize(bands=['B4','B3','B2'],min=0,max=3500,gamma=1.15).getThumbURL({
        'region':region,'crs':'EPSG:4326','dimensions':f'{width}x{height}','format':'png'}),public/image_path.lstrip('/'))
    boundary=None
    if site['lake']:
        seed=ee.Geometry.Point(site['lake'])
        roi=seed.buffer(3500).intersection(region,ee.ErrorMargin(1))
        scl=image.select('SCL')
        clear=scl.neq(0).And(scl.neq(1)).And(scl.neq(2)).And(scl.neq(3)).And(scl.neq(7)).And(scl.lt(8))
        ndwi=image.normalizedDifference(['B3','B8'])
        mndwi=image.normalizedDifference(['B3','B11'])
        water=ndwi.gt(0.05).And(mndwi.gt(0.1)).And(image.select('B8').lt(2500)).And(clear)
        vectors=water.selfMask().toInt().reduceToVectors(geometry=roi,scale=20,geometryType='polygon',eightConnected=True,maxPixels=1000000)
        def rank(f):
            return f.set({'area_m2':f.geometry().area(1),'seed_distance_m':f.geometry().distance(seed,1)})
        vectors=vectors.map(rank).filter(ee.Filter.gte('area_m2',50000)).filter(ee.Filter.lte('seed_distance_m',1200)).sort('area_m2',False).limit(1)
        collection=vectors.getInfo()
        if collection['features']:
            feature=collection['features'][0]
            feature['properties'].update({'site_id':sid,'recordId':sid+'-lake','kind':'lake','status':'candidate','observation_date':date,
              'scene_id':COLLECTION+'/'+props['system:index'],'source':'Sentinel-2 spectral water baseline','resolution_m':20,
              'method':'NDWI > 0.05; MNDWI > 0.1; B8 < 2500; SCL rejects cloud, shadow, snow, invalid. Largest connected component >= 0.05 km2 within 1200 m of seed.',
              'limitations':'Candidate, not reviewed shoreline. Seasonal ice, terrain shadow and turbid water can cause omission or commission.'})
            path=public/vector_path.lstrip('/');path.parent.mkdir(parents=True,exist_ok=True);path.write_text(json.dumps(collection))
            boundary={'id':stem+'-lake','kind':'lake','path':vector_path,'observationDate':date,'sourceId':'sentinel2-water-baseline','status':'candidate'}
    observation={'id':str(year),'label':str(year),'date':date,'sensor':'Sentinel-2 optical','sceneId':props['system:index'],
       'cloudPercent':props['CLOUDY_PIXEL_PERCENTAGE'],'validFraction':exported_valid_fraction,'imagePath':image_path,
       'bounds':bbox,'status':'review_candidate','note':'Dated Sentinel-2 scene. Local clear-pixel coverage checked; shoreline and glacier changes still require review.',
       'rasterPath':str(raster.relative_to(ROOT)),'sourceSceneIds':source_scene_ids,'lakeBoundary':boundary}
    provenance=ROOT/f'data/derived/evidence/{stem}.json';provenance.write_text(json.dumps(observation,indent=2))
    print(f'{sid}: {date}; exported valid {exported_valid_fraction:.1%}; {len(source_scene_ids)} same-day tile(s); lake polygon {bool(boundary)}',flush=True)
    return sid,observation

def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('--project',default=os.environ.get('GEE_PROJECT_ID'))
    p.add_argument('--years',type=int,nargs='+',default=[2025]);p.add_argument('--site-id')
    args=p.parse_args()
    if not args.project:p.error('--project or GEE_PROJECT_ID is required')
    import ee
    ee.Initialize(project=args.project)
    path=ROOT/'apps/web/src/data/sites/evidence-assets.json'
    sites=json.loads(path.read_text())
    targets=[s for s in sites if not args.site_id or s['id']==args.site_id]
    if not targets:p.error('unknown site-id')
    failures=[]
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        futures={pool.submit(prepare,s,y):(s['id'],y) for s in targets for y in args.years}
        for future in concurrent.futures.as_completed(futures):
            try:
                sid,obs=future.result();site=next(s for s in sites if s['id']==sid)
                site['observations']=[o for o in site['observations'] if o['id']!=obs['id']]+[obs]
                site['observations'].sort(key=lambda o:o['date'])
                path.write_text(json.dumps(sites,indent=2))
            except Exception as exc:
                sid, year = futures[future]
                failures.append(str((sid, year))+': '+str(exc));print(failures[-1],file=sys.stderr,flush=True)
                # A prior run may have registered the same annual slot before
                # post-export coverage validation existed.  Remove that active
                # candidate on failure, but preserve a machine-readable reason.
                if 'exported raster valid coverage' in str(exc):
                    site = next(s for s in sites if s['id'] == sid)
                    site['observations'] = [o for o in site['observations'] if o['id'] != str(year)]
                    path.write_text(json.dumps(sites, indent=2))
                    rejection = ROOT / f'data/derived/evidence/{sid}-{year}-rejected.json'
                    rejection.write_text(json.dumps({'site_id': sid, 'observation_id': str(year), 'quality_status': 'rejected', 'reason': str(exc), 'recorded_at': datetime.datetime.now(datetime.timezone.utc).isoformat()}, indent=2) + '\n')
    return 1 if failures else 0
if __name__=='__main__':raise SystemExit(main())
