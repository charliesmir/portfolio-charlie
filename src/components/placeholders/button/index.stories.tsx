import type { Meta, StoryObj } from "@storybook/nextjs";

import { PlaceholderButton } from "./index";

const meta = {
  title: "Placeholders/PlaceholderButton",
  component: PlaceholderButton,
} satisfies Meta<typeof PlaceholderButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Button",
  },
};
