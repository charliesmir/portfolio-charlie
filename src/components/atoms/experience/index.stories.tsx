import type { Meta, StoryObj } from "@storybook/nextjs";

import { Experience } from "./index";

const meta = {
  title: "Atoms/Experience",
  component: Experience,
} satisfies Meta<typeof Experience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RKBAS: Story = {
  args: {
    title: "Designer",
    company: "RKB AS",
    dates: "2016-2019",
    description:
      "Worked on branding for small businesses as well as advertisements, business cards and merchandise for companies of different scales. Worked closely with clients and provided assistance on determining needs and tastes of their potential customers, later adapting the designs to the findings ",
  },
};

export const Fproject: Story = {
  args: {
    title: "Creative director",
    company: "F-project",
    dates: "2023-2024",
    description:
      "Created brand’s visual identity. Determined two potential audience groups and adapted advertisement materials to each of them. Designed visuals for all the project’s events including art fairs and painting workshops. ",
  },
};

export const Freelance: Story = {
  args: {
    title: "Freelance",
    dates: "2024-now",
    description:
      "Worked on branding for small businesses as well as advertisements, business cards and merchandise for companies of different scales. Worked closely with clients and provided assistance on determining needs and tastes of their potential customers, later adapting the designs to the findings ",
  },
};
