import { Education, EducationProps } from "@/components/atoms/education";
import "./educationBox.css";

export interface EducationBoxProps {
  educationCards: EducationProps[];
}

export const EducationBox = ({ educationCards }: EducationBoxProps) => {
  return (
    <div className="EducationBox">
      <div className="EducationText">
        {educationCards.map((card, index) => (
          <Education key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
