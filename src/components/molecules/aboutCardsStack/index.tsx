import { AboutCard, AboutCardProps } from "@/components/atoms/aboutCard";
import "./aboutCardsStack.css";

interface Props {
  aboutCards: AboutCardProps[];
}

export const AboutCardsStack = ({ aboutCards }: Props) => {
  const xOffsets = [0, -200, -400, -665];
  const yOffsets = [19, -8, -22, 9];
  const rotations = [7, 9, -5, 4];
  return (
    <div className="AboutCardsStack">
      <div className="AboutCardsCarousel">
        {aboutCards.map((card, index) => {
          const xOffset = xOffsets[index % xOffsets.length];
          const yOffset = yOffsets[index % yOffsets.length];
          const rotation = rotations[index % rotations.length];
          return (
            <div
              className="AboutCardBox"
              style={{
                transform: `translate(${xOffset}px, ${yOffset}px)`,
                rotate: `${rotation}deg`,
                zIndex: 5 - index, // zIndex is semihardcoded because the negative value makes cards unclickable
              }}
            >
              <AboutCard key={index} {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
