import { CardMedia } from "@mui/material";
import "./placeholderProjectCard.css";

export interface PlaceholderProjectCardProps {
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** Project image */
  image?: string;
  /** Click handler */
  onClick?: () => void;
}

/** Placeholder project card */
export const PlaceholderProjectCard = ({
  title,
  description,
  image,
  onClick,
}: PlaceholderProjectCardProps) => {
  return (
    <div className="placeholderProjectCardBox" onClick={onClick}>
      <CardMedia
        className="placeholderProjectCardImage"
        component="img"
        image={image || "/images/imagePlaceholder.png"}
      />
      <div className="placeholderProjectCardTitle">{title}</div>
      <div className="placeholderProjectCardDescription">{description}</div>
    </div>
  );
};
