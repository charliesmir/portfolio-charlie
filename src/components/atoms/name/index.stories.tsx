import type { Meta, StoryObj } from "@storybook/nextjs";

import { Name } from "./index";

const meta = {
  title: "Atoms/Name",
  component: Name,
} satisfies Meta<typeof Name>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "CHARLIE SMIRNOVA",
  },
};
