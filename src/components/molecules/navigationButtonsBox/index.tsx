import {
  NavigationButton,
  NavigationButtonProps,
} from "@/components/atoms/button";
import "./navigationButtonBox.css";

interface Props {
  buttons: NavigationButtonProps[];
}

export const NavigationButtonsBox = ({ buttons }: Props) => {
  return (
    <div className="NavigationButtonsBox">
      {buttons.map((button, index) => (
        <NavigationButton key={index} {...button} />
      ))}
    </div>
  );
};
