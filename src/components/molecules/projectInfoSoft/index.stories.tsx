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
    images: [
      { image: "/images/icons/CSS.png", altText: "CSS" },
      { image: "/images/icons/Illustrator.png", altText: "Illustrator" },
      { image: "/images/icons/Indesign.png", altText: "Indesign" },
      { image: "/images/icons/Photoshop.png", altText: "Photoshop" },
    ],
  },
};
