/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  poweredByHeader: false,

  experimental: {
    instrumentationHook: true,
  },

  transpilePackages: ["ahooks", "@doss/db"],

  // ? https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default config;
