import "./backHomeButton.css";
import { CardMedia } from "@mui/material";

export interface BackHomeButtonProps {
  title: string;
  onClick?: () => void;
}

export const BackHomeButton = ({ title, onClick }: BackHomeButtonProps) => {
  return (
    <button className="BackHomeButtonBox" onClick={onClick}>
      <CardMedia
        className="BackHomeButtonArrow"
        image={"/images/icons/arrow_back.png"}
      />
      <div className="BackHomeButtonText">{title}</div>
    </button>
  );
};
