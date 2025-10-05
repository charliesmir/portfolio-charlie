import "./profession.css";

export interface ProfessionProps {
  title: string;
}

export const Profession = ({ title }: ProfessionProps) => {
  return <div className="Profession">{title}</div>;
};
