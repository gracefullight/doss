import withPWAInit from "@ducanh2912/next-pwa";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs";
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  poweredByHeader: false,

  experimental: {
    instrumentationHook: true,
  },

  // ? https://nextjs.org/docs/app/api-reference/next-config-js/optimizePackageImports
  transpilePackages: ["@doss/db", "ahooks"],

  // ? https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
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

// ? https://ducanh-next-pwa.vercel.app/docs/next-pwa/configuring
/** @type {import("@ducanh2912/next-pwa").PluginOptions} */
const pwaConfig = {
  dest: "public",
  reloadOnOnline: true,
};

const withPWA = withPWAInit(pwaConfig);
const withBA = withBundleAnalyzer({ enabled: false, openAnalyzer: false });

export default withSentryConfig(
  withPWA(withBA(config)),
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "gracefullight",
    project: "doss",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpile SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  },
);
