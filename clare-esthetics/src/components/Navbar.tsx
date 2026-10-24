import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentView?: 'home' | 'policies' | 'pre-post-care' | 'booking';
  onNavigate: (view: 'home' | 'policies' | 'pre-post-care' | 'booking') => void;
}

export default function Navbar({ currentView = 'home', onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const goToSection = (sectionId: string) => {
    setIsOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full max-w-full z-50 bg-[#f7f5f0]/95 backdrop-blur-xl border-b border-[#423226]/12 shadow-xs box-border">
      <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 h-15 sm:h-20 grid grid-cols-[minmax(0,1fr)_auto] lg:flex lg:items-center lg:justify-between items-center gap-2 box-border">
        {/* Brand Title */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => {
            setIsOpen(false);
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="serif text-[14px] sm:text-lg lg:text-2xl tracking-[0.06em] sm:tracking-[0.12em] lg:tracking-widest font-semibold text-[#423226] uppercase cursor-pointer text-left truncate min-w-0"
        >
          Esthetics by Clare
        </motion.button>

        {/* Desktop Nav (1024px+) */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6 shrink-0">
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[11px] uppercase tracking-[0.18em] font-medium text-stone-600 hover:text-[#423226] transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Home
          </button>
          <button
            onClick={() => goToSection('about')}
            className="text-[11px] uppercase tracking-[0.18em] font-medium text-stone-600 hover:text-[#423226] transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            About
          </button>
          <button
            onClick={() => goToSection('services')}
            className="text-[11px] uppercase tracking-[0.18em] font-medium text-stone-600 hover:text-[#423226] transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Services
          </button>
          <button
            onClick={() => goToSection('gallery')}
            className="text-[11px] uppercase tracking-[0.18em] font-medium text-stone-600 hover:text-[#423226] transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Results
          </button>
          <button
            onClick={() => onNavigate('pre-post-care')}
            className={`text-[11px] uppercase tracking-[0.18em] transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              currentView === 'pre-post-care'
                ? 'font-bold text-[#423226] underline underline-offset-4'
                : 'font-medium text-stone-600 hover:text-[#423226]'
            }`}
          >
            Pre &amp; Post Care
          </button>
          <button
            onClick={() => onNavigate('policies')}
            className={`text-[11px] uppercase tracking-[0.18em] transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              currentView === 'policies'
                ? 'font-bold text-[#423226] underline underline-offset-4'
                : 'font-medium text-stone-600 hover:text-[#423226]'
            }`}
          >
            Policies
          </button>
        </div>

        {/* Right Controls: Book Button + Minimized Mobile Menu */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onNavigate('booking');
            }}
            className="bg-[#423226] text-[#f7f5f0] hover:bg-[#2e2118] px-2.5 py-2 sm:px-4 sm:py-2.5 lg:px-5 rounded-lg sm:rounded-2xl text-[10px] lg:text-[11px] uppercase tracking-[0.08em] sm:tracking-[0.15em] lg:tracking-[0.2em] font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-all active:scale-95 whitespace-nowrap shrink-0"
          >
            <Calendar size={12} className="hidden min-[380px]:inline text-[#d8ccb8] shrink-0" />
            <span className="sm:hidden">Book Now</span>
            <span className="hidden sm:inline">Book Appointment</span>
          </button>

          {/* Minimized Hamburger Menu Button (< 1024px) */}
          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden h-9 w-9 rounded-lg bg-[#423226]/10 hover:bg-[#423226]/18 border border-[#423226]/20 text-[#423226] flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="lg:hidden w-full max-w-full bg-[#f7f5f0] border-b border-[#423226]/15 shadow-xl px-4 py-3.5 flex flex-col gap-1 box-border"
          >
            {[
              { label: 'Home', action: () => { onNavigate('home'); setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
              { label: 'About', action: () => goToSection('about') },
              { label: 'Services', action: () => goToSection('services') },
              { label: 'Results', action: () => goToSection('gallery') },
              { label: 'Pre & Post Care', action: () => { onNavigate('pre-post-care'); setIsOpen(false); } },
              { label: 'Policies', action: () => { onNavigate('policies'); setIsOpen(false); } },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={item.action}
                className="w-full py-2.5 px-3 rounded-xl hover:bg-[#423226]/6 active:bg-[#423226]/10 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] font-semibold text-[#2c221a] text-left transition-colors cursor-pointer"
              >
                <span>{item.label}</span>
                <ChevronRight size={14} className="text-[#7d6049] shrink-0" />
              </button>
            ))}

            <div className="pt-2.5 mt-1 border-t border-[#423226]/10">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onNavigate('booking');
                }}
                className="w-full bg-[#423226] text-[#f7f5f0] py-3 px-4 rounded-xl text-[11px] uppercase tracking-[0.18em] font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Calendar size={14} className="text-[#d8ccb8] shrink-0" />
                <span>Book Appointment</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
