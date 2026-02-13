import { adapters } from "@/adapters/adapters";
import ProjectContent from "./projectContent";
import GlobalNotFound from "@/app/not-found";

export const revalidate = 31536000; // 1 year

const { getSanityProjectPage } = adapters.cms();

interface Props {
  params: { id: string };
}

export default async function ProjectPage({ params }: Props) {
  // Getting the params
  const { id } = await params;
  const project = await getSanityProjectPage(id);

  if (!project) {
    return <GlobalNotFound />;
  }

  return <ProjectContent project={project} />;
}
