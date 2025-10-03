import type { Meta, StoryObj } from "@storybook/nextjs";

import { topDecoration } from "./index";

const meta = {
  title: "Atoms/topDecoration",
  component: topDecoration,
} satisfies Meta<typeof topDecoration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};