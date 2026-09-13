import type { SiteDataset } from "@/domain/site-dataset";
import { southLhonak } from "./south-lhonak";
import { southLhonakObservations } from "./south-lhonak-observations";

/** The first complete, reviewed site bundle. Other sites must implement this same contract. */
export const southLhonakDataset: SiteDataset = {
  site: southLhonak,
  observations: southLhonakObservations,
  boundaries: [
    {
      id: "south-lhonak-glacier-rgi-v7-baseline",
      kind: "glacier",
      path: "/reference/south-lhonak-rgi-v7-reference.geojson",
      observationDate: "2000-12-26",
      sourceId: "rgi-v7",
      status: "historical_baseline",
    },
  ],
  layers: [],
  events: [
    {
      id: "south-lhonak-2023-glof",
      date: "2023-10-04",
      title: "South Lhonak GLOF",
      summary: "Published ISRO/NRSC evidence documents a major lake drainage event.",
      sourceId: "icimod-2020-south-lhonak",
    },
  ],
  eventImagery: {
    pre: { imagePath: "/imagery/south-lhonak-pre-event-2023-09-16.png", date: "16 Sep 2023" },
    post: { imagePath: "/imagery/south-lhonak-post-event-2023-10-24.png", date: "24 Oct 2023" },
    sar: {
      prePath: "/imagery/south-lhonak-sar-pre-2023-09-28.png",
      postPath: "/imagery/south-lhonak-sar-post-2023-10-07.png",
      preDate: "28 Sep 2023",
      postDate: "7 Oct 2023",
    },
    note: "ISRO/NRSC event assessment: approximately 105 ha drained.",
  },
  sources: southLhonak.sources,
};
