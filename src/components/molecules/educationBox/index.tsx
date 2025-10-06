import { Education, EducationProps } from "@/components/atoms/educationasfsaf";
import "./educationBox.css";

interface Props {
  educationCards: EducationProps[];
}

export const EducationBox = ({ educationCards }: Props) => {
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
