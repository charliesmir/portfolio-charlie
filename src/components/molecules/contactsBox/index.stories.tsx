import type { Meta, StoryObj } from "@storybook/nextjs";

import { ContactsBox } from "./index";

const meta = {
  title: "Molecules/ContactsBox",
  component: ContactsBox,
} satisfies Meta<typeof ContactsBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    contactsCards: [
      {
        link: {
          title: "+358465391323",
          url: "https://wa.me/358465391323",
        },
        image: "",
      },
      {
        link: {
          title: "charlie.smirnova@gmail.com",
          url: "mailto:charlie.smirnova@gmail.com",
        },
        image: "",
      },
      {
        link: {
          title: "charlieandarchitecture",
          url: "https://www.instagram.com/charlieandarchitecture",
        },
        image: "",
      },
      {
        link: {
          title: "Charlie Smirnova",
          url: "https://www.linkedin.com/in/charliesmirnova/",
        },
        image: "",
      },
      {
        link: {
          title: "charliesmir",
          url: "https://github.com/charliesmir",
        },
        image: "",
      },
    ],
  },
};
