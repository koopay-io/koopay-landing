import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { HowItWorksSection } from "@/components/how-it-works";
import { TeamSection } from "@/components/team-section";
import { VisionSection } from "@/components/vision-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <TeamSection />
      <VisionSection />
      <CTASection />
      <Footer />
    </main>
  );
}
