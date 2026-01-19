import { Navbar, Footer } from "@/components";
import Projects from "@/app/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
