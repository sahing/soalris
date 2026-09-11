import React from 'react';

export const SpotlightSection: React.FC = () => {
  return (
    /* BG: TBD (Visual breather section, white/transparent background) */
    <section
      id="spotlight"
      aria-label="Spotlight and Architectural Showcase"
      className="bg-white py-16 lg:py-28 overflow-hidden border-b border-[#D9D9D9]/40"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Recurring Motif: Offset Gold Rectangle placed behind/left (visible on left and bottom edges) */}
          <div
            aria-hidden="true"
            className="absolute -left-3 -bottom-3 sm:-left-6 sm:-bottom-6 w-full h-full bg-[#C9A83E] z-0"
          />

          {/* Foreground Large Spotlight Image */}
          <div className="relative z-10 overflow-hidden shadow-lg bg-[#1A1A1A] aspect-[16/9]">
            <img
              src="https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1400&q=80"
              alt="High-capacity commercial solar array"
              className="w-full h-full object-cover grayscale-[10%] hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
            {/* Subtle architectural overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Optional subtle caption line near the image */}
          <div className="relative z-10 flex items-center justify-between mt-5 text-xs text-[#6B6B6B] tracking-wider uppercase">
            <span className="font-semibold text-[#1A1A1A]">
              PRECISION GRID ARCHITECTURE
            </span>
            <span>HIGH PERFORMANCE PHOTOVOLTAIC MATRICES</span>
          </div>
        </div>
      </div>
    </section>
  );
};
