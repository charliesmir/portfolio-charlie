import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectInfoImages } from "./index";

const meta = {
  title: "Atoms/ProjectInfoImages",
  component: ProjectInfoImages,
} satisfies Meta<typeof ProjectInfoImages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneLine: Story = {
  args: {
    detailImage: "/images/projectImagePlaceholder.png",
    secondaryImage: "/images/projectImagePlaceholder.png",
  },
};
