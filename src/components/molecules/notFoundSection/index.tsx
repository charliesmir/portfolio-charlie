import {
  BackHomeButton,
  BackHomeButtonProps,
} from "@/components/atoms/backHomeButton";
import "./notFoundSection.css";
import { TopDecoration } from "@/components/atoms/topDecoration";
import { NotFoundFlag } from "@/components/atoms/notFoundFlag";
import { NotFoundQuote } from "@/components/atoms/notFoundQuote";

interface Props {
  button: BackHomeButtonProps;
}

export const NotFoundSection = ({ button }: Props) => {
  return (
    <div className="NFSection ">
      <div className="NFSectionMainBox">
        <NotFoundFlag />
        <div className="NFSectionQuote">
          <NotFoundQuote />
        </div>
        <div className="NFSectionButton">
          <BackHomeButton {...button} />
        </div>
      </div>
      <div className="NFSectionDecoration">
        <TopDecoration />
      </div>
    </div>
  );
};
