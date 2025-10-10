import { Contacts, ContactsProps } from "@/components/atoms/contacts";
import "./contactsBox.css";

export interface ContactsBoxProps {
  contactsCards: ContactsProps[];
}

export const ContactsBox = ({ contactsCards }: ContactsBoxProps) => {
  return (
    <div className="ContactsBox">
      <div className="ContactsMainBox">
        <div className="ContactsList">
          {contactsCards.map((card, index) => (
            <Contacts key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="ContactsDecorativeBox" />
    </div>
  );
};
