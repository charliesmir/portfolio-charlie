import type { Meta, StoryObj } from "@storybook/nextjs";

import { FilterList } from "./index";

const meta = {
  title: "Molecules/FilterList",
  component: FilterList,
} satisfies Meta<typeof FilterList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    filterCards: [
      {
        title: "UI/UX design",
        image: "/images/icons/U.png",
      },
      {
        title: "Assets",
        image: "/images/icons/A.png",
      },
      {
        title: "Social Media & Advertising",
        image: "/images/icons/S.png",
      },
      {
        title: "Other",
        image: "/images/icons/O.png",
      },
    ],
  },
};
