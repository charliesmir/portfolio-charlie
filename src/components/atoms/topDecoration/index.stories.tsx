import type { Meta, StoryObj } from "@storybook/nextjs";

import { TopDecoration } from "./index";

const meta = {
  title: "Atoms/TopDecoration",
  component: TopDecoration,
} satisfies Meta<typeof TopDecoration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
