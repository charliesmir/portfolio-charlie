import "./backHomeButton.css";
import { CardMedia } from "@mui/material";

export interface BackHomeButtonProps {
  onClick?: () => void;
}

export const BackHomeButton = ({ onClick }: BackHomeButtonProps) => {
  return (
    <button className="BackHomeButtonBox" onClick={onClick}>
      <CardMedia
        className="BackHomeButtonArrow"
        image={"/images/icons/arrow_back.png"}
      />
      <div className="BackHomeButtonText">Back to home</div>
    </button>
  );
};
