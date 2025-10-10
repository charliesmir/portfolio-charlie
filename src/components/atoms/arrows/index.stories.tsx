import type { Meta, StoryObj } from "@storybook/nextjs";

import { Arrow } from "./index";

const meta = {
  title: "Atoms/Arrow",
  component: Arrow,
} satisfies Meta<typeof Arrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  args: {
    direction: "right",
    onClick: () => alert("test right"),
  },
};
export const Left: Story = {
  args: {
    direction: "left",
    onClick: () => alert("test left"),
  },
};
export const Top: Story = {
  args: {
    direction: "top",
    onClick: () => alert("test top"),
  },
};
