import "./flags.css";

export interface FlagProps {
  title: string;
  colorVersion: "primary" | "accent" | "backgroundDark";
  orientationVersion: "left" | "right";
}

export const Flag = ({
  title,
  colorVersion,
  orientationVersion,
}: FlagProps) => {
  return orientationVersion == "left" ? (
    <div className={`Flag ${colorVersion} ${orientationVersion}`}>
      {title}
      <div className={`Circle ${orientationVersion}`} />
    </div>
  ) : (
    <div className={`Flag ${colorVersion} ${orientationVersion}`}>
      <div className={`Circle ${orientationVersion}`} />
      {title}
    </div>
  );
};
