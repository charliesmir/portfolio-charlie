import "./placeholderButton.css";

interface Props {
  /** Button title */
  title: string;
  /** Click handler */
  onClick?: () => void;
}

/** Placeholder button */
export const PlaceholderButton = ({ title, onClick }: Props) => {
  return (
    <button className="placeholderButtonBox" onClick={onClick}>
      {title}
    </button>
  );
};
