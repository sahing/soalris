import React, { useState } from 'react';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  onOpenTerms: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenTerms }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please provide your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter your project message or inquiry.');
      return;
    }
    if (!formData.acceptTerms) {
      setErrorMsg('Please accept the Terms of Service to proceed.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    /* BG: TBD (Transparent / white placeholder background) */
    <section
      id="contact"
      aria-label="Contact Us Section"
      className="bg-white py-12 lg:py-[100px] border-b border-[#D9D9D9]/50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (40% desktop, full-width on mobile): Large vertical image */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-neutral-900 overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=900&q=80"
                alt="Solar field engineer inspecting installation hardware"
                className="w-full h-full object-cover grayscale-[15%] hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A83E] font-bold mb-1">
                  NABCEP CERTIFIED
                </p>
                <p className="font-serif text-lg font-bold">
                  Expert On-Site Engineering & Energy Auditing
                </p>
              </div>
            </div>

            {/* Small Caption Line under image */}
            <p className="text-xs text-[#6B6B6B] mt-3 tracking-wide">
              Field technician inspecting photovoltaic array connectors • ISO 9001 certified protocols
            </p>
          </div>

          {/* Right Column (60% desktop): Heading & Underline-style Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-0.5 bg-[#C9A83E]" />
              <span className="text-[#C9A83E] text-xs uppercase tracking-[0.2em] font-bold">
                GET IN TOUCH
              </span>
            </div>

            <h2
              id="contact-heading"
              className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-bold tracking-tight mb-8"
            >
              Contact Us
            </h2>

            {submitted ? (
              <div className="p-8 bg-neutral-50 border border-[#C9A83E] text-[#1A1A1A] text-left">
                <div className="flex items-center space-x-3 mb-3 text-[#C9A83E]">
                  <CheckCircle2 className="w-8 h-8" />
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Inquiry Received</h3>
                </div>
                <p className="text-[#6B6B6B] text-base leading-relaxed mb-6">
                  Thank you, <strong className="text-[#1A1A1A]">{formData.name}</strong>. Our solar engineering team has received your project details and will contact you at <strong className="text-[#1A1A1A]">{formData.email}</strong> within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '', acceptTerms: false });
                  }}
                  className="btn-black !text-xs"
                >
                  SUBMIT ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {errorMsg && (
                  <div className="flex items-center space-x-2 text-sm text-red-600 bg-red-50 p-3 border-l-2 border-red-600">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name field (underline-style) */}
                <div className="flex flex-col">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mb-1"
                  >
                    Name <span className="text-[#C9A83E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#D9D9D9] focus:border-[#C9A83E] focus:ring-0 py-3 text-base text-[#1A1A1A] placeholder-[#6B6B6B]/40 outline-none transition-colors"
                  />
                </div>

                {/* Email field (underline-style) */}
                <div className="flex flex-col">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mb-1"
                  >
                    Email <span className="text-[#C9A83E]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="e.g. eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#D9D9D9] focus:border-[#C9A83E] focus:ring-0 py-3 text-base text-[#1A1A1A] placeholder-[#6B6B6B]/40 outline-none transition-colors"
                  />
                </div>

                {/* Message field (underline-style) */}
                <div className="flex flex-col">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mb-1"
                  >
                    Message <span className="text-[#C9A83E]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your property, estimated electricity usage, or project timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#D9D9D9] focus:border-[#C9A83E] focus:ring-0 py-3 text-base text-[#1A1A1A] placeholder-[#6B6B6B]/40 outline-none resize-y transition-colors"
                  />
                </div>

                {/* Checkbox: Terms of Service */}
                <div className="flex items-start space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="contact-terms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded-none accent-[#C9A83E] text-[#C9A83E] border-[#D9D9D9] focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="contact-terms" className="text-sm text-[#6B6B6B] cursor-pointer select-none">
                    I accept the{' '}
                    <button
                      type="button"
                      onClick={onOpenTerms}
                      className="text-[#1A1A1A] font-semibold underline decoration-[#C9A83E] decoration-2 underline-offset-2 hover:text-[#C9A83E] transition-colors"
                    >
                      Terms of Service
                    </button>{' '}
                    and consent to energy consultation correspondence.
                  </label>
                </div>

                {/* Solid gold SUBMIT button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="btn-gold group w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-10 py-4"
                  >
                    <span>SUBMIT</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
