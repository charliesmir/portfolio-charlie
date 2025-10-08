import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectTag } from "./index";

const meta = {
  title: "Atoms/ProjectTag",
  component: ProjectTag,
} satisfies Meta<typeof ProjectTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneLine: Story = {
  args: {
    title: "Project name",
    image: "/images/icons/U.png",
  },
};
export const TwoLines: Story = {
  args: {
    title: "Project name Project name Project name ",
    image: "/images/icons/U.png",
  },
};
