import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectButton } from "./index";

const meta = {
  title: "Atoms/ProjectButton",
  component: ProjectButton,
} satisfies Meta<typeof ProjectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FigmaRecipies: Story = {
  args: {
    link: {
      title: "Figma",
      url: "https://www.figma.com/design/Q4viv7OrOprMVZKThEIfox/Recipes?node-id=0-1&t=gaMtiaYcNfYNuY14-1",
    },
  },
};
export const WebsiteFoxAirlines: Story = {
  args: {
    link: {
      title: "Website",
      url: "https://foxairlines.gudokvlad.com/en",
    },
  },
};
