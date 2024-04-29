import type { ThemeVarsPartial } from "@storybook/theming";
import { create } from "@storybook/theming";

const baseTheme: ThemeVarsPartial = {
  base: "dark",
  brandTitle: "@doss/ui",
  brandUrl: "https://github.com/gracefullight/doss",
};

export default create(baseTheme);
