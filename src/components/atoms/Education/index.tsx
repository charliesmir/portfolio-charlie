import "./education.css";

export interface EducationProps {
  title: string;
  university: string;
  dates: string;
}

export const Education = ({ title, dates, university }: EducationProps) => {
  return (
    <div className="EducationBox">
      <div>{dates}</div>
      <div>{university}</div>
      <div className="Title">{title}</div>
    </div>
  );
};
