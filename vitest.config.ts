import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    dir: "tests",
    coverage: {
      reporter: ["text", "json", "html"],
    },
    globals: true,
    css: false,
  },
});
