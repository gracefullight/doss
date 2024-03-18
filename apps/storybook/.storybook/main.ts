import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react-swc";
import { mergeConfig } from "vite";

// ? https://github.com/storybookjs/storybook/blob/next/code/addons/themes/docs/getting-started/tailwind.md
const config: StorybookConfig = {
  stories: [
    "../stories/*.stories.@(ts|tsx)",
    "../stories/**/*.stories.@(ts|tsx)",
  ],

  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/addon-designs",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  core: {
    disableTelemetry: true,
  },

  async viteFinal(config, { configType }) {
    // ? customize the Vite config here
    return mergeConfig(config, {
      plugins: [react()],
      resolve: {
        alias: [],
      },
    });
  },

  docs: {
    autodocs: true,
  },
};

export default config;
