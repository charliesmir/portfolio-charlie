import type { Meta, StoryObj } from "@storybook/nextjs";

import { PlaceholderProjectCard } from "./index";

const meta = {
  title: "Placeholders/PlaceholderProjectCard",
  component: PlaceholderProjectCard,
} satisfies Meta<typeof PlaceholderProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Project",
    description: "Project Description",
    onClick: () => null,
  },
};
