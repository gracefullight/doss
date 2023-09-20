import { defineConfig } from "vitest/config";

// ? https://vitest.dev/config/#configuration
export default defineConfig({
  test: {
    dir: "tests",
    coverage: {
      reporter: ["text", "json-summary", "json", "html"],
    },
    globals: true,
    // ? performance
    css: false,
    useAtomics: true,
  },
});
