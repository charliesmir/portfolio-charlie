import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectInfoSoft } from "./index";

const meta = {
  title: "Atoms/ProjectInfoSoft",
  component: ProjectInfoSoft,
} satisfies Meta<typeof ProjectInfoSoft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tools: Story = {
  args: {
    flag: {
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
  },
};
