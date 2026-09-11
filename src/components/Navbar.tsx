import React, { useState, useEffect } from 'react';
import { Menu, X, SunMedium } from 'lucide-react';
import { NAV_ITEMS } from '../data';

interface NavbarProps {
  onQuoteClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    /* BG: TBD (transparent over hero, solid white on scroll) */
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-white text-[#1A1A1A] shadow-sm border-b border-[#D9D9D9]'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="#home"
          id="brand-logo"
          className="flex items-center space-x-3 group"
          aria-label="Solar Energy Homepage"
        >
          {/* Angular Gold Brand Icon */}
          <div className="w-9 h-9 bg-[#C9A83E] flex items-center justify-center text-[#1A1A1A] font-bold shrink-0">
            <SunMedium className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none ${
                isScrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
            >
              SOLAR<span className="text-[#C9A83E]">IS</span>
            </span>
            <span
              className={`text-[9px] uppercase tracking-[0.25em] font-semibold mt-1 ${
                isScrolled ? 'text-[#6B6B6B]' : 'text-white/80'
              }`}
            >
              ENERGY SYSTEMS
            </span>
          </div>
        </a>

        {/* Right: Desktop Navigation Links */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              id={`nav-link-${item.label.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-[13px] font-semibold tracking-wider uppercase transition-colors relative py-1 hover:text-[#C9A83E] ${
                isScrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Optional Direct Quote Action in Nav */}
          <a
            href="#contact"
            id="nav-quote-button"
            onClick={(e) => {
              e.preventDefault();
              const contactSec = document.querySelector('#contact');
              if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
              if (onQuoteClick) onQuoteClick();
            }}
            className="btn-gold !py-2.5 !px-5 text-xs ml-4"
          >
            GET A QUOTE
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            id="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none transition-colors ${
              isScrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden fixed inset-x-0 top-20 bg-white border-b border-[#D9D9D9] shadow-xl py-6 px-8 z-40 transition-all text-[#1A1A1A]"
        >
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                id={`mobile-nav-${item.label.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-semibold tracking-wider uppercase py-2 border-b border-neutral-100 hover:text-[#C9A83E] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                id="mobile-nav-quote-cta"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const contactSec = document.querySelector('#contact');
                  if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gold w-full block text-center"
              >
                GET A FREE QUOTE
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
