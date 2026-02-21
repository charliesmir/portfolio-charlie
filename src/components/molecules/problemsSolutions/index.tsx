import {
  ProjectInfoFlag,
  ProjectInfoFlagProps,
} from "@/components/atoms/projectInfoFlag";
import "./problemsSolutions.css";

export interface ProblemsSolutionsProps {
  flagProblems: ProjectInfoFlagProps;
  flagSolutions: ProjectInfoFlagProps;
}

export const ProblemsSolutions = ({
  flagProblems,
  flagSolutions,
}: ProblemsSolutionsProps) => {
  return (
    <div className="ProblemsSolutions">
      <ProjectInfoFlag {...flagProblems} />
      <div className="ProblemsSolutionsFlag">
        <ProjectInfoFlag {...flagSolutions} />
      </div>
    </div>
  );
};
