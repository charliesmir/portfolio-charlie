import type { Meta, StoryObj } from "@storybook/nextjs";

import { NavigationButtonsBox } from "./index";

const meta = {
  title: "Molecules/NavigationButtonBox",
  component: NavigationButtonsBox,
} satisfies Meta<typeof NavigationButtonsBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttons: [
      {
        title: "Projects",
        colorVersion: "light",
      },
      {
        title: "Experience",
        colorVersion: "dark",
      },
      {
        title: "Education",
        colorVersion: "light",
      },
      {
        title: "Contacts",
        colorVersion: "dark",
      },
    ],
  },
};
