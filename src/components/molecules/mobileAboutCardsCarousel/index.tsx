import "./mobileAboutCardsCarousel.css";
import { useRef } from "react";
import { AboutCard, AboutCardProps } from "@/components/atoms/aboutCard";

interface MobileAboutCardsProps {
  /** About cards */
  cards: AboutCardProps[];
}

export const MobileAboutCardsCarousel = ({ cards }: MobileAboutCardsProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollLeft = carousel.scrollLeft;
    const cardWidth = carousel.scrollWidth / cards.length;
    const index = Math.round(scrollLeft / cardWidth);

    console.log("Active index:", index);
  };

  return (
    <div className="MobileAboutCardsCarouselBox">
      <div
        className="MobileAboutCardsCarouselCards"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {cards.map((card, index) => (
          <AboutCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
