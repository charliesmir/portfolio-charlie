import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectFlag } from "./index";

const meta = {
  title: "Atoms/ProjectFlag",
  component: ProjectFlag,
} satisfies Meta<typeof ProjectFlag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Banners for RIA union",
    status: "completed",
    type: "Mobile Application, UX/UI & Development",
    highlights:
      "Integrating existing brand identity. Bright colors and descriptive graphics to catch attention in Kide.app feed",
  },
};
