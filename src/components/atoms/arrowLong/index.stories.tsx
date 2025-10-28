import type { Meta, StoryObj } from "@storybook/nextjs";

import { ArrowLong } from "./index";

const meta = {
  title: "Atoms/ArrowLong",
  component: ArrowLong,
} satisfies Meta<typeof ArrowLong>;

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
