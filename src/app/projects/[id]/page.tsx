"use client";

import { Suspense } from "react";
import ProjectContent from "./projectContent";

export default function ProjectPage() {
  return (
    <Suspense fallback={<div>Loading project...</div>}>
      <ProjectContent />
    </Suspense>
  );
}
