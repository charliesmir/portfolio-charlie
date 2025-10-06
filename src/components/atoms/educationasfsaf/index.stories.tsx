import type { Meta, StoryObj } from "@storybook/nextjs";

import { Education } from "./index";

const meta = {
  title: "Atoms/Education",
  component: Education,
} satisfies Meta<typeof Education>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Bc. Construction Architecture",
    university: "Metropolia University of Applied Sciences",
    dates: "2019-2025",
  },
};
