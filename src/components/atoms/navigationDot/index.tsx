import "./navigationDot.css";

export interface NavigationDotProps {
  onClick?: () => void;
  isActive?: boolean;
}

export const NavigationDot = ({ onClick, isActive }: NavigationDotProps) => {
  return <div className={`NavigationDot ${isActive}`} onClick={onClick} />;
};
