import "./projectFlag.css";

export interface ProjectFlagProps {
  title: string;
  status: string;
  highlights: string;
}

export const ProjectFlag = ({
  title,
  status,
  highlights,
}: ProjectFlagProps) => {
  return (
    <div className="ProjectFlag">
      <div className="ProjectFlagText">
        <div className="ProjectFlagTitle">{title}</div>
        <div className="ProjectFlagStatus"> Status: {status} </div>
        <div className="ProjectFlagHighlights"> Highlights: {highlights} </div>
      </div>
    </div>
  );
};
