import "./quote.css";

export interface QuoteProps {
  title: string;
}

export const Quote = ({ title }: QuoteProps) => {
  return <div className="Quote">{title}</div>;
};
