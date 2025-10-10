import { Experience, ExperienceProps } from "@/components/atoms/experience";
import "./experienceBox.css";

interface Props {
  experienceCards: ExperienceProps[];
}

export const ExperienceBox = ({ experienceCards }: Props) => {
  return (
    <div className="ExperienceBox">
      {experienceCards.map((card, index) => (
        <Experience key={index} {...card} />
      ))}
    </div>
  );
};
