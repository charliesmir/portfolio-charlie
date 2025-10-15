import type { Meta, StoryObj } from "@storybook/nextjs";

import { NotFoundSection } from "./index";

const meta = {
  title: "Molecules/NotFoundSection",
  component: NotFoundSection,
} satisfies Meta<typeof NotFoundSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    button: {},
  },
};
