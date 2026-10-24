import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

interface HeroProps {
  onBookNow?: () => void;
}

export default function Hero({ onBookNow }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[86vh] w-full flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-20 sm:pb-24 bg-[#1e1712] border-b border-[#423226]/12">
      {/* Background Hero Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-[1.01]"
        >
          <source src="/assets/aistudio/IMG_9394_7d285376.MOV" type="video/mp4" />
          <source src="/assets/aistudio/IMG_9394_7d285376.MOV" type="video/quicktime" />
        </video>
        {/* Warm atmospheric overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a130e]/65 via-[#1a130e]/50 to-[#1a130e]/75" />
      </div>

      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#d8ccb8] font-semibold mb-5 drop-shadow-xs">
            Signature Brow Artistry &bull; Korean Lash Lifts &bull; Custom Skincare
          </span>
          <h1 className="serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.94] mb-6 sm:mb-8 text-[#f7f5f0] drop-shadow-sm">
            Esthetics <br />
            <span className="italic text-[#d8ccb8] tracking-tight">by Clare</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#f7f5f0]/90 mb-9 sm:mb-11 font-normal leading-[1.8] drop-shadow-xs">
            Specializing in precision brow sculpting, lamination, and custom tinting tailored to your natural bone structure—paired with gentle Korean lash lifts and restorative, results-driven skincare treatments.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={onBookNow}
              className="bg-[#f7f5f0] text-[#2c221a] hover:bg-[#e8e1d5] rounded-2xl text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 py-4 px-8 cursor-pointer whitespace-nowrap transition-all shadow-lg active:scale-95"
            >
              <Calendar size={15} className="text-[#624a37] shrink-0" />
              <span>Book Appointment</span>
            </button>
            <a
              href="#services"
              className="bg-[#2c221a]/55 hover:bg-[#2c221a]/80 text-[#f7f5f0] border border-[#f7f5f0]/30 backdrop-blur-md rounded-2xl text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 text-center whitespace-nowrap transition-all"
            >
              View Treatments
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
