"use client";

import { PlaceholderButton } from "@/components/placeholders/button";
import { PlaceholderProjectCardProps } from "@/components/placeholders/projectCard";
import { PlaceholderProjectCardsCarousel } from "@/components/placeholders/projectCardsCarousel";
import { useRouter } from "next/navigation";
import { useRef } from "react";

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

  // Project Cards
  const mockCards: PlaceholderProjectCardProps[] = [
    {
      title: "Project 1",
      description: "Project 1 Description",
      onClick: () => router.push("/projects/1"),
    },
    { title: "Project 2", description: "Project 2 Description" },
    { title: "Project 3", description: "Project 3 Description" },
    { title: "Project 4", description: "Project 4 Description" },
    { title: "Project 5", description: "Project 5 Description" },
  ];

  return (
    <div className="HomePage">
      {/* Placeholders with different colors for setting the navigation*/}
      <div
        className="Header"
        style={{ height: "600px", backgroundColor: "green" }}
      >
        Header
      </div>
      <div className="Intro" style={{ height: "600px" }}>
        Intro
        <PlaceholderButton
          title={"Projects"}
          onClick={() => scrollToSection(projectsRef)}
        />
        <PlaceholderButton
          title={"Experience"}
          onClick={() => scrollToSection(experienceRef)}
        />
        <PlaceholderButton
          title={"Education"}
          onClick={() => scrollToSection(educationRef)}
        />
        <PlaceholderButton
          title={"Contacts"}
          onClick={() => scrollToSection(contactsRef)}
        />
      </div>
      <div
        className="Projects"
        ref={projectsRef}
        style={{ height: "600px", backgroundColor: "green" }}
      >
        Projects
        <PlaceholderProjectCardsCarousel cards={mockCards} />
      </div>
      <div
        className="Experience"
        ref={experienceRef}
        style={{ height: "600px" }}
      >
        Experience
      </div>
      <div className="Education" ref={educationRef} style={{ height: "600px" }}>
        Education
      </div>
      <div
        className="Contacts"
        ref={contactsRef}
        style={{ height: "600px", backgroundColor: "green" }}
      >
        Contacts
      </div>
      <div className="Copyright">Copyright</div>
    </div>
  );
}
