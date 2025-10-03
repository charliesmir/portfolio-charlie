import { CardMedia } from "@mui/material";
import "./profile.css";

export interface ProfileProps {
  image?: string;
}

export const Profile = ({
  image,
}: ProfileProps) => {
  return (
    <div className="ProfileFlag">
      <CardMedia
        className="ProfileImage"
        component="svg"
        image={image || "/images/portrait.svg"}
      />
    </div>
  );
};