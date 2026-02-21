import {
  ProjectInfoFlag,
  ProjectInfoFlagProps,
} from "@/components/atoms/projectInfoFlag";
import "./projectInfoSoft.css";

export interface ProjectInfoSoftProps {
  flag: ProjectInfoFlagProps;
}

export const ProjectInfoSoft = ({ flag }: ProjectInfoSoftProps) => {
  return (
    <div className="ProjectInfoSoft">
      <div className="ProjectInfoSoftTitle">Tools</div>
      <ProjectInfoFlag {...flag} />
    </div>
  );
};
