import type { Meta, StoryObj } from "@storybook/nextjs";

import { NavigationButton } from "./index";

const meta = {
  title: "Atoms/NavigationButton",
  component: NavigationButton,
} satisfies Meta<typeof NavigationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Projects: Story = {
  args: {
    title: "Projects",
    colorVersion: "light",
  },
};

export const Experience: Story = {
  args: {
    title: "Experience",
    colorVersion: "dark",
  },
};

export const Education: Story = {
  args: {
    title: "Education",
    colorVersion: "light",
  },
};

export const Contacts: Story = {
  args: {
    title: "Contacts",
    colorVersion: "dark",
  },
};
