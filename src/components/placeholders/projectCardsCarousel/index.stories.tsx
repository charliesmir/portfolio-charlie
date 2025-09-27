import type { Meta, StoryObj } from "@storybook/nextjs";

import { PlaceholderProjectCardsCarousel } from "./index";
import { PlaceholderProjectCardProps } from "../projectCard";

const meta = {
  title: "Placeholders/PlaceholderProjectCardsCarousel",
  component: PlaceholderProjectCardsCarousel,
} satisfies Meta<typeof PlaceholderProjectCardsCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockCards: PlaceholderProjectCardProps[] = [
  { title: "Project 1", description: "Project 1 Description" },
  { title: "Project 2", description: "Project 2 Description" },
  { title: "Project 3", description: "Project 3 Description" },
  { title: "Project 4", description: "Project 4 Description" },
];

export const Primary: Story = {
  args: {
    cards: mockCards,
  },
};
