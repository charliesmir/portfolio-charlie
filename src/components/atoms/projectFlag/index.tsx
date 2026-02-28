import "./projectFlag.css";

export interface ProjectFlagProps {
  title: string;
  status: string;
  type: string;
  highlights: string;
}

export const ProjectFlag = ({
  title,
  status,
  type,
  highlights,
}: ProjectFlagProps) => {
  return (
    <div className="ProjectFlag">
      <div className="ProjectFlagText">
        <div className="ProjectFlagTitle">{title}</div>
        <div className="ProjectFlagInfo"> Status: {status} </div>
        <div className="ProjectFlagInfo"> Type: {type} </div>
        <div className="ProjectFlagHighlights">
          <div className="ProjectFlagHighlightsTitle"> Highlights:</div>
          {highlights.split("\n").map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
