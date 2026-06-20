import Loader from "@/components/ui/Loader";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground min-h-screen selection:bg-primary/30">
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      {/* Sections */}
      <Hero />
      <About />
      <Services />
      <Projects />
      <Technologies />
      <WhyChooseUs />
      <Testimonials />
      <Process />
      <Contact />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
