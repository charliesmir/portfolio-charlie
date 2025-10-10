import type { Meta, StoryObj } from "@storybook/nextjs";

import { Quote } from "./index";

const meta = {
  title: "Atoms/Quote",
  component: Quote,
} satisfies Meta<typeof Quote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title:
      "I am always open to new projects and challenges. Feel free to reach out!",
  },
};
