import type { Meta, StoryObj } from "@storybook/nextjs";

import { TopSection } from "./index";

const meta = {
  title: "Molecules/TopSection",
  component: TopSection,
} satisfies Meta<typeof TopSection>;

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
