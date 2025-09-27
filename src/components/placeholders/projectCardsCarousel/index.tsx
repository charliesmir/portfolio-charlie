import "./placeholderProjectCardsCarousel.css";
import {
  PlaceholderProjectCard,
  PlaceholderProjectCardProps,
} from "../projectCard";
import { useRef } from "react";

interface Props {
  /** Project cards */
  cards: PlaceholderProjectCardProps[];
}

/** Placeholder project cards carousel */
export const PlaceholderProjectCardsCarousel = ({ cards }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -470, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 470, behavior: "smooth" });
    }
  };

  return (
    <div className="placeholderProjectCardsCarouselBox">
      <button
        className="placeholderProjectCardsCarouselButton prevButton"
        onClick={handlePrev}
      >
        Previous
      </button>

      <div className="placeholderProjectCardsCarouselCards" ref={carouselRef}>
        {cards.map((card, index) => (
          <PlaceholderProjectCard key={index} {...card} />
        ))}
      </div>

      <button
        className="placeholderProjectCardsCarouselButton nextButton"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};
