import React from 'react';

export const StatementBanner: React.FC = () => {
  return (
    /* BG: TBD (Leave dark #1A1A1A placeholder overlay so white text is legible before photo is added) */
    <section
      id="statement-banner"
      aria-label="Statement Banner"
      className="relative w-full min-h-[180px] lg:h-[250px] bg-[#1A1A1A] flex items-center justify-center overflow-hidden"
    >
      {/* Background Overlay Layer */}
      <div
        className="absolute inset-0 bg-[#1A1A1A] z-0 opacity-95"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.88), rgba(26, 26, 26, 0.88)), url('https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 py-8 lg:py-0 text-center">
        <h2
          id="statement-text"
          className="text-white font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug max-w-4xl mx-auto"
        >
          We specialize in a wide variety of <br className="hidden sm:inline" />
          <span className="text-[#C9A83E]">solar installation</span>
        </h2>
      </div>
    </section>
  );
};
