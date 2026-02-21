import "./projectInfoImages.css";

export interface ProjectInfoImagesProps {
  detailImage: string;
  secondaryImage: string;
}

export const ProjectInfoImages = ({
  detailImage,
  secondaryImage,
}: ProjectInfoImagesProps) => {
  return (
    <div className="ProjectInfoImages">
      <div className="ProjectInfoImagesDetail">
        <div>Detail view</div>
        <img src={detailImage} className="ProjectInfoDetailImage" />
      </div>
      <img src={secondaryImage} className="ProjectInfoSecondaryImage" />
    </div>
  );
};
