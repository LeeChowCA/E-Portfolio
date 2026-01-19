import { Navbar, Footer } from "@/components";
import Skills from "@/app/skills";

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
