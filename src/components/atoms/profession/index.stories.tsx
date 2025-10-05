import type { Meta, StoryObj } from "@storybook/nextjs";

import { Profession } from "./index";

const meta = {
  title: "Atoms/Profession",
  component: Profession,
} satisfies Meta<typeof Profession>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "UI/UX Designer, Illustrator and Architect"
  },
};
