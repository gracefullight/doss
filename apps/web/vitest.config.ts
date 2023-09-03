import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    dir: "tests",
    coverage: {
      reporter: ["text", "json", "html"],
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setupTests.ts",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
});
