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
    educationCards: [
      {
        title: "Bc. Construction Architecture",
        university: "Metropolia University of Applied Sciences",
        dates: "2019-2025",
      },
      {
        title: "Academic arts. Architecture",
        university: "Lyceum Iogansona",
        dates: "2017-2019",
      },
    ],
  },
};
