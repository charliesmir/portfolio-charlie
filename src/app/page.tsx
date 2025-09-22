"use client";

import { useRef } from "react";

export default function Home() {
  // Using refs to make automatic scroll to the needed section
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  // Scroll function with smooth animation
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        <button
          style={{
            backgroundColor: "green",
          }}
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </button>
        <button
          style={{
            backgroundColor: "green",
          }}
          onClick={() => scrollToSection(experienceRef)}
        >
          Experience
        </button>
        <button
          style={{
            backgroundColor: "green",
          }}
          onClick={() => scrollToSection(educationRef)}
        >
          Education
        </button>
        <button
          style={{
            backgroundColor: "green",
          }}
          onClick={() => scrollToSection(contactsRef)}
        >
          Contacts
        </button>
      </div>
      <div
        className="Projects"
        ref={projectsRef}
        style={{ height: "600px", backgroundColor: "green" }}
      >
        Projects
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
