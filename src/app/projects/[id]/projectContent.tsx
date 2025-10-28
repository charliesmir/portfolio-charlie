"use client";

import "./projectPage.css";
import { SanityProjectPage } from "@/adapters/types";
import { Footer } from "@/components/atoms/footer";
import { LoaderAnimation } from "@/components/atoms/loaderAnimation";
import { ProjectPageTopSection } from "@/components/molecules/projectPageTopSection";
import { ProjectPageBottomSection } from "@/components/organisms/projectPageBottomSection";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  project: SanityProjectPage;
}

export default function ProjectContent({ project }: Props) {
  // Basic settings
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  if (loading) {
    return (
      <div className="ProjectLoading">
        <div className="ProjectLoadingText">Loading...</div>
        <LoaderAnimation />
      </div>
    );
  }

  return (
    <div className="ProjectPage">
      <ProjectPageTopSection
        flag={project.flag}
        button={{
          onClick: () => {
            setLoading(true);
            router.push("/");
          },
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
