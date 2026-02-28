import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectInfoLinks } from "./index";

const meta = {
  title: "Organisms/ProjectInfoLinks",
  component: ProjectInfoLinks,
} satisfies Meta<typeof ProjectInfoLinks>;

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
