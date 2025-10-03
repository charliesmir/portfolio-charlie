import type { Meta, StoryObj } from "@storybook/nextjs";

import { Profile } from "./index";

const meta = {
  title: "Atoms/Profile",
  component: Profile,
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};