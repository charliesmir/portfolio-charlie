import {
  ProjectCard,
  ProjectCardProps,
} from "@/components/molecules/projectCard";
import "./projectCardsCarousel.css";
import { useRef } from "react";

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
      <button
        className="ProjectCardsCarouselButton prevButton"
        onClick={handlePrev}
      >
        Previous
      </button>

      <div className="ProjectCardsCarouselCards" ref={carouselRef}>
        {cards.map((card, index) => (
          <ProjectCard key={index} {...card} />
        ))}
      </div>

      <button
        className="ProjectCardsCarouselButton nextButton"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};
