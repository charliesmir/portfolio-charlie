import "./projectPageTopSection.css";
import { ProjectFlag, ProjectFlagProps } from "@/components/atoms/projectFlag";
import {
  BackHomeButton,
  BackHomeButtonProps,
} from "@/components/atoms/backHomeButton";
import { CardMedia } from "@mui/material";

interface Props {
  flag: ProjectFlagProps;
  button: BackHomeButtonProps;
  image?: string;
}

export const ProjectPageTopSection = ({ flag, button, image }: Props) => {
  return (
    <div className="PPTopSection">
      <ProjectFlag {...flag} />
      <div className="PPTopSectionRight">
        <div className="PPTopSectionButton">
          <BackHomeButton {...button} />
        </div>
        <CardMedia
          className="PPTopSectionImage"
          image={image || "/images/projectImagePlaceholder.png"}
        />
      </div>
    </div>
  );
};
