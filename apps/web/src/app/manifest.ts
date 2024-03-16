import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "DossWeb",
    name: "Doss",
    short_name: "Doss",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#333333",
    background_color: "#212121",
    start_url: "/?pwa=1",
    display: "standalone",
    orientation: "portrait",
    screenshots: [
      {
        src: "demo1.png",
        sizes: "390x844",
      },
      {
        src: "demo2.png",
        sizes: "390x844",
      },
      {
        src: "demo3.png",
        sizes: "390x844",
      },
      {
        src: "demo4.png",
        sizes: "390x844",
      },
    ],
  };
}
