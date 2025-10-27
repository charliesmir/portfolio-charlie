import "./mobileAboutCardsCarousel.css";
import { useRef } from "react";
import { AboutCard, AboutCardProps } from "@/components/atoms/aboutCard";

interface MobileAboutCardsProps {
  /** About cards */
  cards: AboutCardProps[];
}

export const MobileAboutCardsCarousel = ({ cards }: MobileAboutCardsProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div className="MobileAboutCardsCarouselBox">
      <div className="MobileAboutCardsCarouselCards" ref={carouselRef}>
        {cards.map((card, index) => (
          <AboutCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
