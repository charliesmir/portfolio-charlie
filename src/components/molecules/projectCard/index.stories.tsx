import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProjectCard } from "./index";

const meta = {
  title: "Molecules/ProjectCard",
  component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    projectTag: {
      title: "F-project branding",
      image: "/images/icons/S.png",
    },
    description:
      "A cohesive brand identity uniting two distinct target audiences. Welcoming posters and print materials encourage participation in new art-related activities, with typography playing a central role as a design element to create a warm, approachable atmosphere.",
    onClick: () => null,
  },
};
