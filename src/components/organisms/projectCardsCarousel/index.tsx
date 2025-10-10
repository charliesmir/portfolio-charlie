import {
  ProjectCard,
  ProjectCardProps,
} from "@/components/molecules/projectCard";
import "./projectCardsCarousel.css";
import { useRef } from "react";
import { Arrow } from "@/components/atoms/arrows";

interface Props {
  /** Project cards */
  cards: ProjectCardProps[];
}

export const ProjectCardsCarousel = ({ cards }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -490, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 490, behavior: "smooth" });
    }
  };

  return (
    <div className="ProjectCardsCarouselBox">
      <div className="ProjectCardsCarouselButton prevButton">
        <Arrow direction={"left"} onClick={handlePrev} />
      </div>
      <div className="ProjectCardsCarouselCards" ref={carouselRef}>
        {cards.map((card, index) => (
          <ProjectCard key={index} {...card} />
        ))}
      </div>

      <div className="ProjectCardsCarouselButton nextButton">
        <Arrow direction={"right"} onClick={handleNext} />
      </div>
    </div>
  );
};
