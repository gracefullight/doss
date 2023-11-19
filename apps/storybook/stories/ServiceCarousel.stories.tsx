import type { ServiceCarouselProps } from "@doss/ui";
import { ServiceCarousel } from "@doss/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Settings, User } from "lucide-react";

const meta: Meta<typeof ServiceCarousel> = {
  title: "Components/ServiceCarousel",
  component: ServiceCarousel,
  argTypes: {
    isDark: {
      control: { type: "boolean" },
      description: "어두운 배경색",
    },
  },
  parameters: {
    design: {
      type: "iframe",
      url: "https://daisyui.com/components/carousel/",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ServiceCarousel>;

const items: ServiceCarouselProps["items"] = [
  {
    subheader: "설정",
    title: "두줄\n타이틀",
    IconComponent: <Settings size={20} />,
  },
  {
    subheader: "사용자",
    title: "단일\n타이틀",
    IconComponent: <User size={20} />,
  },
];

export const Basic: Story = {
  render: (props) => <ServiceCarousel items={items} isDark={props.isDark} />,
  args: {
    isDark: false,
  },
};

export const Darker: Story = {
  render: () => <ServiceCarousel items={items} isDark={true} />,
  name: "Dark Mode ServiceCarousel",
};
