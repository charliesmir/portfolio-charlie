import {
  NavigationDot,
  NavigationDotProps,
} from "@/components/atoms/navigationDot";
import "./navigationDotBox.css";

export interface NavigationDotBoxProps {
  dots: NavigationDotProps[];
}

export const NavigationDotBox = ({ dots }: NavigationDotBoxProps) => {
  return (
    <div className="NavigationDotBox">
      {dots.map((dot, index) => (
        <NavigationDot key={index} {...dot} />
      ))}
    </div>
  );
};
