import { CardMedia } from "@mui/material";
import "./projectButton.css";
import { SanityLink } from "@/adapters/types";

export interface ProjectButtonProps {
  link: SanityLink;
}

export const ProjectButton = ({ link }: ProjectButtonProps) => {
  return (
    <a
      className="ProjectButtonBox"
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CardMedia
        className="ProjectButtonArrow"
        image={"/images/icons/arrow_forward.png"}
      />
      <div className="ProjectButtonText">{link.title}</div>
    </a>
  );
};
