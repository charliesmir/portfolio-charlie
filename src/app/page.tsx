"use client";
import "./homePage.css";

import { PlaceholderButton } from "@/components/placeholders/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TopSection } from "@/components/organisms/topSection";
import { NavigationButtonsBox } from "@/components/molecules/navigationButtonsBox";
import { SanityMain } from "@/adapters/types";
import { NavigationButtonProps } from "@/components/atoms/button";
import { AboutCardsStack } from "@/components/molecules/aboutCardsStack";

export default function Home() {
  // Basic settings
  const router = useRouter();

  // Using refs to make automatic scroll to the needed section
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  // Scroll function with smooth animation
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navButtons: NavigationButtonProps[] = [
    {
      title: "Projects",
      colorVersion: "light",
      onClick: () => scrollToSection(projectsRef),
    },
    {
      title: "Experience",
      colorVersion: "dark",
      onClick: () => scrollToSection(experienceRef),
    },
    {
      title: "Education",
      colorVersion: "light",
      onClick: () => scrollToSection(educationRef),
    },
    {
      title: "Contacts",
      colorVersion: "dark",
      onClick: () => scrollToSection(contactsRef),
    },
  ];

  const sanityImport: SanityMain = {
    name: { title: "CHARLIE SMIRNOVA" },
    profession: { title: "UI/UX Designer, Illustrator and Architect" },
    profile: { image: "/images/portrait.svg" },
    aboutCards: [
      {
        title: "About",
        type: "text",
        description:
          "I bring attention to detail, functionality, and user needs from architecture into digital design. I create intuitive, user-centered interfaces, using Figma, Illustrator, and implement them in CSS. My designs balance aesthetics and practicality, adapting easily to different brands and user requirements.",
      },
      {
        title: "How I work with clients",
        type: "text",
        description:
          "With my architectural background, I am used to adapting not only to client’s taste, but also to technical and budgetary constrains. Close communication on every design stage ensures smooth and easy to follow workflow for everyone involved.",
      },
      {
        title: "My design process ",
        type: "text",
        description:
          "I start projects by defining the tech stack to make sure that my design will suite not only esthetical, but technical trajectory of the client. It is also useful to know the business strategy of the project to better tailor design solutions to certain target audiences. After careful analysis I create several design variations showcasing different approaches",
      },
      {
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
    ],
  };

  const [changedAboutCards, setChangedAboutCards] = useState(
    sanityImport.aboutCards.map((card, index) => ({
      ...card,
      isActive: index === 0,
    })),
  );

  const onAboutCardClick = (cardIndex: number) => {
    setChangedAboutCards((prevCards) =>
      prevCards.map((card, index) => ({
        ...card,
        isActive: index === cardIndex,
      })),
    );
  };

  return (
    <div className="HomePage">
      {/* Placeholders with different colors for setting the navigation*/}
      <div className="HomeHeader">
        <TopSection
          name={sanityImport.name}
          profession={sanityImport.profession}
          profile={sanityImport.profile}
        />
      </div>
      <div className="HomeIntro" style={{ height: "600px" }}>
        <NavigationButtonsBox buttons={navButtons} />
        <AboutCardsStack
          aboutCards={changedAboutCards.map((card, index) => ({
            ...card,
            onClick: () => onAboutCardClick(index),
          }))}
        />
      </div>
      <div
        className="projects"
        ref={projectsRef}
        style={{ height: "600px", backgroundColor: "green" }}
      >
        Projects
      </div>
      <div
        className="experience"
        ref={experienceRef}
        style={{ height: "600px" }}
      >
        Experience
      </div>
      <div className="education" ref={educationRef} style={{ height: "600px" }}>
        Education
      </div>
      <div
        className="contacts"
        ref={contactsRef}
        style={{ height: "600px", backgroundColor: "green" }}
      >
        Contacts
      </div>
      <div className="copyright">Copyright</div>
    </div>
  );
}
