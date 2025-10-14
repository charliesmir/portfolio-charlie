import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectButtonsGrid } from "./index";

const meta = {
  title: "Molecules/ProjectButtonBox",
  component: ProjectButtonsGrid,
} satisfies Meta<typeof ProjectButtonsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttons: [
      {
        link: {
          title: "Website",
          url: "https://foxairlines.gudokvlad.com/en",
        },
      },
      {
        link: {
          title: "Figma",
          url: "https://www.figma.com/design/Q4viv7OrOprMVZKThEIfox/Recipes?node-id=0-1&t=gaMtiaYcNfYNuY14-1",
        },
      },
      {
        link: {
          title: "Website",
          url: "https://foxairlines.gudokvlad.com/en",
        },
      },
    ],
  },
};
