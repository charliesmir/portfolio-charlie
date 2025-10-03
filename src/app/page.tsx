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

  // Mock project cards
  const mockCards: PlaceholderProjectCardProps[] = [
    {
      title: "Project 1",
      description: "Project 1 Description",
      onClick: () => router.push("/projects/1"),
    },
    {
      title: "Fox Airlines",
      description: "Fox Airlines lorem ipsum",
      onClick: () => router.push("/projects/airlines"),
    },
    {
      title: "F. Project assets",
      description: "Something here",
      onClick: () => router.push("/projects/f-project-assets"),
    },
    {
      title: "Recipes app",
      description: "In development",
      onClick: () => router.push("/projects/recipes-app"),
    },
    {
      title: "Test Project",
      description: "Just to test carousel",
      onClick: () => router.push("/projects/test"),
    },
  ];

  return (
    <div className="homePage">
      {/* Placeholders with different colors for setting the navigation*/}
      <div
        className="header"
        style={{ height: "600px", backgroundColor: "green" }}
      >
        Header, check the tag
      </div>
      <div className="intro" style={{ height: "600px" }}>
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
        className="projects"
        ref={projectsRef}
        style={{ height: "600px", backgroundColor: "green" }}
      >
        Projects
        <PlaceholderProjectCardsCarousel cards={mockCards} />
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
