// lib/sanity.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "your_project_id",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});
