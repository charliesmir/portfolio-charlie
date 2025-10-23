import {
  NavigationDot,
  NavigationDotProps,
} from "@/components/atoms/navigationDot";
import "./navigationDotBox.css";

interface Props {
  dots: NavigationDotProps[];
}

export const NavigationDotBox = ({ dots }: Props) => {
  return (
    <div className="NavigationDotBox">
      {dots.map((dot, index) => (
        <NavigationDot key={index} {...dot} />
      ))}
    </div>
  );
};
