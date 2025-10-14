import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectTools } from "./index";

const meta = {
  title: "Atoms/ProjectTools",
  component: ProjectTools,
} satisfies Meta<typeof ProjectTools>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tools: Story = {
  args: {
    images: [
      { image: "/images/icons/CSS.png", altText: "CSS" },
      { image: "/images/icons/Illustrator.png", altText: "Illustrator" },
      { image: "/images/icons/Sanity.png", altText: "Sanity" },
      { image: "/images/icons/Storybook.png", altText: "Storybook" },
    ],
  },
};
