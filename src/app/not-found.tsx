"use client";
import "./notFoundPage.css";
import { Footer } from "@/components/atoms/footer";
import { NotFoundSection } from "@/components/molecules/notFoundSection";
import { useRouter } from "next/navigation";

export default function GlobalNotFound() {
  // Basic settings
  const router = useRouter();

  return (
    <div className="NFPage">
      <NotFoundSection
        button={{
          onClick: () => router.push("/"),
        }}
      />
      <div className="NFFooter">
        <Footer />
      </div>
    </div>
  );
}
