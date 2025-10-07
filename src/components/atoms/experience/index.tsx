import "./experience.css";

export interface ExperienceProps {
  title: string;
  company?: string;
  dates: string;
  description: string;
}

export const Experience = ({
  title,
  dates,
  company,
  description,
}: ExperienceProps) => {
  return (
    <div className="Experience">
      <div className="ExperienceTitleBox">
        <div className="ExperienceTitle">{title}</div>
        <div>{company}</div>
        <div className="ExperienceDates">{dates}</div>
      </div>
      <div className="ExperienceDescription">{description}</div>
    </div>
  );
};
