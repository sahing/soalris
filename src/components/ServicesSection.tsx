import React from 'react';
import { SERVICE_THUMBNAILS, SERVICE_CARDS } from '../data';

export const ServicesSection: React.FC = () => {
  return (
    /* BG: confirm (Solid dark section background #1A1A1A) */
    <section
      id="services"
      aria-label="Services Section"
      className="bg-[#1A1A1A] text-white py-12 lg:py-[100px] border-b border-neutral-800"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 text-left sm:text-center">
          <div className="flex items-center sm:justify-center space-x-3 mb-3">
            <span className="w-8 h-0.5 bg-[#C9A83E]" />
            <span className="text-[#C9A83E] text-xs uppercase tracking-[0.2em] font-bold">
              CAPABILITIES & EXPERTISE
            </span>
            <span className="w-8 h-0.5 bg-[#C9A83E]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
            End-to-End Solar Infrastructure
          </h2>
        </div>

        {/* 5a. Thumbnail strip: 3-column row of small landscape images, equal width, no captions, tight gutter */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {SERVICE_THUMBNAILS.map((thumb) => (
            <div
              key={thumb.id}
              className="relative overflow-hidden aspect-[16/9] bg-neutral-900 border border-neutral-800 group"
            >
              <img
                src={thumb.imageUrl}
                alt={thumb.alt}
                className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>

        {/* 5b. Feature cards: 3-column row below the thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SERVICE_CARDS.map((card) => (
            <div
              key={card.id}
              id={`service-card-${card.id}`}
              className="relative overflow-hidden min-h-[300px] sm:min-h-[340px] flex flex-col justify-end p-6 sm:p-8 border border-neutral-800 group"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(26, 26, 26, 0.95) 0%, rgba(26, 26, 26, 0.65) 50%, rgba(26, 26, 26, 0.4) 100%), url('${card.imageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Subtle gold accent border on top on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#C9A83E] transition-colors duration-300" />

              {/* Bottom-aligned text inside card */}
              <div className="relative z-10">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-[#A3A3A3] text-sm leading-relaxed font-sans">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
