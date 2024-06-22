export default {
  "**/*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}": [
    "biome format --write --no-errors-on-unmatched",
  ],
  "**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": "oxlint --fix",
  "package.json": "sort-package-json",
};
