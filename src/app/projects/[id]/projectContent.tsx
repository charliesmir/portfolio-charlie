"use client";

import { Footer } from "@/components/atoms/footer";
import { ProjectPageTopSection } from "@/components/molecules/projectPageTopSection";
import { ProjectPageBottomSection } from "@/components/organisms/projectPageBottomSection";
import { useParams } from "next/navigation";

export default function ProjectContent() {
  const params = useParams();

  return (
    <div className="ProjectPage">
      Project id: {params.id}
      <ProjectPageTopSection flag={undefined} button={undefined} image={""} />
      <ProjectPageBottomSection image={""} buttons={[]} />
      <Footer />
    </div>
  );
}
