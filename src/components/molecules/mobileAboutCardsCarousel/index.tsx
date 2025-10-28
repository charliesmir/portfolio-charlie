import "./mobileAboutCardsCarousel.css";
import { useRef } from "react";
import { AboutCard, AboutCardProps } from "@/components/atoms/aboutCard";
import { ArrowLong } from "@/components/atoms/arrowLong";

interface MobileAboutCardsProps {
  /** About cards */
  cards: AboutCardProps[];
}

export const MobileAboutCardsCarousel = ({ cards }: MobileAboutCardsProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };
  return (
    <div className="MobileAboutCardsCarouselBox">
      <div className="MobileAboutCardsCarouselCards" ref={carouselRef}>
        {cards.map((card, index) => (
          <AboutCard key={index} {...card} />
        ))}
      </div>
      <div className="MobileAboutCardsCarouselButton prevButton">
        <ArrowLong direction={"left"} onClick={handlePrev} />
      </div>
      <div className="MobileAboutCardsCarouselButton nextButton">
        <ArrowLong direction={"right"} onClick={handleNext} />
      </div>
    </div>
  );
};
