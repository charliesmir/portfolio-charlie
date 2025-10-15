import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectPageTopSection } from "./index";

const meta = {
  title: "Molecules/ProjectPageTopSection",
  component: ProjectPageTopSection,
} satisfies Meta<typeof ProjectPageTopSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: "/images/HelsinkiGuideImage.png",
    flag: {
      title: "Banners for RIA union",
      status: "completed",
      highlights:
        "Integrating existing brand identity. Bright colors and descriptive graphics to catch attention in Kide.app feed",
    },
    button: {
      title: "Back to home",
    },
  },
};
