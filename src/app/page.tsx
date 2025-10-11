"use client";
import "./homePage.css";

import { PlaceholderButton } from "@/components/placeholders/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TopSection } from "@/components/organisms/topSection";
import { NavigationButtonsBox } from "@/components/molecules/navigationButtonsBox";
import { SanityMain } from "@/adapters/types";
import { NavigationButtonProps } from "@/components/atoms/button";

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
