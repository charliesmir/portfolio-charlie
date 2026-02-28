import "./projectPageBottomSection.css";
import { ProjectButtonProps } from "@/components/atoms/projectButton";
import {
  ProblemsSolutions,
  ProblemsSolutionsProps,
} from "@/components/molecules/problemsSolutions";
import { skillIcons } from "@/components/atoms/projectInfoFlag";
import {
  ProjectInfoImages,
  ProjectInfoImagesProps,
} from "@/components/atoms/projectInfoImages";
import { ProjectInfoSoft } from "@/components/molecules/projectInfoSoft";
import { ProjectInfoLinks } from "../projectInfoLinks";

export interface ProjectPageBottomSectionProps {
  buttons: ProjectButtonProps[];
  flagPS: ProblemsSolutionsProps;
  images: ProjectInfoImagesProps;
  flagSoftImages: skillIcons[];
}

export const ProjectPageBottomSection = ({
  buttons,
  flagPS,
  images,
  flagSoftImages,
}: ProjectPageBottomSectionProps) => {
  return (
    <div className="PPBottomSection ">
      <ProblemsSolutions
        flagProblems={flagPS.flagProblems}
        flagSolutions={flagPS.flagSolutions}
      />
      <ProjectInfoImages
        detailImage={images.detailImage}
        secondaryImage={images.secondaryImage}
      />
      <ProjectInfoSoft images={flagSoftImages} /> /* ??? */
      <ProjectInfoLinks buttons={buttons} />
    </div>
  );
};
