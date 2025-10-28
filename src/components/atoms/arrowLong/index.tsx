import "./arrowsLong.css";
import { CardMedia } from "@mui/material";

export interface ArrowLongProps {
  direction: "right" | "left";
  onClick: () => void;
}

export const ArrowLong = ({ direction, onClick }: ArrowLongProps) => {
  return (
    <div className="ArrowLong" onClick={onClick}>
      <CardMedia
        className={`ArrowLongIcon ${direction}`}
        image={"/images/icons/arrowLong.svg"}
      />
    </div>
  );
};
