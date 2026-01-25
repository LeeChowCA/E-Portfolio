import { PageShell } from "@/components";
import FeaturedProjects from "@/app/featured-projects";

export default function WorkPage() {
  return (
    <PageShell>
      {(isReady) => <FeaturedProjects animate={isReady} />}
    </PageShell>
  );
}
