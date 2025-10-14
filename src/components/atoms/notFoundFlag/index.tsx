import { CardMedia } from "@mui/material";
import "./notFoundFlag.css";

export interface NotFoundFlagProps {
  title: string;
}

export const NotFoundFlag = ({ title }: NotFoundFlagProps) => {
  return (
    <div className="NotFoundFlag">
      <div className="NotFoundText">{title}</div>
    </div>
  );
};
