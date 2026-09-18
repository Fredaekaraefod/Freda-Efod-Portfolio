import { Suspense } from "react";
import WorkArchive from "@/components/WorkArchive";

export const metadata = {
  title: "Work Archive - Freda",
  description: "A complete archive of video editing projects, brand campaigns, and short-form narratives by Freda.",
};

export default function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <WorkArchive />
      </Suspense>
    </div>
  );
}
