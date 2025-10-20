import { adapters } from "@/adapters/adapters";
import ProjectContent from "./projectContent";

const { getSanityProjectPage } = adapters.cms();

interface Props {
  params: { id: string };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = await getSanityProjectPage(id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return <ProjectContent project={project} />;
}
