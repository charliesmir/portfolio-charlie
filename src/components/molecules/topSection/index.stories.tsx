import type { Meta, StoryObj } from "@storybook/nextjs";

import { topSection } from "./index";

const meta = {
  title: "Molecules/TopSection",
  component: topSection,
} satisfies Meta<typeof topSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: {
      title: "CHARLIE SMIRNOVA",
    },
    profession: {
      title: "UI/UX Designer, Illustrator and Architect",
    },
  },
};
