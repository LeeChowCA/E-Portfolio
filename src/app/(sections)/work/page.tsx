import { Navbar, Footer } from "@/components";
import FeaturedProjects from "@/app/featured-projects";

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
}
