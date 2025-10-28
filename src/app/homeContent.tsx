"use client";

import "./homePage.css";
import { useRef, useState } from "react";
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
import { AboutCardProps } from "@/components/atoms/aboutCard";
import { useRouter } from "next/navigation";
import { MobileAboutCardsSection } from "@/components/organisms/mobileAboutCardsSection";
import { Arrow } from "@/components/atoms/arrows";

interface HomeContentProps {
  sanityImport: SanityMain;
}

export default function HomeContent({ sanityImport }: HomeContentProps) {
  // Basic settings
  const router = useRouter();

  // Using refs to make automatic scroll to the needed section
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Scroll function with smooth animation
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Navigation buttons
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

  // About cards (local interactive state)
  const [changedAboutCards, setChangedAboutCards] = useState<AboutCardProps[]>(
    sanityImport.aboutCards.map((card, index) => ({
      ...card,
      isActive: index === 0,
    }))
  );

  const onAboutCardClick = (cardIndex: number) => {
    setChangedAboutCards((prevCards) =>
      prevCards.map((card, index) => ({
        ...card,
        isActive: index === cardIndex,
      }))
    );
  };

  return (
    <div className="HomePage">
      <div className="HomeHeader" ref={headerRef}>
        <TopSection
          name={sanityImport.name}
          profession={sanityImport.profession}
          profile={sanityImport.profile}
        />
      </div>
      <div className="HomeIntro">
        <div className="HomeIntroMobileCardBox">
          <MobileAboutCardsSection
            aboutCards={sanityImport.aboutCards.map((card) => ({
              ...card,
            }))}
          />
        </div>
        <div className="HomeNavButtons">
          <NavigationButtonsBox buttons={navButtons} />
        </div>
        <div className="HomeIntroCardBox">
          <AboutCardsStack
            aboutCards={changedAboutCards.map((card, index) => ({
              ...card,
              onClick: () => onAboutCardClick(index),
            }))}
          />
        </div>
      </div>
      <div className="HomeProjectsFlag" ref={projectsRef}>
        <Flag
          title={navButtons[0].title}
          colorVersion="primary"
          orientationVersion="left"
        />
      </div>
      <div className="HomeProjects">
        <div className="HomeFilterList">
          <FilterList filterCards={sanityImport.filters} />
        </div>
        <div className="HomeProjectList">
          <ProjectCardsCarousel
            cards={sanityImport.projectCards.map((card) => ({
              ...card,
              onClick: () => router.push(`/projects/${card.slug}`),
            }))}
          />
        </div>
      </div>
      <div className="HomeExperienceFlag" ref={experienceRef}>
        <Flag
          title={navButtons[1].title}
          colorVersion="accent"
          orientationVersion="right"
        />
      </div>
      <div className="HomeExperience">
        <ExperienceBox experienceCards={sanityImport.experienceCards} />
      </div>
      <div className="HomeEducationFlag" ref={educationRef}>
        <Flag
          title={navButtons[2].title}
          colorVersion="backgroundDark"
          orientationVersion="left"
        />
      </div>
      <div className="HomeEducation">
        <EducationDecoration />
        <div className="HomeEducationBox">
          <EducationBox educationCards={sanityImport.educationCards} />
        </div>
      </div>
      <div className="HomeContactsFlag" ref={contactsRef}>
        <Flag
          title={navButtons[3].title}
          colorVersion="primary"
          orientationVersion="right"
        />
      </div>
      <div className="HomeContacts">
        <div className="HomeContactsContents">
          <ContactsSection
            contactBox={sanityImport.contactBox}
            quote={sanityImport.quote}
          />
        </div>
        <div className="HomeContactsBackground" />
      </div>
      <div className="LayoutFooter">
        <Footer />
      </div>
      <div className="HomeTopButton">
        <Arrow direction={"top"} onClick={() => scrollToSection(headerRef)} />
      </div>
    </div>
  );
}
