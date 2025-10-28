import type { Meta, StoryObj } from "@storybook/nextjs";

import { LoaderAnimation } from "./index";

const meta = {
  title: "Atoms/LoaderAnimation",
  component: LoaderAnimation,
} satisfies Meta<typeof LoaderAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
