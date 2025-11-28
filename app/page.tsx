import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CompetencesSection } from "@/components/sections/CompetencesSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
// import { PortfolioSection } from "@/components/sections/PortfolioSection";
// import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
// import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CompetencesSection />
      <CertificationsSection />
      {/* <PortfolioSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <BlogSection /> */}
      <ContactSection />
    </>
  );
}
