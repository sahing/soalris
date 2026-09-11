import React from 'react';
import { DollarSign, Leaf, Award, Home } from 'lucide-react';
import { BenefitItem } from '../types';
import { BENEFITS } from '../data';

const iconMap: Record<BenefitItem['iconName'], React.ComponentType<{ className?: string }>> = {
  DollarSign,
  Leaf,
  Award,
  Home,
};

export const BenefitsSection: React.FC = () => {
  return (
    /* BG: TBD (White / transparent placeholder) */
    <section
      id="benefits"
      aria-label="Solar Benefits Section"
      className="bg-white py-12 lg:py-[100px] border-b border-[#D9D9D9]/50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Centered Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-0.5 bg-[#C9A83E]" />
            <span className="text-[#C9A83E] text-xs uppercase tracking-[0.2em] font-bold">
              ADVANTAGES
            </span>
            <span className="w-8 h-0.5 bg-[#C9A83E]" />
          </div>
          <h2
            id="benefits-heading"
            className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-bold tracking-tight"
          >
            Solar Benefits
          </h2>
        </div>

        {/* 4-column icon+text grid (collapses to 2 columns on tablet, 1 column on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {BENEFITS.map((item) => {
            const IconComponent = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                id={`benefit-item-${item.id}`}
                className="flex flex-col items-start p-6 bg-white border border-[#D9D9D9]/70 hover:border-[#C9A83E] transition-colors group"
              >
                {/* Icon Container with gold accent */}
                <div className="w-12 h-12 bg-[#1A1A1A] text-[#C9A83E] flex items-center justify-center mb-5 group-hover:bg-[#C9A83E] group-hover:text-[#1A1A1A] transition-colors shrink-0">
                  <IconComponent className="w-6 h-6 stroke-[1.8]" />
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[#6B6B6B] text-sm leading-[1.65] font-sans">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
