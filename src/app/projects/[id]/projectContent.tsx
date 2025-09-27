"use client";

import { useParams } from "next/navigation";

export default function ProjectContent() {
  const params = useParams();

  return <div> Project id: {params.id}</div>;
}
