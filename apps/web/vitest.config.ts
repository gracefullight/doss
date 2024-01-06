import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import type { UserConfig } from "vitest/config";
import { defineConfig, mergeConfig } from "vitest/config";

import rootConfig from "../../vitest.config";

const projectConfig = defineConfig({
  plugins: [react()] as UserConfig["plugins"],
  test: {
    dir: "tests",
    environment: "jsdom",
    setupFiles: "./tests/setupTests.ts",
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
}) as UserConfig;

export default mergeConfig(rootConfig, projectConfig);
