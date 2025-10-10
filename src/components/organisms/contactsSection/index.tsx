import "./contactsSection.css";

import {
  ContactsBox,
  ContactsBoxProps,
} from "@/components/molecules/contactsBox";
import { Quote, QuoteProps } from "@/components/atoms/quote";

interface Props {
  contactBox: ContactsBoxProps;
  quote: QuoteProps;
}

export const ContactsSection = ({ contactBox, quote }: Props) => {
  return (
    <div className="ContactsSection">
      <ContactsBox {...contactBox} />
      <div className="QuoteBox">
        <Quote {...quote} />
      </div>
    </div>
  );
};
