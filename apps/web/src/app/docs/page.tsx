"use client";

import { RedocStandalone } from "redoc";

export default function Docs() {
  // ? https://redocly.com/docs/api-reference-docs/configuration/theming
  return <RedocStandalone specUrl="/api/openapi.json" />;
}
