import "./filter.css";
import { CardMedia } from "@mui/material";

export interface FilterProps {
  title: string;
  image: string;
}

export const Filter = ({ title, image }: FilterProps) => {
  return (
    <div className="Filter">
      <CardMedia
        className="FilterImage"
        image={image || "/images/icons/U.png"}
      />
      <div className="FilterText">{title}</div>
    </div>
  );
};
