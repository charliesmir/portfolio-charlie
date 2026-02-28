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
        briefText={project.brief}
      />
      <ProjectPageBottomSection
        buttons={project.buttons}
        flagPS={{
          flagProblems: project.problemsSolutions.flagProblems.description,
          flagSolutions: project.problemsSolutions.flagSolutions.description,
        }}
        images={{
          detailImage: project.detailImage,
          secondaryImage: project.secondaryImage,
        }}
        flagSoftImages={project.tools.images}
      />
      <div className="LayoutFooter">
        <Footer />
      </div>
    </div>
  );
}
