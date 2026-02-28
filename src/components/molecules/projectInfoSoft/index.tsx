import {
  ProjectInfoFlag,
  skillIcons,
} from "@/components/atoms/projectInfoFlag";
import "./projectInfoSoft.css";

export interface ProjectInfoSoftProps {
  images: skillIcons[];
}

export const ProjectInfoSoft = ({ images }: ProjectInfoSoftProps) => {
  return (
    <div className="ProjectInfoSoft">
      <div className="ProjectInfoSoftTitle">Tools</div>
      <ProjectInfoFlag
        colorVersion={"accent"}
        orientationVersion={"right"}
        type={"image"}
        images={images}
      />
    </div>
  );
};
