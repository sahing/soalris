import React from 'react';
import { FloatingChat } from './FloatingChat';

export const Footer: React.FC = () => {
  return (
    <>
      {/* 10. Footer bar: Thin, full-width dark bar */}
      <footer
        id="main-footer"
        aria-label="Footer"
        className="w-full bg-[#1A1A1A] text-neutral-400 py-6 border-t border-neutral-800"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-xs tracking-wider gap-3">
          {/* Centered or balanced copyright & credit placeholder */}
          <div className="text-center sm:text-left text-neutral-400">
            <span>© {new Date().getFullYear()} Solaris Energy Systems Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6 text-neutral-400 text-xs">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#C9A83E] transition-colors uppercase"
            >
              Back to Top
            </a>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-500">NABCEP Certified Contractor</span>
          </div>
        </div>
      </footer>

      {/* Floating Chat / Help Widget Icon in Bottom-Right Corner */}
      <FloatingChat />
    </>
  );
};
