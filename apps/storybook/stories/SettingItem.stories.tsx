import type { SettingItemProps } from "@doss/ui";
import { SettingItem } from "@doss/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { SettingsIcon } from "lucide-react"; // lucide-react 라이브러리에서 Settings 아이콘 사용

// 스토리북 메타데이터 정의
const meta: Meta<typeof SettingItem> = {
  title: "Components/SettingItem",
  component: SettingItem,
  argTypes: {
    title: {
      control: "text",
      description: "설정 항목의 제목",
    },
    description: {
      control: "text",
      description: "설정 항목의 설명",
    },
    actionText: {
      control: "text",
      description: "액션 텍스트",
    },
    actionColor: {
      control: "text",
      description: "액션 텍스트 색상",
    },
  },
};

export default meta;

// 스토리 타입 정의
type SettingItemStory = StoryObj<SettingItemProps>;

// 기본 스토리
export const Basic: SettingItemStory = {
  render: (args) => (
    <SettingItem {...args} IconComponent={<SettingsIcon size={20} />} />
  ),
  args: {
    title: "설정",
    description: "계정 설정을 관리하세요",
    actionText: "변경",
    actionColor: "text-blue-500",
  },
};

// 추가 스토리 (옵션)
export const WithoutDescription: SettingItemStory = {
  render: (args) => <SettingItem {...args} />,
  args: {
    title: "알림",
    actionText: "활성화",
    actionColor: "text-green-500",
  },
};

// handleLink를 사용하는 추가 스토리 (옵션)
export const WithLink: SettingItemStory = {
  render: (args) => (
    <SettingItem
      {...args}
      IconComponent={<SettingsIcon size={20} />}
      handleLink={() => console.log("Clicked!")}
    />
  ),
  args: {
    title: "사용자 정보",
    description: "개인 정보를 업데이트하세요",
    actionText: "편집",
  },
};
