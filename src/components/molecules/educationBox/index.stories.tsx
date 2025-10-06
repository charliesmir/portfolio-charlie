import type { Meta, StoryObj } from "@storybook/nextjs";

import { EducationBox } from "./index";

const meta = {
  title: "Molecules/EducationBox",
  component: EducationBox,
} satisfies Meta<typeof EducationBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    education: {
      title: "Bc. Construction Architecture",
      university: "Metropolia University of Applied Sciences",
      dates: "2019-2025",
    },
  },
};
