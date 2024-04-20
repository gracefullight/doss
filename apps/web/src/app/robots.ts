import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/auth",
      },
    ],
    sitemap: "https://doss.gracefullight.dev/sitemap.xml",
  };
}
