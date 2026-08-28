import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Journey from "@/components/Journey";
import ShirtSection from "@/components/ShirtSection";
import Lingo from "@/components/Lingo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Journey />
      <Lingo />
      <ShirtSection />
      <Marquee flip />
      <Footer />
    </main>
  );
}
