import {
  MobileAboutCardsProps,
  MobileAboutCardsCarousel,
} from "@/components/molecules/mobileAboutCardsCarousel";
import {
  NavigationDotBoxProps,
  NavigationDotBox,
} from "@/components/molecules/navigationDotBox";
import "./mobileAboutCardsSection.css";

interface Props {
  cards: MobileAboutCardsProps;
  dots: NavigationDotBoxProps;
}

export const MobileAboutCardsSection = ({ cards, dots }: Props) => {
  return (
    <div className="MobileAboutCardsSection">
      <MobileAboutCardsCarousel {...cards} />
      <div className="SectionNavigationDotBox">
        <NavigationDotBox {...dots} />
      </div>
      <div className="MobileAboutCardsSectionDecoration"></div>
    </div>
  );
};
