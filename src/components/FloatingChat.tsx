import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall, Zap } from 'lucide-react';

export const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'agent' | 'user'; text: string }>>([
    {
      sender: 'agent',
      text: 'Hello! Welcome to Solaris Energy Systems. How can our solar specialists assist your project today?',
    },
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputVal('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'agent',
          text: 'Thank you for your message! Our solar engineering team is on standby. For immediate urgent site audits, please call us at (800) 555-SOLAR or submit our contact form.',
        },
      ]);
    }, 600);
  };

  const handleQuickQuestion = (question: string) => {
    setMessages((prev) => [...prev, { sender: 'user', text: question }]);
    setTimeout(() => {
      let answer = '';
      if (question.includes('tax')) {
        answer = 'The federal Residential Clean Energy Credit allows you to deduct 30% of installation costs from your federal taxes. Additional state rebates also apply.';
      } else if (question.includes('timeline')) {
        answer = 'Standard residential installations require 1-2 days of roof work following engineering permits. Commercial systems range from 2-4 weeks.';
      } else {
        answer = 'Our systems typically pay for themselves within 5-7 years while generating clean power for 25+ years.';
      }
      setMessages((prev) => [...prev, { sender: 'agent', text: answer }]);
    }, 600);
  };

  return (
    <aside aria-label="Solar Energy Assistant" className="fixed bottom-6 right-6 z-40">
      {/* Expanded Chat Box */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Solar Energy Support Window"
          className="mb-3 w-[320px] sm:w-[360px] bg-white border-2 border-[#1A1A1A] shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="bg-[#1A1A1A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 bg-[#C9A83E] text-[#1A1A1A] flex items-center justify-center font-bold text-xs">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <p className="font-serif font-bold text-sm leading-none">Solaris Advisor</p>
                <span className="text-[10px] text-[#C9A83E] tracking-wider uppercase">Live Energy Desk</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat Window"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick FAQ Chips */}
          <div className="p-2.5 bg-neutral-50 border-b border-[#D9D9D9] flex flex-wrap gap-1.5 text-xs">
            <button
              type="button"
              onClick={() => handleQuickQuestion('What tax credits are available?')}
              className="px-2 py-1 bg-white border border-[#D9D9D9] hover:border-[#C9A83E] text-[11px] text-[#1A1A1A] transition-colors"
            >
              Tax Credits?
            </button>
            <button
              type="button"
              onClick={() => handleQuickQuestion('What is the installation timeline?')}
              className="px-2 py-1 bg-white border border-[#D9D9D9] hover:border-[#C9A83E] text-[11px] text-[#1A1A1A] transition-colors"
            >
              Timeline?
            </button>
            <button
              type="button"
              onClick={() => handleQuickQuestion('How much do I save on electricity?')}
              className="px-2 py-1 bg-white border border-[#D9D9D9] hover:border-[#C9A83E] text-[11px] text-[#1A1A1A] transition-colors"
            >
              ROI & Savings?
            </button>
          </div>

          {/* Message Stream */}
          <div className="p-4 h-64 overflow-y-auto space-y-3 text-xs leading-relaxed bg-[#FAFAFA]">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 ${
                    m.sender === 'user'
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-white text-[#1A1A1A] border border-[#D9D9D9] shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSend} className="p-2.5 bg-white border-t border-[#D9D9D9] flex items-center space-x-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about solar panels..."
              className="flex-1 text-xs py-2 px-3 border border-[#D9D9D9] focus:border-[#C9A83E] focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="bg-[#C9A83E] hover:bg-[#B89632] text-[#1A1A1A] p-2 transition-colors shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Direct Call Footer */}
          <div className="bg-[#1A1A1A] text-white/80 py-1.5 px-3 text-[10px] flex items-center justify-between">
            <span className="flex items-center space-x-1">
              <PhoneCall className="w-3 h-3 text-[#C9A83E]" />
              <span>Direct: (800) 555-SOLAR</span>
            </span>
            <span className="text-[#C9A83E]">Mon-Sat 8am-6pm</span>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        id="floating-help-widget"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Solar Energy Help and Inquiry Widget"
        className="w-13 h-13 bg-[#C9A83E] hover:bg-[#B89632] text-[#1A1A1A] flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 group focus:outline-none"
      >
        {isOpen ? (
          <X className="w-6 h-6 stroke-[2.2]" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-6 h-6 stroke-[2.2]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#1A1A1A] rounded-full border border-white" />
          </div>
        )}
      </button>
    </aside>
  );
};
