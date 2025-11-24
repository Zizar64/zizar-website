import { HeroSection } from "@/components/sections/HeroSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AdditionalExperiencesSection } from "@/components/sections/AdditionalExperiencesSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { LanguagesSection } from "@/components/sections/LanguagesSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContactSection />
      <ExperienceSection />
      <AdditionalExperiencesSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <LanguagesSection />
    </div>
  );
}
