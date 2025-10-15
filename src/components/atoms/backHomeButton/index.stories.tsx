import type { Meta, StoryObj } from "@storybook/nextjs";

import { BackHomeButton } from "./index";

const meta = {
  title: "Atoms/BackHomeButton",
  component: BackHomeButton,
} satisfies Meta<typeof BackHomeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
