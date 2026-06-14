import { createClient } from "next-sanity";
import { sanityDataset, sanityProjectId } from "./env";

export const hasSanityConfig = Boolean(sanityProjectId) && Boolean(sanityDataset);

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: "2025-01-01",
  useCdn: false,
});
