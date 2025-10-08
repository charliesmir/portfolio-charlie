import { CardMedia } from "@mui/material";
import "./projectCard.css";
import { ProjectTag, ProjectTagProps } from "@/components/atoms/projectTag";

export interface ProjectCardProps {
  description: string;
  image?: string;
  onClick?: () => void;
  projectTag: ProjectTagProps;
}

export const ProjectCard = ({
  projectTag,
  description,
  image,
  onClick,
}: ProjectCardProps) => {
  return (
    <div className="ProjectCardBox" onClick={onClick}>
      <CardMedia
        className="ProjectCardImage"
        image={image || "/images/projectImagePlaceholder.png"}
      />
      <div className="ProjectCardTag">
        <ProjectTag {...projectTag} />
      </div>
      <div className="ProjectCardDescription">{description}</div>
    </div>
  );
};
