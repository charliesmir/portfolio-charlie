import { SanityLink } from "@/adapters/types";
import "./contacts.css";
import { CardMedia } from "@mui/material";

export interface ContactsProps {
  link: SanityLink;
  image: string;
}

export const Contacts = ({ link, image }: ContactsProps) => {
  return (
    <div className="Contact">
      <CardMedia className="ContactsImage" image={image || "/images/kot.png"} />
      <a className="ContactsLink" href={link.url}>
        {link.title}
      </a>
    </div>
  );
};
