import type { Meta, StoryObj } from "@storybook/nextjs";

import { NavigationDotBox } from "./index";

const meta = {
  title: "Molecules/NavigationDotBox",
  component: NavigationDotBox,
} satisfies Meta<typeof NavigationDotBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    dots: [
      {
        isActive: true,
      },
      {
        isActive: false,
      },
      {
        isActive: false,
      },
      {
        isActive: false,
      },
    ],
  },
};
