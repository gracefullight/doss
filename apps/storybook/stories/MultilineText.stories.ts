import { MultilineText } from "@doss/ui";
import type { Meta, StoryObj } from "@storybook/react";

// 스토리북 메타데이터를 타입화하여 정의
const meta: Meta<typeof MultilineText> = {
  title: "Components/MultilineText",
  component: MultilineText,
  argTypes: {
    children: {
      control: { type: "text" },
      description: "여러 줄의 텍스트",
    },
  },
};

export default meta;

// 스토리 타입 정의
type MultilineTextStory = StoryObj<typeof MultilineText>;

// 기본 스토리 구성
export const Basic: MultilineTextStory = {
  args: {
    children: "첫 번째 줄\n두 번째 줄\n세 번째 줄",
  },
};

// 추가 스토리 예시 (옵션)
export const WithLongText: MultilineTextStory = {
  args: {
    children:
      "이것은 긴 텍스트 예시입니다. 여러 줄에 걸쳐 표시됩니다.\n두 번째 줄에도 내용이 있습니다.\n세 번째 줄에는 더 많은 내용이 있을 수 있습니다.",
  },
};
