import "./navigationButton.css";

interface Props {
  title: string;
  onClick?: () => void;
  colorVersion: "light" | "dark";
}

export const NavigationButton = ({ title, onClick, colorVersion }: Props) => {
  return (
    <button className={`NavigationButtonBox ${colorVersion}`} onClick={onClick}>
      <div className="NavigationButtonText">{title}</div>
    </button>
  );
};
