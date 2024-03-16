const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

// ? https://github.com/vercel/turbo/blob/main/examples/design-system/packages/eslint-config-custom/storybook.js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["plugin:storybook/recommended"],
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  rules: {
    "import/no-default-export": "off",
  },
};
