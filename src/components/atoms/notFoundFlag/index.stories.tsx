import type { Meta, StoryObj } from "@storybook/nextjs";

import { NotFoundFlag } from "./index";

const meta = {
  title: "Atoms/NotFound",
  component: NotFoundFlag,
} satisfies Meta<typeof NotFoundFlag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "404",
  },
};
