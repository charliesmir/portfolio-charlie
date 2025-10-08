import type { Meta, StoryObj } from "@storybook/nextjs";

import { EducationDecoration } from "./index";

const meta = {
  title: "Atoms/EducationDecoration",
  component: EducationDecoration,
} satisfies Meta<typeof EducationDecoration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
