import React from 'react';
import { PROJECTS } from '../data';

export const ProjectsSection: React.FC = () => {
  return (
    /* BG: TBD (White / transparent placeholder) */
    <section
      id="projects"
      aria-label="Our Projects Section"
      className="bg-white py-12 lg:py-[100px] border-b border-[#D9D9D9]/50 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Centered Heading and Subtext */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-0.5 bg-[#C9A83E]" />
            <span className="text-[#C9A83E] text-xs uppercase tracking-[0.2em] font-bold">
              PORTFOLIO
            </span>
            <span className="w-8 h-0.5 bg-[#C9A83E]" />
          </div>
          <h2
            id="projects-heading"
            className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-bold tracking-tight mb-3"
          >
            Our Projects
          </h2>
          <p className="text-[#6B6B6B] text-base font-sans">
            A curated showcase of high-efficiency rooftop and ground-mounted solar installations.
          </p>
        </div>

        {/* 3×3 image grid container with Recurring Gold Offset Rectangle Motif */}
        <div className="relative">
          {/* Recurring Gold Offset Rectangle motif peeking out from the grid edges (hidden on mobile to prevent overflow) */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute -right-3 -bottom-3 lg:-right-5 lg:-bottom-5 w-full h-full bg-[#C9A83E] z-0 pointer-events-none"
          />

          {/* 3×3 Image Grid (collapses to 2 cols on tablet, 1 col on mobile) */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 bg-white p-1 sm:p-2 border border-[#D9D9D9]/60">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                id={`project-item-${project.id}`}
                className="group relative overflow-hidden aspect-[4/3] bg-neutral-900 cursor-pointer"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Always visible subtle bottom badge + expandable info overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 transition-opacity">
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="text-[11px] font-bold tracking-widest text-[#C9A83E] uppercase bg-[#1A1A1A] px-2 py-0.5">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-medium text-white/70">
                      {project.capacity}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-white font-bold tracking-tight group-hover:text-[#C9A83E] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
