import type { Meta, StoryObj } from "@storybook/react";
import { CheckCircle, Info, XCircle } from "lucide-react"; // 예시 아이콘
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    visible: {
      control: { type: "boolean" },
      description: "표시여부",
      table: {
        defaultValue: { summary: "" },
      },
    },
    message: {
      control: { type: "text" },
      description: "토스트 메세지",
      table: {
        defaultValue: { summary: "토스트" },
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
      table: {
        defaultValue: { summary: "2000" },
      },
    },
    position: {
      control: { type: "radio", options: ["top", "bottom"] },
      description: "토스트의 위치",
      table: {
        defaultValue: { summary: "bottom" },
      },
    },
  },
  parameters: {
    design: {
      type: "iframe",
      url: "https://daisyui.com/components/toast/",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const BasicToast: Story = {
  args: {
    visible: false,
    message: "기본 토스트 메시지",
  },
};

export const SuccessToast: Story = {
  args: {
    visible: false,
    message: "성공 메시지",
    duration: 3000,
    IconComponent: <CheckCircle size={20} />,
  },
};

export const ErrorToast: Story = {
  args: {
    visible: false,
    message: "오류 메시지",
    duration: 3000,
    IconComponent: <XCircle size={20} />,
  },
};

export const InfoToast: Story = {
  args: {
    visible: false,
    message: "정보 메시지",
    duration: 3000,
    IconComponent: <Info size={20} />,
  },
};

export const TopPositionToast: Story = {
  args: {
    visible: false,
    message: "상단에 위치하는 토스트",
    position: "top",
  },
};
