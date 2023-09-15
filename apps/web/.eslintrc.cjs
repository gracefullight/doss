/** @type {import('eslint').Linter.Config} */
module.exports = {
  // ? https://turbo.build/repo/docs/handbook/linting/eslint#how-to-use-the-eslint-config-custom-package
  root: true,
  extends: [
    "@doss/eslint-config/base",
    "@doss/eslint-config/nextjs",
    "@doss/eslint-config/react",
  ],
};
