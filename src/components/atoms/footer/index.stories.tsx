import type { Meta, StoryObj } from "@storybook/nextjs";

import { Footer } from "./index";

const meta = {
  title: "Atoms/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
