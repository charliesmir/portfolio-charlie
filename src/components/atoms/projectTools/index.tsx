import { SanityImage } from "@/adapters/types";
import { CardMedia } from "@mui/material";
import "./projectTools.css";

export interface ProjectToolsProps {
  images?: SanityImage[];
}

export const ProjectTools = ({ images }: ProjectToolsProps) => {
  return (
    <div className="ProjectTools">
      Tools:
      <div className="ProjectToolsIcons">
        {images?.map((i, index) => (
          <CardMedia
            className="ProjectToolsImage"
            image={i.image || "/images/kot.png"}
            title={i.altText || "If you see this, please let me know ;)"}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
