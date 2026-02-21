import "./projectInfoLinks.css";
import { ProjectButtonProps } from "@/components/atoms/projectButton";
import { ProjectButtonsGrid } from "@/components/molecules/projectButtonsGrid";

export interface ProjectInfoLinksProps {
  buttons: ProjectButtonProps[];
}

export const ProjectInfoLinks = ({ buttons }: ProjectInfoLinksProps) => {
  return (
    <div className="ProjectInfoLinks">
      <div>Links</div>
      <ProjectButtonsGrid buttons={buttons} />
    </div>
  );
};
