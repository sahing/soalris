import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    /* BG: TBD (Leave placeholder background div; assumes dark photo sits behind) */
    <section
      id="home"
      aria-label="Hero Section"
      className="relative w-full h-[420px] sm:h-[500px] lg:h-[600px] bg-[#222222] overflow-hidden flex items-center"
    >
      {/* Background Image Placeholder Layer */}
      <div
        className="absolute inset-0 bg-[#1f2022] z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.75), rgba(18, 18, 18, 0.85)), url('https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1800&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Subtle grid pattern to evoke clean modern solar panels */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="max-w-2xl text-left flex flex-col justify-center h-full">
          {/* Subtle Decorative Gold Accent Bar */}
          <div className="w-16 h-1 bg-[#C9A83E] mb-6 hidden sm:block" />

          {/* Large Two-Line Headline */}
          <h1
            id="hero-headline"
            className="text-white font-serif font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight mb-8"
          >
            We&apos;re The Best <br />
            <span className="text-[#FFFFFF]">In Solar Energy</span>
          </h1>

          {/* Optional CTA Button */}
          <div className="pt-2">
            <a
              href="#contact"
              id="hero-cta-button"
              onClick={handleQuoteClick}
              className="btn-gold group inline-flex items-center space-x-2"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
