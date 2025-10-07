import { SanityImage } from "@/adapters/types";
import "./aboutCard.css";
import { CardMedia } from "@mui/material";

export interface AboutCardProps {
  title: string;
  type: "image" | "text";
  description?: string;
  images?: SanityImage[];
  isActive?: boolean;
}

export const AboutCard = ({
  title,
  description,
  type,
  images,
  isActive,
}: AboutCardProps) => {
  return type == "text" ? (
    <div className={`AboutCard ${isActive ? "active" : ""}`}>
      {description}
      <div className="AboutCardTitle">{title}</div>
    </div>
  ) : (
    <div className={`AboutCard ${isActive ? "active" : ""}`}>
      <div className="AboutCardIcons">
        {images?.map((i, index) => (
          <CardMedia
            className="AboutCardImage"
            image={i.image || "/images/kot.png"}
            title={i.altText || "If you see this, please let me know ;)"}
            key={index}
          />
        ))}
      </div>
      <div className="AboutCardTitle">{title}</div>
    </div>
  );
};
