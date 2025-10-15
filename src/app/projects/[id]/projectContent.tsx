"use client";

import { SanityProjectPage } from "@/adapters/types";
import { Footer } from "@/components/atoms/footer";
import { ProjectPageTopSection } from "@/components/molecules/projectPageTopSection";
import { ProjectPageBottomSection } from "@/components/organisms/projectPageBottomSection";
import { useParams, useRouter } from "next/navigation";

export default function ProjectContent() {
  // Basic settings
  const router = useRouter();
  const params = useParams();

  const project: SanityProjectPage = {
    flag: {
      title: "Title",
      status: "status",
      highlights: "list",
    },
    tools: {
      images: [
        { image: "/images/icons/CSS.png", altText: "CSS" },
        { image: "/images/icons/Illustrator.png", altText: "Illustrator" },
        { image: "/images/icons/Sanity.png", altText: "Sanity" },
        { image: "/images/icons/Storybook.png", altText: "Storybook" },
      ],
    },
    primaryImage: "",
    secondaryImage: "",
    buttons: [
      {
        link: {
          title: "Website",
          url: "https://foxairlines.gudokvlad.com/en",
        },
      },
      {
        link: {
          title: "Figma",
          url: "https://www.figma.com/design/Q4viv7OrOprMVZKThEIfox/Recipes?node-id=0-1&t=gaMtiaYcNfYNuY14-1",
        },
      },
    ],
  };

  return (
    <div className="ProjectPage">
      Project id: {params.id}
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
      <Footer />
    </div>
  );
}
