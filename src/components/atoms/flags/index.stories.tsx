import type { Meta, StoryObj } from "@storybook/nextjs";

import { Flag } from "./index";

const meta = {
  title: "Atoms/Flags",
  component: Flag,
} satisfies Meta<typeof Flag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Projects: Story = {
  args: {
    title: "Projects",
    colorVersion: "primary",
    orientationVersion: "left",
  },
};

export const Experience: Story = {
  args: {
    title: "Experience",
    colorVersion: "accent",
    orientationVersion: "right",
  },
};

export const Education: Story = {
  args: {
    title: "Education",
    colorVersion: "backgroundDark",
    orientationVersion: "left",
  },
};

export const Contacts: Story = {
  args: {
    title: "Contacts",
    colorVersion: "primary",
    orientationVersion: "right",
  },
};
