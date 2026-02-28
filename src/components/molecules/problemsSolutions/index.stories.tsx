import type { Meta, StoryObj } from "@storybook/nextjs";

import { ProblemsSolutions } from "./index";

const meta = {
  title: "Molecules/ProblemsSolutions",
  component: ProblemsSolutions,
} satisfies Meta<typeof ProblemsSolutions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solutions: Story = {
  args: {
    flagProblems:
      "closely with clients and provided assistance on determining needs and tastes of their potential customers, later adapting the designs to the findings ",
    flagSolutions:
      "closely with clients and provided assistance on determining needs and tastes of their potential customers, later adapting the designs to the findings ",
  },
};
