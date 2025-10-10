import "./quote.css";

export interface QuoteProps {
  title?: string;
}

export const Quote = ({ title }: QuoteProps) => {
  return (
    <div className="Quote">
      {title ||
        "I am always open to new projects and challenges. Feel free to reach out!"}
    </div>
  );
};
