const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import('eslint').Linter.Config} */
const config = {
  // ? https://github.com/vercel/next.js/blob/canary/packages/eslint-plugin-next/src/index.ts
  extends: ["plugin:@next/next/core-web-vitals", "plugin:valtio/recommended"],
  parserOptions: {
    project,
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  ignorePatterns: ["public/sw.js", "public/workbox-*"],
};

module.exports = config;
