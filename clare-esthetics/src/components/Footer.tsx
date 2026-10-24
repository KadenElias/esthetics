import { motion } from 'motion/react';
import { Instagram, Facebook, Mail, MapPin, Phone, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenBooking?: () => void;
  onNavigate?: (view: 'home' | 'policies' | 'pre-post-care' | 'booking') => void;
}

export default function Footer({ onOpenBooking, onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1e1713] text-[#f7f5f0] pt-32 pb-16 relative overflow-hidden border-t border-[#423226]/40">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#624a37]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#cbbba7]/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <h2 className="serif text-4xl sm:text-5xl mb-6 tracking-tight">
              ESTHETICS BY CLARE 
              <span className="italic block text-[#d8ccb8]/60 text-2xl mt-1">Skin Sanctuary</span>
            </h2>
            <p className="max-w-md text-stone-300 font-medium leading-relaxed mb-8 opacity-80 text-sm">
              A private clinical sanctuary dedicated to the art of skin health. Clare harmonizes herbal botanical infusions and dermatological precision with intuitive, restorative aesthetic care.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                type="button"
                onClick={() => (onOpenBooking ? onOpenBooking() : onNavigate?.('booking'))}
                className="btn-primary py-2.5 px-5 text-[11px] flex items-center gap-2 cursor-pointer"
              >
                <Calendar size={13} className="text-[#d8ccb8]" />
                <span>Book Appointment</span>
              </button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/estheticsbyclare/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow @estheticsbyclare on Instagram"
                className="p-3.5 border border-white/10 rounded-2xl hover:bg-[#d8ccb8] hover:text-[#1e1713] hover:border-[#d8ccb8] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:clare@estheticsbyclare.com"
                aria-label="Email Esthetics by Clare"
                className="p-3.5 border border-white/10 rounded-2xl hover:bg-[#d8ccb8] hover:text-[#1e1713] hover:border-[#d8ccb8] transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#d8ccb8]/60 mb-8">Coordinates</h4>
            <ul className="space-y-5 text-sm font-medium text-stone-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-1 text-[#cbbba7]" />
                <div>
                  <span>28410 Old Town Front St #102 <br />Temecula, CA 92590</span>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=28410+Old+Town+Front+St+%23102%2C+Temecula%2C+CA+92590"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-1 text-[11px] text-[#d8ccb8] hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#cbbba7]" />
                <span>(951) 555-0192</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#cbbba7]" />
                <span>clare@estheticsbyclare.com</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 lg:pl-10">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#d8ccb8]/60 mb-8">Atelier Hours</h4>
            <ul className="space-y-5 text-[11px] uppercase tracking-[0.2em] font-bold text-stone-300">
              <li className="flex justify-between pb-3.5 border-b border-white/10">
                <span>Mon — Thu</span>
                <span className="text-[#d8ccb8]">10am — 8pm</span>
              </li>
              <li className="flex justify-between pb-3.5 border-b border-white/10">
                <span>Friday</span>
                <span className="text-[#d8ccb8]">9am — 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Weekends</span>
                <span className="italic text-[#cbbba7]">By Exclusive Appt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">
          <p>© 2026 Esthetics by Clare. Advanced Clinical Skin Care & Botanical Sanctuary.</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <button
              type="button"
              onClick={() => onNavigate?.('pre-post-care')}
              className="hover:text-stone-200 transition-colors cursor-pointer uppercase tracking-[0.3em]"
            >
              Pre &amp; Post Care
            </button>
            <button
              type="button"
              onClick={() => onNavigate?.('policies')}
              className="hover:text-stone-200 transition-colors cursor-pointer uppercase tracking-[0.3em]"
            >
              Policies
            </button>
            <button
              type="button"
              onClick={() => onNavigate?.('policies')}
              className="hover:text-stone-200 transition-colors cursor-pointer uppercase tracking-[0.3em]"
            >
              Appointment Policies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
