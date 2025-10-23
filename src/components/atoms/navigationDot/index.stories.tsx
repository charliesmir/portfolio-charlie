import type { Meta, StoryObj } from "@storybook/nextjs";

import { NavigationDot } from "./index";

const meta = {
  title: "Atoms/NavigationDot",
  component: NavigationDot,
} satisfies Meta<typeof NavigationDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    isActive: true,
  },
};
