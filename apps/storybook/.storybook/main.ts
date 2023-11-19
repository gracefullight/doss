import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

// ? https://github.com/storybookjs/storybook/blob/next/code/addons/themes/docs/getting-started/tailwind.md
const config: StorybookConfig = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/addon-designs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  core: {},

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return mergeConfig(config, {
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
