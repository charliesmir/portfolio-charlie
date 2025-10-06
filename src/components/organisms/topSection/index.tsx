import "./topSection.css";

import { Name, NameProps } from "@/components/atoms/name";
import { Profession, ProfessionProps } from "@/components/atoms/profession";
import { Profile, ProfileProps } from "@/components/atoms/profile";
import { TopDecoration } from "@/components/atoms/topDecoration";

interface Props {
  name: NameProps;
  profession: ProfessionProps;
  profile?: ProfileProps;
}

export const topSection = ({ name, profession, profile }: Props) => {
  return (
    <div className="TopSection">
      <div className="TopSectionInfo">
        <div className="ProfileBox">
          <Profile {...profile} />
        </div>
        <div className="TextBox">
          <Profession {...profession} />
          <Name {...name} />
        </div>
      </div>
      <div className="TopDecorationBox">
        <TopDecoration />
      </div>
    </div>
  );
};
