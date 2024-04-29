import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { defineConfig, Options } from "tsup";

async function addDirectivesToChunkFiles(distPath = "./dist"): Promise<void> {
  try {
    const files = await readdir(distPath);

    for (const file of files) {
      if (
        file.startsWith("chunk-") &&
        (file.endsWith(".mjs") || file.endsWith(".js"))
      ) {
        const filePath = join(distPath, file);

        const data = await readFile(filePath, "utf8");

        const updatedContent = `"use client";\n${data}`;

        await writeFile(filePath, updatedContent, "utf8");

        console.log(`Directive has been added to ${file}`);
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console -- We need to log the error
    console.error("Error:", err);
  }
}

export default defineConfig((options: Options) => ({
  tsconfig: "tsconfig.lib.json",
  treeshake: true,
  splitting: true,
  entry: ["src/**/*.tsx", "src/globals.css"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  external: ["react"],
  // ? https://github.com/egoist/tsup/issues/835
  async onSuccess() {
    await addDirectivesToChunkFiles();
  },
  ...options,
}));
