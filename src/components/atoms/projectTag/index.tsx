import "./projectTag.css";
import { CardMedia } from "@mui/material";

export interface ProjectTagProps {
  title: string;
  image: string;
}

export const ProjectTag = ({ title, image }: ProjectTagProps) => {
  return (
    <div className="ProjectTag">
      <div className="ProjectTagText">{title}</div>
      <CardMedia
        className="ProjectTagImage"
        image={image || "/images/icons/U.png"}
      />
    </div>
  );
};
