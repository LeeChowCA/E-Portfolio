// components
import { Navbar, Footer } from "@/components";

import Hero from "./hero";
import FeaturedProjects from "./featured-projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
}
