"use client";
import "./notFopundPage.css";
import { BackHomeButtonProps } from "@/components/atoms/backHomeButton";
import { Footer } from "@/components/atoms/footer";
import { NotFoundSection } from "@/components/molecules/notFoundSection";
import { useRouter } from "next/navigation";

interface Props {
  button: BackHomeButtonProps;
}

export default function GlobalNotFound({ button }: Props) {
  // Basic settings
  const router = useRouter();
  return (
    <div className="NFPage">
      <NotFoundSection
        button={
          (button = {
            onClick: () => router.push("/"),
          })
        }
      />
      <div className="NFFooter">
        <Footer />
      </div>
    </div>
  );
}
