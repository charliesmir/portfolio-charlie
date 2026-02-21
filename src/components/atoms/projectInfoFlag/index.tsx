import "./projectInfoFlag.css";

export interface ProjectInfoFlagProps {
  description?: string;
  images?: string[];
  colorVersion: "primary" | "accent";
  orientationVersion: "left" | "right";
  type: "image" | "text";
}

export const ProjectInfoFlag = ({
  description,
  images,
  colorVersion,
  orientationVersion,
  type,
}: ProjectInfoFlagProps) => {
  return type == "text" ? (
    <div className={`ProjectInfoFlag ${colorVersion} ${orientationVersion}`}>
      <div className={`ProjectInfoFlagDescription ${colorVersion}`}>
        {description}
      </div>
    </div>
  ) : (
    <div className={`ProjectInfoFlag ${colorVersion} ${orientationVersion}`}>
      <div className="ProjectInfoFlagImages">
        {images?.map((image, index) => (
          <img key={index} src={image} className="ProjectInfoFlagImage" />
        ))}
      </div>
    </div>
  );
};
