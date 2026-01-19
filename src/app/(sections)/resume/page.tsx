import { Navbar, Footer } from "@/components";
import Resume from "@/app/resume";

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
