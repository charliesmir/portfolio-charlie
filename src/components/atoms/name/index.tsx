import "./name.css";

export interface NameProps {
  title: string;
}


export const Name = ({
  title,
}:
 NameProps) => {
  return (
    <div className="Name">
      {title}
    </div>
  );
};