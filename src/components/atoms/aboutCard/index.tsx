import "./aboutCard.css";

export interface AboutCardProps {
  title: string;
  type: "image" | "text";
  description?: string;
}

export const AboutCard = ({ title, description }: AboutCardProps) => {
  return (
    <div className="AboutCard">
      {description}
      <div className="AboutCardTitle">{title}</div>
    </div>
  );
};
