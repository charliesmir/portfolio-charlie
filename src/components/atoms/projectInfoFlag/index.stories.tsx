import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectInfoFlag } from "./index";

const meta = {
  title: "Atoms/ProjectInfoFlag",
  component: ProjectInfoFlag,
} satisfies Meta<typeof ProjectInfoFlag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solutions: Story = {
  args: {
    type: "text",
    description:
      "closely with clients and provided assistance on determining needs and tastes of their potential customers, later adapting the designs to the findings ",

    colorVersion: "accent",
    orientationVersion: "right",
  },
};

export const Problems: Story = {
  args: {
    type: "text",
    description:
      "closely with clients and provided assistance on determining needs and tastes of their potential customers, later adapting the designs to the findings ",

    colorVersion: "primary",
    orientationVersion: "left",
  },
};

export const Tools: Story = {
  args: {
    type: "image",
    images: [
      "/images/icons/CSS.png",
      "/images/icons/Illustrator.png",
      "/images/icons/Indesign.png",
      "/images/icons/Photoshop.png",
    ],
    colorVersion: "accent",
    orientationVersion: "right",
  },
};
