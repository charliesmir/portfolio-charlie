import { MobileAboutCardsCarousel } from "@/components/molecules/mobileAboutCardsCarousel";
import {
  NavigationDotBoxProps,
  NavigationDotBox,
} from "@/components/molecules/navigationDotBox";
import "./mobileAboutCardsSection.css";
import { AboutCardProps } from "@/components/atoms/aboutCard";

interface Props {
  aboutCards: AboutCardProps[];
}

export const MobileAboutCardsSection = ({ aboutCards }: Props) => {
  return (
    <div className="MobileAboutCardsSection">
      <MobileAboutCardsCarousel cards={aboutCards} />
      <div className="MobileAboutCardsSectionDecoration" />
    </div>
  );
};
