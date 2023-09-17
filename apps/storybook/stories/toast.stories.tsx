import { Toast } from "@doss/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
  component: Toast,
  argTypes: {
    visible: {
      control: { type: "boolean" },
      description: "표시여부",
      table: {
        defaultValue: { summary: false },
      },
    },
    message: {
      control: { type: "text" },
      description: "토스트 메세지",
      defaultValue: "토스트",
      table: {
        defaultValue: { summary: "" },
      },
    },
    duration: {
      control: {
        type: "range",
        min: 2000,
        max: 30000,
        step: 1000,
      },
      description: "노출시간 (ms)",
      defaultValue: 2000,
      table: {
        defaultValue: { summary: 2000 },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const BasicToast: Story = {
  render: (props) => (
    <Toast
      visible={props.visible}
      message={props.message}
      duration={props.duration}
    />
  ),
  name: "Toast",
  args: {
    visible: true,
    message: "토스트",
  },
};
