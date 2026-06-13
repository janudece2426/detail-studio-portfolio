import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { sanityDataset, sanityProjectId } from "./src/sanity/env";

export default defineConfig({
  name: "detail_studio",
  title: "Detail Studio Admin",
  projectId: sanityProjectId,
  dataset: sanityDataset,
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
