"use client";
import "./notFopundPage.css";
import { BackHomeButtonProps } from "@/components/atoms/backHomeButton";
import { Footer } from "@/components/atoms/footer";
import { NotFoundSection } from "@/components/molecules/notFoundSection";

interface Props {
  button: BackHomeButtonProps;
}

export default function GlobalNotFound({ button }: Props) {
  return (
    <div className="NFPage">
      <NotFoundSection button={button} />
      <div className="NFFooter">
        <Footer />
      </div>
    </div>
  );
}
