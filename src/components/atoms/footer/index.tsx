import "./footer.css";

export const Footer = () => {
  return (
    <div className="FooterBox">
      <div className="FooterText">© Copyright 2025. All rights reserved.</div>
      <div className="FooterText">
        Created by&nbsp;
        <a
          className="FooterLinkText"
          href="https://github.com/charliesmir"
          target="blank"
          rel="noopener noreferrer"
        >
          Charlie
        </a>
        <div>&nbsp;&&nbsp;</div>
        <a
          className="FooterLinkText"
          href="https://gudokvlad.com/"
          target="blank"
          rel="noopener noreferrer"
        >
          GudokVlad
        </a>
      </div>
    </div>
  );
};
