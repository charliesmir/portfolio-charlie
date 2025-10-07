import type { Meta, StoryObj } from "@storybook/nextjs";

import { Contacts } from "./index";

const meta = {
  title: "Atoms/Contacts",
  component: Contacts,
} satisfies Meta<typeof Contacts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    link: { title: "+358465391323", url: "https://wa.me/358465391323" },
    image: "",
  },
};
