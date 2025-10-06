import "./educationBox.css";

import { Education, EducationProps } from "@/components/atoms/Education";

interface Props {
  education: EducationProps;
}

export const EducationBox = ({ education }: Props) => {
  return (
    <div className="EducationBox">
      <div className="EducationText">
        <Education {...education} />
      </div>
    </div>
  );
};
