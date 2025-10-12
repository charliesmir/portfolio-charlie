"use client";
import "./homePage.css";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TopSection } from "@/components/organisms/topSection";
import { NavigationButtonsBox } from "@/components/molecules/navigationButtonsBox";
import { SanityMain } from "@/adapters/types";
import { NavigationButtonProps } from "@/components/atoms/button";
import { AboutCardsStack } from "@/components/molecules/aboutCardsStack";
import { Flag } from "@/components/atoms/flags";
import { FilterList } from "@/components/molecules/filtersList";
import { ProjectCardsCarousel } from "@/components/organisms/projectCardsCarousel";
import { ExperienceBox } from "@/components/molecules/experienceBox";
import { EducationBox } from "@/components/molecules/educationBox";
import { EducationDecoration } from "@/components/atoms/educationDecoration";
import { ContactsSection } from "@/components/organisms/contactsSection";
import { Footer } from "@/components/atoms/footer";
import { adapters } from "@/adapters/adapters";
import { AboutCardProps } from "@/components/atoms/aboutCard";

const { getSanityMain } = adapters.cms();

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

  // Fetch from Sanity
  const [sanityImport, setSanityImport] = useState<SanityMain | null>(null);
  useEffect(() => {
    const fetchSanityMain = async () => {
      const sanityMain = await getSanityMain();
      setSanityImport(sanityMain);
    };
    fetchSanityMain();
  }, []);

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

  const [changedAboutCards, setChangedAboutCards] = useState<AboutCardProps[]>(
    []
  );

  useEffect(() => {
    if (sanityImport) {
      setChangedAboutCards(
        sanityImport.aboutCards.map((card, index) => ({
          ...card, // includes title, type, description, etc.
          isActive: index === 0, // add the extra field if your component supports it
        }))
      );
    }
  }, [sanityImport]);

  const onAboutCardClick = (cardIndex: number) => {
    setChangedAboutCards((prevCards) => {
      if (!prevCards) return prevCards; // still null, do nothing
      return prevCards.map((card, index) => ({
        ...card,
        isActive: index === cardIndex,
      }));
    });
  };

  if (!sanityImport) {
    return <div>Loading...</div>;
  }

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
        {changedAboutCards && (
          <AboutCardsStack
            aboutCards={changedAboutCards.map((card, index) => ({
              ...card,
              onClick: () => onAboutCardClick(index),
            }))}
          />
        )}
      </div>
      <Flag
        title={navButtons[0].title}
        colorVersion={"primary"}
        orientationVersion={"left"}
      />
      <div
        className="HomeProjects"
        ref={projectsRef}
        style={{ height: "900px", backgroundColor: "green" }}
      >
        <FilterList filterCards={sanityImport.filters} />
        <ProjectCardsCarousel cards={sanityImport.projectCards} />
      </div>
      <Flag
        title={navButtons[1].title}
        colorVersion={"accent"}
        orientationVersion={"right"}
      />
      <div
        className="HomeExperience"
        ref={experienceRef}
        style={{ height: "600px" }}
      >
        <ExperienceBox experienceCards={sanityImport.experienceCards} />
      </div>
      <Flag
        title={navButtons[2].title}
        colorVersion={"backgroundDark"}
        orientationVersion={"left"}
      />
      <div
        className="HomeEducation"
        ref={educationRef}
        style={{ height: "960px" }}
      >
        <EducationDecoration />
        <EducationBox educationCards={sanityImport.educationCards} />
      </div>
      <Flag
        title={navButtons[3].title}
        colorVersion={"primary"}
        orientationVersion={"right"}
      />
      <div
        className="HomeContacts"
        ref={contactsRef}
        style={{ height: "600px", backgroundColor: "green" }}
      >
        <ContactsSection
          contactBox={sanityImport.contactBox}
          quote={sanityImport.quote}
        />
      </div>
      <Footer />
    </div>
  );
}
