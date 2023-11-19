import type { ServiceCarouselProps } from "@doss/ui";
import { ServiceCarousel } from "@doss/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ServiceCarousel> = {
  component: ServiceCarousel,
  argTypes: {
    isDark: {
      control: { type: "boolean" },
      description: "어두운 배경색",
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ServiceCarousel>;

const items: ServiceCarouselProps["items"] = [
  {
    subheader: "테스트",
    title: "두줄\n타이틀",
    icon: null,
  },
  {
    subheader: "테스트",
    title: "타이틀",
    icon: null,
  },
];

export const BasicServiceCarousel: Story = {
  render: (props) => <ServiceCarousel items={items} isDark={props.isDark} />,
  name: "ServiceCarousel",
  args: {},
  parameters: {
    design: {
      type: "iframe",
      url: "https://daisyui.com/components/carousel/",
    },
  },
};
