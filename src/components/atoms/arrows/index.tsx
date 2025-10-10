import "./arrows.css";
import { CardMedia } from "@mui/material";

export interface ArrowProps {
  direction: "right" | "left" | "top";
  onClick: () => void;
}

export const Arrow = ({ direction, onClick }: ArrowProps) => {
  return (
    <div className="Arrow" onClick={onClick}>
      <CardMedia
        className={`ArrowIcon ${direction}`}
        image={"/images/icons/arrow.svg"}
      />
    </div>
  );
};
