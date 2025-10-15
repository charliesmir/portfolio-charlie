import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectPageBottomSection } from "./index";

const meta = {
  title: "Organisms/ProjectPageBottomSection",
  component: ProjectPageBottomSection,
} satisfies Meta<typeof ProjectPageBottomSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: "/images/HelsinkiGuideOpenImage.png",
    tools: {
      images: [
        { image: "/images/icons/CSS.png", altText: "CSS" },
        { image: "/images/icons/Illustrator.png", altText: "Illustrator" },
        { image: "/images/icons/Sanity.png", altText: "Sanity" },
        { image: "/images/icons/Storybook.png", altText: "Storybook" },
      ],
    },
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
    ],
  },
};
