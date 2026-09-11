import React from 'react';
import { ArrowRight } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    /* BG: TBD (Transparent / plain white placeholder) */
    <section
      id="about"
      aria-label="Introduction and About"
      className="bg-white py-12 lg:py-[100px] border-b border-[#D9D9D9]/50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Who We Are & Story */}
          <div className="flex flex-col items-start justify-center">
            {/* Small gold highlight bar/label acting as an eyebrow */}
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-10 h-1 bg-[#C9A83E] inline-block" />
              <span className="text-[#C9A83E] text-xs uppercase tracking-[0.2em] font-bold">
                WHO WE ARE
              </span>
            </div>

            <h2
              id="intro-heading"
              className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-bold leading-tight mb-6"
            >
              Pioneering Sustainable Power With Precision Engineering
            </h2>

            <p className="text-[#6B6B6B] text-base leading-[1.65] mb-8 font-sans">
              Founded on the belief that clean power should be accessible, durable, and commercially viable,
              we design and deploy state-of-the-art photovoltaic installations across residential, agricultural,
              and industrial facilities. Our team of certified NABCEP engineers handles end-to-end feasibility,
              permitting, hardware procurement, and lifelong preventative maintenance.
            </p>

            {/* Solid Black Button */}
            <a
              href="#services"
              id="intro-learn-more-btn"
              onClick={(e) => {
                e.preventDefault();
                const serv = document.querySelector('#services');
                if (serv) serv.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-black"
            >
              LEARN MORE
            </a>
          </div>

          {/* Right Column: Image Placeholder & CTA */}
          <div className="flex flex-col">
            {/* Image Placeholder (16:9 or 4:3) with dark-toned solar photo */}
            <div className="relative overflow-hidden bg-[#1A1A1A] aspect-[16/10] sm:aspect-[16/9] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80"
                alt="Solar and clean energy grid array"
                className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* 1-2 Short Lines of Caption Text */}
            <div className="mt-4 mb-6">
              <p className="text-sm font-semibold text-[#1A1A1A] tracking-wide">
                Next-generation mono-crystalline panels and high-output micro-inverters.
              </p>
              <p className="text-xs text-[#6B6B6B] mt-0.5">
                Delivering verified 98.4% energy efficiency across extreme weather conditions.
              </p>
            </div>

            {/* Solid Gold Button below image */}
            <div>
              <a
                href="#services"
                id="intro-our-services-btn"
                onClick={(e) => {
                  e.preventDefault();
                  const serv = document.querySelector('#services');
                  if (serv) serv.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gold group inline-flex items-center space-x-2"
              >
                <span>OUR SERVICES</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
