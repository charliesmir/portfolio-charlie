import { adapters } from "@/adapters/adapters";
import HomeContent from "./homeContent";

export const revalidate = 31536000; // 1 year

const { getSanityMain } = adapters.cms();

export default async function Page() {
  const sanityMain = await getSanityMain();

  if (!sanityMain) {
    return <div>Loading...</div>;
  }

  return <HomeContent sanityImport={sanityMain} />;
}
