import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProfessionalsSection } from "@/components/ProfessionalsSection";

export default function Home() {
  return (
    <main className="">
      <Header />
      <About />
      <ProfessionalsSection />
      <Footer />
    </main>
  );
}
