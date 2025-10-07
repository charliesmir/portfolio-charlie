import { AboutCard, AboutCardProps } from "@/components/atoms/aboutCard";
import "./aboutCardsStack.css";

interface Props {
  aboutCards: AboutCardProps[];
}

export const AboutCardsStack = ({ aboutCards }: Props) => {
  const yOffsets = [19, -8, -22, 9];
  return (
    <div className="AboutCardsStack">
      <div className="AboutCardsCarousel">
        {aboutCards.map((card, index) => {
          const offset = yOffsets[index % yOffsets.length];
          return (
            <div
              className="AboutCardBox"
              style={{ transform: `translateY(${offset}px)` }}
            >
              <AboutCard key={index} {...card} onClick={() => null} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
