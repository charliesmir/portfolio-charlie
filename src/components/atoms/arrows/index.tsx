import "./arrows.css";
import { CardMedia } from "@mui/material";

export interface ArrowProps {
  direction: "right" | "left" | "top";
}

export const Arrow = ({ direction }: ArrowProps) => {
  return (
    <div className="Arrow">
      <CardMedia
        className={`ArrowIcon ${direction}`}
        image={"/images/icons/arrow.svg"}
      />
    </div>
  );
};
