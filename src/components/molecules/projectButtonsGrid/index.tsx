import {
  ProjectButton,
  ProjectButtonProps,
} from "@/components/atoms/projectButton";
import "./projectButtonsGrid.css";

interface Props {
  buttons: ProjectButtonProps[];
}

export const ProjectButtonsGrid = ({ buttons }: Props) => {
  return (
    <div className="ProjectButtonsGrid ">
      {buttons.map((button, index) => (
        <ProjectButton key={index} {...button} />
      ))}
    </div>
  );
};
