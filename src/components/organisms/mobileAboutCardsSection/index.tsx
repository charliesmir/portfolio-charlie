import { MobileAboutCardsCarousel } from "@/components/molecules/mobileAboutCardsCarousel";
import {
  NavigationDotBoxProps,
  NavigationDotBox,
} from "@/components/molecules/navigationDotBox";
import "./mobileAboutCardsSection.css";
import { AboutCardProps } from "@/components/atoms/aboutCard";

interface Props {
  aboutCards: AboutCardProps[];
  dots?: NavigationDotBoxProps;
}

export const MobileAboutCardsSection = ({ aboutCards, dots }: Props) => {
  return (
    <div className="MobileAboutCardsSection">
      <MobileAboutCardsCarousel cards={aboutCards} />
      {/* <div className="SectionNavigationDotBox">
        <NavigationDotBox {...dots} />
      </div> */}
      <div className="MobileAboutCardsSectionDecoration"></div>
    </div>
  );
};
