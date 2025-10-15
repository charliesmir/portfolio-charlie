import type { Meta, StoryObj } from "@storybook/nextjs";

import { NotFoundQuote } from "./index";

const meta = {
  title: "Atoms/NotFoundQuote",
  component: NotFoundQuote,
} satisfies Meta<typeof NotFoundQuote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
