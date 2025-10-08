import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectCard } from "./index";

const meta = {
  title: "Molecules/ProjectCard",
  component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FProject: Story = {
  args: {
    projectTag: {
      title: "F-Project: Brand Identity & Campaign Design",
      image: "/images/icons/S.png",
    },
    image: "/images/FProjectImage.png",
    description:
      "A cohesive brand identity uniting two distinct target audiences. Welcoming posters and print materials encourage participation in new art-related activities, with typography playing a central role as a design element to create a warm, approachable atmosphere.",
    onClick: () => null,
  },
};
export const HelsinkiGuide: Story = {
  args: {
    projectTag: {
      title: "Helsinki Urban Planning Guide",
      image: "/images/icons/O.png",
    },
    image: "/images/HelsinkiGuideImage.png",
    description:
      "A multi-day excursion guide focused on urban planning in Helsinki. Rich photography and carefully structured layouts make the guide engaging both at home and during on-site visits, combining education with visual storytelling.",
    onClick: () => null,
  },
};
