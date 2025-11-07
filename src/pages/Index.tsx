import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { NewsEventsSection } from "@/components/sections/NewsEventsSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <NewsEventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
