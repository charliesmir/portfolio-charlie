import {
  ProjectInfoFlag,
  ProjectInfoFlagProps,
} from "@/components/atoms/projectInfoFlag";
import "./problemsSolutions.css";

export interface ProblemsSolutionsProps {
  flagProblems: string;
  flagSolutions: string;
}

export const ProblemsSolutions = ({
  flagProblems,
  flagSolutions,
}: ProblemsSolutionsProps) => {
  return (
    <div className="ProblemsSolutions">
      <ProjectInfoFlag
        colorVersion={"primary"}
        orientationVersion={"left"}
        type={"text"}
        description={flagProblems}
      />
      <div className="ProblemsSolutionsFlag">
        <ProjectInfoFlag
          colorVersion={"accent"}
          orientationVersion={"right"}
          type={"text"}
          description={flagSolutions}
        />
      </div>
    </div>
  );
};
