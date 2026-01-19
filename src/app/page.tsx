// components
import { Navbar, Footer } from "@/components";

import Hero from "./hero";
import FeaturedProjects from "./featured-projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen lg:h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col min-h-0">
        <Hero compact />
        <FeaturedProjects compact />
      </main>
      <Footer compact />
    </div>
  );
}
