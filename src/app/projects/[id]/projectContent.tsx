"use client";

import "./projectPage.css";
import { SanityProjectPage } from "@/adapters/types";
import { Footer } from "@/components/atoms/footer";
import { ProjectPageTopSection } from "@/components/molecules/projectPageTopSection";
import { ProjectPageBottomSection } from "@/components/organisms/projectPageBottomSection";
import { useRouter } from "next/navigation";

interface Props {
  project: SanityProjectPage;
}

export default function ProjectContent({ project }: Props) {
  // Basic settings
  const router = useRouter();

  return (
    <div className="ProjectPage">
      <ProjectPageTopSection
        flag={project.flag}
        button={{
          onClick: () => router.push("/"),
        }}
        image={project.primaryImage}
      />
      <ProjectPageBottomSection
        tools={project.tools}
        image={project.secondaryImage}
        buttons={project.buttons}
      />
      <div className="LayoutFooter">
        <Footer />
      </div>
    </div>
  );
}
