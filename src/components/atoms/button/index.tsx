import "./navigationButton.css";

export interface NavigationButtonProps {
  title: string;
  onClick?: () => void;
  colorVersion: "light" | "dark";
}

export const NavigationButton = ({
  title,
  onClick,
  colorVersion,
}: NavigationButtonProps) => {
  return (
    <button className={`NavigationButtonBox ${colorVersion}`} onClick={onClick}>
      <div className="NavigationButtonText">{title}</div>
    </button>
  );
};
