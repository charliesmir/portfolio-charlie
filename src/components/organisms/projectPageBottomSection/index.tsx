import {
  ProjectTools,
  ProjectToolsProps,
} from "@/components/atoms/projectTools";
import "./projectPageBottomSection.css";
import { ProjectButtonProps } from "@/components/atoms/projectButton";
import { CardMedia } from "@mui/material";
import { ProjectButtonsGrid } from "@/components/molecules/projectButtonsGrid";

interface Props {
  image: string;
  tools?: ProjectToolsProps;
  buttons: ProjectButtonProps[];
}

export const ProjectPageBottomSection = ({ buttons, tools, image }: Props) => {
  return (
    <div className="PPBottomSection ">
      <CardMedia
        className="PPBottomSectionImage"
        component="svg"
        image={image || "/images/projectImagePlaceholder.png"}
      />
      <div className="PPBottomSectionInfo">
        <ProjectTools images={tools?.images} />
        <ProjectButtonsGrid buttons={buttons} />
      </div>
    </div>
  );
};
