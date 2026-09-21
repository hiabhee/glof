"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { glacierCatalog, type GlacierCatalogRecord } from "@/data/glacier-catalog";

import { evidenceSites, latestLakeBoundary } from "@/data/sites/evidence";

declare global {
  interface Window {
    CESIUM_BASE_URL?: string;
    Cesium?: any;
  }
}

type GlobeApi = {
  flyTo: (centre: { latitude: number; longitude: number }, height?: number) => void;
  resetView: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
};

type Props = {
  selected: GlacierCatalogRecord | null;
  showBoundaries: boolean;
  showLakes: boolean;
  showEvents: boolean;
  satelliteOpacity: number;
  terrainEnabled: boolean;
  onSelect: (record: GlacierCatalogRecord) => void;
  onReady?: (api: GlobeApi) => void;
  referenceBoundaryPath?: string;
};

const HIMALAYA = { latitude: 28.2, longitude: 86.5 };
const EARTH_IMAGERY = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

function loadCesium() {
  if (window.Cesium) return Promise.resolve(window.Cesium);
  return new Promise<any>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-cesium-runtime="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(window.Cesium));
      existing.addEventListener("error", () => reject(new Error("Cesium runtime failed to load")));
      return;
    }
    const script = document.createElement("script");
    script.src = "/cesium/engine-runtime.js";
    script.async = true;
    script.dataset.cesiumRuntime = "true";
    script.onload = () => window.Cesium ? resolve(window.Cesium) : reject(new Error("Cesium did not expose its browser runtime"));
    script.onerror = () => reject(new Error("Cesium runtime failed to load"));
    document.head.appendChild(script);
  });
}

export function GlobeView({ selected, showBoundaries, showLakes, showEvents, satelliteOpacity, terrainEnabled, onSelect, onReady, referenceBoundaryPath = "/reference/verified-glaciers.geojson" }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const cesiumRef = useRef<any>(null);
  const glacierSourceRef = useRef<any>(null);
  const lakeSourceRef = useRef<any>(null);
  const markerSourceRef = useRef<any>(null);
  const selectedRef = useRef<GlacierCatalogRecord | null>(selected);
  const settingsRef = useRef({ showBoundaries, showLakes, showEvents, satelliteOpacity, terrainEnabled });
  const selectRef = useRef(onSelect);
  const boundaryPathRef = useRef(referenceBoundaryPath);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [boundaryError, setBoundaryError] = useState(false);

  selectedRef.current = selected;
  settingsRef.current = { showBoundaries, showLakes, showEvents, satelliteOpacity, terrainEnabled };
  selectRef.current = onSelect;
  boundaryPathRef.current = referenceBoundaryPath;

  const flyTo = useCallback((centre: { latitude: number; longitude: number }, height = 24_000) => {
    const Cesium = cesiumRef.current;
    const viewer = viewerRef.current;
    if (!Cesium || !viewer) return;
    viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(centre.longitude, centre.latitude, height), duration: 1.25 });
  }, []);
  // Begin with the Earth readable as a globe; close inspection happens only after selection.
  // Keep the initial earth view fully readable between the side panels.
  const resetView = useCallback(() => flyTo(HIMALAYA, 24_000_000), [flyTo]);
  const zoomIn = useCallback(() => viewerRef.current?.camera.zoomIn(viewerRef.current.camera.positionCartographic.height * 0.28), []);
  const zoomOut = useCallback(() => viewerRef.current?.camera.zoomOut(viewerRef.current.camera.positionCartographic.height * 0.38), []);

  useEffect(() => { onReady?.({ flyTo, resetView, zoomIn, zoomOut }); }, [flyTo, onReady, resetView, zoomIn, zoomOut]);

  const renderMarkers = useCallback(() => {
    const Cesium = cesiumRef.current;
    const source = markerSourceRef.current;
    if (!Cesium || !source) return;
    source.entities.removeAll();
    const config = settingsRef.current;
    glacierCatalog
      .filter((record) => (config.showLakes || record.type !== "lake") && (config.showEvents || !record.glofDate || record.type !== "lake"))
      .forEach((record) => {
        const isSelected = selectedRef.current?.id === record.id;
        const isLake = record.type === "lake";
        const isGlof = !!record.glofDate;
        source.entities.add({
          id: record.id,
          position: Cesium.Cartesian3.fromDegrees(record.centre.longitude, record.centre.latitude),
          point: {
            pixelSize: isSelected ? (isLake ? 19 : 17) : (isLake ? 13 : 11),
            color: Cesium.Color.fromCssColorString(
              // Much more distinct: lake = deep saturated blue (water), glacier = pale icy cyan, GLOF lake = amber/red rim hint via outline
              isSelected ? "#ffffff" : isLake ? (isGlof ? "#0050ff" : "#0a5cff") : "#a8f5ff"
            ).withAlpha(isLake ? 1 : 0.98),
            outlineColor: Cesium.Color.fromCssColorString(
              isSelected ? "#0a3a6b" : isLake ? (isGlof ? "#ff8c1a" : "#ffffff") : "#0b2f3a"
            ),
            outlineWidth: isLake ? (isSelected ? 3 : isGlof ? 3 : 2.5) : 1.8,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            disableDepthTestDistance: Number.POSITIVE_INFINITY,
          },
          label: isSelected ? {
            text: record.name,
            font: "700 13px Inter, system-ui, sans-serif",
            fillColor: Cesium.Color.WHITE,
            outlineColor: Cesium.Color.fromCssColorString("#062735"),
            outlineWidth: 3,
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            pixelOffset: new Cesium.Cartesian2(0, -28),
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            disableDepthTestDistance: Number.POSITIVE_INFINITY,
          } : undefined,
          properties: { recordId: record.id },
        });
      });
  }, []);

  // Only source vectors are rendered. Missing geometry remains a point marker.
  const renderLakeOverlays = useCallback(() => {
    const source = lakeSourceRef.current;
    const Cesium = cesiumRef.current;
    if (!source || !Cesium) return;
    for (const entity of source.entities.values) {
      const recordId = entity.properties?.recordId?.getValue?.();
      const record = glacierCatalog.find(r => r.id === recordId);
      const active = record?.siteId === selectedRef.current?.siteId;
      entity.show = settingsRef.current.showLakes && (settingsRef.current.showEvents || !record?.glofDate);
      if (entity.polygon) {
        entity.polygon.material = Cesium.Color.fromCssColorString("#1877e8").withAlpha(active ? 0.35 : 0.18);
        entity.polygon.outline = true;
        entity.polygon.outlineColor = Cesium.Color.fromCssColorString("#73b7ff");
      }
    }
  }, []);

  const updateBoundaryStyle = useCallback(() => {
    const Cesium = cesiumRef.current;
    const source = glacierSourceRef.current;
    if (!Cesium || !source) return;
    // Support both glacier and lake selection: lake selections highlight their associated glacier boundary.
    let selectedId: string | undefined = selectedRef.current?.rgiId;
    if (!selectedId && selectedRef.current?.associatedName) {
      const assoc = glacierCatalog.find((g) => g.name === selectedRef.current!.associatedName || g.associatedName === selectedRef.current!.associatedName);
      selectedId = assoc?.rgiId;
    }
    // No selection => show all with moderate emphasis so ice area reads on the Himalaya overview
    const hasSelection = !!selectedRef.current;
    for (const entity of source.entities.values) {
      const id = entity.properties?.rgi_id?.getValue?.() ?? entity.properties?.rgi_id ?? entity.properties?.rgiId?.getValue?.();
      const siteId = entity.properties?.site_id?.getValue?.() ?? entity.properties?.site_id;
      const active = hasSelection ? id === selectedId : false;
      // Also consider site_id match for synthetic lakes where rgiId may be missing
      const siteMatch = !!selectedRef.current && !!siteId && siteId === selectedRef.current.siteId;
      const isActive = active || siteMatch;
      entity.show = settingsRef.current.showBoundaries;
      if (entity.polygon) {
        // Glacier = pale icy wash with crisp white-cyan outline – deliberately NOT lake-blue.
        // Lake is deep saturated blue (#0047d4); glacier must read as ice/snow.
        const fill = isActive ? "#eaffff" : "#bfefff";
        const alpha = isActive ? 0.38 : hasSelection ? 0.18 : 0.26;
        entity.polygon.material = Cesium.Color.fromCssColorString(fill).withAlpha(alpha);
        entity.polygon.outline = true;
        entity.polygon.outlineColor = Cesium.Color.fromCssColorString(isActive ? "#ffffff" : "#d6f4ff").withAlpha(isActive ? 1 : 0.95);
        // outlineWidth > 2 is clamped on many GPUs but still produces a crisper edge than 1px
        (entity.polygon as any).outlineWidth = isActive ? 3.5 : 2.2;

      }
    }
    renderLakeOverlays();
  }, [renderLakeOverlays]);

  useEffect(() => {
    let alive = true;
    let viewer: any;
    let resizeObserver: ResizeObserver | undefined;

    async function initialise() {
      if (!hostRef.current) return;
      try {
        window.CESIUM_BASE_URL = "/cesium";
        const Cesium = await loadCesium();
        if (!alive || !hostRef.current) return;
        cesiumRef.current = Cesium;
        const ionToken = process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN;
        if (ionToken) Cesium.Ion.defaultAccessToken = ionToken;
        const imageryProvider = new Cesium.UrlTemplateImageryProvider({
          url: EARTH_IMAGERY,
          credit: new Cesium.Credit("Esri, Maxar, Earthstar Geographics"),
          maximumLevel: 16,
        });
        viewer = new Cesium.Viewer(hostRef.current, {
          animation: false,
          baseLayer: new Cesium.ImageryLayer(imageryProvider, { alpha: Math.max(0.15, settingsRef.current.satelliteOpacity) }),
          baseLayerPicker: false,
          fullscreenButton: false,
          geocoder: false,
          homeButton: false,
          infoBox: false,
          navigationHelpButton: false,
          sceneModePicker: false,
          selectionIndicator: false,
          timeline: false,
          terrainProvider: new Cesium.EllipsoidTerrainProvider(),
          ...(ionToken && typeof Cesium.Terrain?.fromWorldTerrain === "function"
            ? { terrain: Cesium.Terrain.fromWorldTerrain({ requestVertexNormals: true, requestWaterMask: true }) }
            : {}),
          skyAtmosphere: new Cesium.SkyAtmosphere(),
          shouldAnimate: true,
        });
        viewerRef.current = viewer;
        const resizeViewer = () => {
          if (viewer?.isDestroyed?.()) return;
          const host = hostRef.current;
          const canvas = host?.querySelector<HTMLCanvasElement>("canvas");
          if (host && canvas) {
            // Cesium initially creates a 300 × 150 drawing buffer. Explicitly
            // size its canvas before forcing its internal layout calculation.
            const width = Math.max(1, Math.floor(host.clientWidth));
            const height = Math.max(1, Math.floor(host.clientHeight));
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
          }
          viewer.forceResize?.();
          viewer.resize();
          viewer.scene.requestRender();
        };
        resizeObserver = new ResizeObserver(resizeViewer);
        resizeObserver.observe(hostRef.current);
        // Cesium creates a 300 × 150 canvas until explicitly measured.
        requestAnimationFrame(() => requestAnimationFrame(resizeViewer));
        window.setTimeout(resizeViewer, 120);
        // Cap high-DPI rendering: this keeps the research portal responsive on laptops.
        viewer.resolutionScale = Math.min(window.devicePixelRatio || 1, 1.25);
        viewer.scene.requestRenderMode = true;
        viewer.scene.maximumRenderTimeChange = Number.POSITIVE_INFINITY;
        viewer.scene.globe.enableLighting = Boolean(ionToken);
        viewer.scene.globe.showGroundAtmosphere = true;
        viewer.scene.globe.depthTestAgainstTerrain = true;
        // Keep a transient tile/terrain failure from taking down the entire React page.
        viewer.scene.rethrowRenderErrors = false;
        viewer.scene.renderError.addEventListener((renderCause: any) => {
          console.warn("Cesium render warning; continuing with available tiles", renderCause?.message ?? renderCause);
          viewer.scene.requestRender();
        });
        viewer.scene.globe.tileCacheSize = 96;
        viewer.scene.backgroundColor = Cesium.Color.fromCssColorString("#061e2c");
        viewer.scene.screenSpaceCameraController.minimumZoomDistance = 600;
        viewer.scene.screenSpaceCameraController.maximumZoomDistance = 24_000_000;
        // Ensure pinch/zoom gestures are handled by Cesium, not the browser's page zoom.
        viewer.scene.screenSpaceCameraController.enableZoom = true;
        viewer.scene.screenSpaceCameraController.enableTranslate = true;
        viewer.scene.screenSpaceCameraController.enableRotate = true;
        viewer.scene.screenSpaceCameraController.enableTilt = true;
        viewer.scene.screenSpaceCameraController.enableLook = true;
        // Prevent the browser from hijacking pinch-zoom on the globe canvas.
        // `touch-action: none` lets Cesium receive multi-touch gestures directly.
        const canvas: HTMLCanvasElement | undefined = viewer.canvas ?? viewer.scene?.canvas ?? hostRef.current?.querySelector("canvas") ?? undefined;
        if (canvas) {
          (canvas.style as any).touchAction = "none";
          (canvas.style as any).msTouchAction = "none";
          canvas.setAttribute("touch-action", "none");
        }
        if (hostRef.current) {
          (hostRef.current.style as any).touchAction = "none";
          (hostRef.current.style as any).msTouchAction = "none";
        }
        viewer.cesiumWidget.creditContainer.style.display = "none";

        markerSourceRef.current = new Cesium.CustomDataSource("glacier-markers");
        viewer.dataSources.add(markerSourceRef.current);
        lakeSourceRef.current = new Cesium.CustomDataSource("lake-overlays");
        viewer.dataSources.add(lakeSourceRef.current);
        renderMarkers();
        renderLakeOverlays();
        viewer.screenSpaceEventHandler.setInputAction((movement: any) => {
          const picked = viewer.scene.pick(movement.position);
          const id = picked?.id?.properties?.recordId?.getValue?.();
          const record = glacierCatalog.find((item) => item.id === id);
          if (record) selectRef.current(record);
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

        resetView();
        setReady(true);

        const lakePaths = evidenceSites.map(latestLakeBoundary).filter(Boolean);
        for (const boundary of lakePaths) {
          try {
            const source = await Cesium.GeoJsonDataSource.load(boundary!.path, { clampToGround: true });
            if (!alive) return;
            for (const entity of [...source.entities.values]) lakeSourceRef.current.entities.add(entity);
          } catch (cause) {
            console.error("Lake boundary unavailable", cause);
            setBoundaryError(true);
          }
        }
        renderLakeOverlays();

        // The interactive Earth must not wait for the optional vector request.
        // This is the published RGI v7 reference inventory, not a synthetic boundary.
        try {
          const source = await Cesium.GeoJsonDataSource.load(boundaryPathRef.current, { clampToGround: true });
          if (!alive) return;
          glacierSourceRef.current = source;
          viewer.dataSources.add(source);
          updateBoundaryStyle();
        } catch (boundaryCause) {
          console.warn("RGI boundary overlay could not be loaded", boundaryCause);
          setBoundaryError(true);
        }
      } catch (cause) {
        console.error("Cesium globe failed to initialise", cause);
        if (alive) setError(true);
      }
    }
    initialise();
    return () => {
      alive = false;
      resizeObserver?.disconnect();
      if (viewer && !viewer.isDestroyed()) viewer.destroy();
      viewerRef.current = null;
      cesiumRef.current = null;
      glacierSourceRef.current = null;
      lakeSourceRef.current = null;
      markerSourceRef.current = null;
    };
  }, [renderLakeOverlays, renderMarkers, resetView, updateBoundaryStyle]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const layer = viewer.imageryLayers.get(0);
    if (layer) layer.alpha = Math.max(0.15, satelliteOpacity);
    viewer.scene.globe.enableLighting = terrainEnabled;
    renderMarkers();
    renderLakeOverlays();
    updateBoundaryStyle();
    if (selected) flyTo(selected.centre, selected.id.includes("south-lhonak") ? 14_000 : 24_000);
  }, [flyTo, renderLakeOverlays, renderMarkers, satelliteOpacity, selected, showBoundaries, showEvents, showLakes, terrainEnabled, updateBoundaryStyle]);

  return (
    <div className="globe-root" style={{ touchAction: "none" } as React.CSSProperties}>
      <div ref={hostRef} className="cesium-container" aria-label="Interactive three-dimensional Cesium globe" style={{ touchAction: "none" } as React.CSSProperties} />
      {!ready && <div className="globe-loading" role="status">{error ? "Cesium globe could not start." : "Opening the live 3D globe…"}</div>}
      <div className="globe-vignette" aria-hidden="true" />
    </div>
  );
}
