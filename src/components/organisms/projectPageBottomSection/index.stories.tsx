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
    flagPS: {
      flagProblems:
        "closely with clients and provided assistance on determining needs and tastes of their potential customers, later adapting the designs to the findings ",
      flagSolutions:
        "closely with clients and provided assistance on determining needs and tastes of their potential customers, later adapting the designs to the findings ",
    },
    images: {
      detailImage: "/images/projectImagePlaceholder.png",
      secondaryImage: "/images/projectImagePlaceholder.png",
    },
    flagSoftImages: [
      { image: "/images/icons/CSS.png", altText: "CSS" },
      { image: "/images/icons/Illustrator.png", altText: "Illustrator" },
      { image: "/images/icons/Indesign.png", altText: "Indesign" },
      { image: "/images/icons/Photoshop.png", altText: "Photoshop" },
    ],
  },
};
