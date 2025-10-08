import type { Meta, StoryObj } from "@storybook/nextjs";

import { Filter } from "./index";

const meta = {
  title: "Atoms/Filter",
  component: Filter,
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneLine: Story = {
  args: {
    title: "UI/UX design",
    image: "/images/icons/U.png",
  },
};
export const TwoLines: Story = {
  args: {
    title: "Social Media & Advertising",
    image: "/images/icons/S.png",
  },
};
