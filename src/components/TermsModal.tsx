import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-lg bg-white border-2 border-[#C9A83E] p-6 sm:p-8 shadow-2xl text-[#1A1A1A] animate-in fade-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D9D9D9] mb-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-[#C9A83E]" />
            <h3 id="terms-modal-title" className="font-serif text-xl font-bold text-[#1A1A1A]">
              Terms of Service & Privacy
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="text-[#6B6B6B] hover:text-[#1A1A1A] p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="text-sm text-[#6B6B6B] space-y-3 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
          <p>
            By submitting an inquiry to <strong>Solaris Energy Systems</strong>, you agree to receive professional consultations regarding residential, commercial, or utility solar engineering proposals.
          </p>
          <p>
            <strong>Data Confidentiality:</strong> Your contact information is never sold, rented, or distributed to third-party telemarketers. All site assessment data and utility bills provided are handled under strict non-disclosure engineering practices.
          </p>
          <p>
            <strong>Engineering Estimates:</strong> Initial quotes, generation metrics, and incentive savings provided online or over the phone are preliminary projections based on satellite solar irradiance data and regional net-metering tariffs. Final contracted guarantees are validated via on-site structural audit.
          </p>
          <p>
            <strong>System Warranty:</strong> All tier-1 photovoltaic panels installed by Solaris include a minimum 25-year linear power performance warranty and a 10-year comprehensive workmanship guarantee.
          </p>
        </div>

        {/* Action */}
        <div className="mt-6 pt-4 border-t border-[#D9D9D9] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn-gold !py-2 !px-6 text-xs"
          >
            I UNDERSTAND
          </button>
        </div>
      </div>
    </div>
  );
};
