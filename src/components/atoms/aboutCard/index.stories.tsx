import type { Meta, StoryObj } from "@storybook/nextjs";

import { AboutCard } from "./index";

const meta = {
  title: "Atoms/AboutCard",
  component: AboutCard,
} satisfies Meta<typeof AboutCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const About: Story = {
  args: {
    title: "About",
    type: "text",
    description:
      "I bring attention to detail, functionality, and user needs from architecture into digital design. I create intuitive, user-centered interfaces, using Figma, Illustrator, and implement them in CSS. My designs balance aesthetics and practicality, adapting easily to different brands and user requirements.",
  },
};

export const Clients: Story = {
  args: {
    title: "How I work with clients",
    type: "text",
    description:
      "With my architectural background, I am used to adapting not only to client’s taste, but also to technical and budgetary constrains. Close communication on every design stage ensures smooth and easy to follow workflow for everyone involved.",
  },
};

export const Process: Story = {
  args: {
    title: "My design process ",
    type: "text",
    description:
      "I start projects by defining the tech stack to make sure that my design will suite not only esthetical, but technical trajectory of the client. It is also useful to know the business strategy of the project to better tailor design solutions to certain target audiences. After careful analysis I create several design variations showcasing different approaches",
  },
};

export const Tools: Story = {
  args: {
    title: "Tools",
    type: "image",
    images: [
      { image: "/images/icons/CSS.png", altText: "CSS" },
      { image: "/images/icons/Illustrator.png", altText: "Illustrator" },
      { image: "/images/icons/Indesign.png", altText: "Indesign" },
      { image: "/images/icons/Photoshop.png", altText: "Photoshop" },
      { image: "/images/icons/Sanity.png", altText: "Sanity" },
      { image: "/images/icons/Sketchup.png", altText: "SketchUp" },
      { image: "/images/icons/Storybook.png", altText: "Storybook" },
      { image: "/images/icons/Unity.png", altText: "Unity" },
      { image: "", altText: "" },
    ],
  },
};
