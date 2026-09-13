import type { SiteConfig } from "@/domain/site";

export const southLhonak: SiteConfig = {
  id: "south-lhonak",
  name: "South Lhonak Lake",
  country: "India",
  region: "North Sikkim",
  centre: { latitude: 27.9128, longitude: 88.1967 },
  associatedGlacier: "South Lhonak Glacier",
  referenceGlacierId: "RGI2000-v7.0-G-15-07986",
  elevationMetres: 5200,
  description:
    "A moraine-dammed lake in North Sikkim, studied here as a retrospective glacier–lake and 2023 GLOF case study.",
  timeline: [
    { id: "2016", label: "2016", observationDate: "2016", kind: "annual", qualityStatus: "planned" },
    { id: "2017", label: "2017", observationDate: "2017", kind: "annual", qualityStatus: "planned" },
    { id: "2018", label: "2018", observationDate: "2018", kind: "annual", qualityStatus: "planned" },
    { id: "2019", label: "2019", observationDate: "2019", kind: "annual", qualityStatus: "planned" },
    { id: "2020", label: "2020", observationDate: "2020", kind: "annual", qualityStatus: "planned" },
    { id: "2021", label: "2021", observationDate: "2021", kind: "annual", qualityStatus: "planned" },
    { id: "2022", label: "2022", observationDate: "2022", kind: "annual", qualityStatus: "planned" },
    { id: "2023-pre", label: "Sep 2023", observationDate: "2023-09", kind: "pre_event", qualityStatus: "planned" },
    { id: "2023-post", label: "Oct 2023", observationDate: "2023-10", kind: "post_event", qualityStatus: "planned" },
    { id: "2024", label: "2024", observationDate: "2024", kind: "annual", qualityStatus: "planned" },
    { id: "2025", label: "2025", observationDate: "2025", kind: "annual", qualityStatus: "planned" },
    { id: "2026", label: "Latest 2026", observationDate: "2026", kind: "annual", qualityStatus: "planned" }
  ],
  sources: [
    {
      id: "icimod-2020-south-lhonak",
      title: "Future glacial lake outburst flood hazard of the South Lhonak lake, Sikkim Himalaya",
      url: "https://lib.icimod.org/records/8vr1k-7zx76",
      accessedAt: "2026-09-09"
    },
    {
      id: "rgi-v7",
      title: "Randolph Glacier Inventory version 7 glacier product",
      url: "https://www.glims.org/rgi_user_guide/products/glacier_product.html",
      accessedAt: "2026-09-09"
    }
  ],
  readiness: "evidence-ready"
};
