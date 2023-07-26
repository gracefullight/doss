/** @type {import('eslint').Linter.Config} */
const config = {
  // ? https://github.com/vercel/next.js/blob/canary/packages/eslint-plugin-next/src/index.ts
  extends: ["plugin:@next/next/core-web-vitals"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};

module.exports = config;
