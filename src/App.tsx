import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { StatementBanner } from './components/StatementBanner';
import { ServicesSection } from './components/ServicesSection';
import { SpotlightSection } from './components/SpotlightSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TermsModal } from './components/TermsModal';

export default function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans antialiased flex flex-col selection:bg-[#C9A83E] selection:text-[#1A1A1A]">
      {/* 1. Header / Navbar */}
      <Navbar onQuoteClick={() => {}} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Intro / Split CTA Section */}
        <IntroSection />

        {/* 4. Statement Banner Section */}
        <StatementBanner />

        {/* 5. Services Section (Dark) */}
        <ServicesSection />

        {/* 6. Spotlight / Offset Image Section */}
        <SpotlightSection />

        {/* 7. Solar Benefits Section */}
        <BenefitsSection />

        {/* 8. Our Projects Section */}
        <ProjectsSection />

        {/* 9. Contact Section (Footer Form) */}
        <ContactSection onOpenTerms={() => setIsTermsOpen(true)} />
      </main>

      {/* 10. Footer Bar & Floating Chat Widget */}
      <Footer />

      {/* Modal Dialog for Terms of Service */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </div>
  );
}
