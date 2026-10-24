import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';

const VAGARO_SCRIPT_SRC =
  'https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqqCZ4vDZScT3qmV35y6RuSdBuOc1WJD1wOc1WO61Ctdg4tjxMG9pUxapkUcvCu7gevEhAJDXwOapcUbfY?v=NnHH2djUR45YVuzMoPpJP9ByxZNik4P30VzOXn2Ysznm#';

interface VagaroWidgetProps {
  onBackHome: () => void;
}

export default function VagaroWidget({ onBackHome }: VagaroWidgetProps) {
  const vagaroContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const container = vagaroContainerRef.current;
    if (!container) return;

    // Remove any previously injected script or duplicate iframe before re-initializing
    const existingScripts = container.querySelectorAll('script');
    existingScripts.forEach((s) => s.remove());

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.defer = true;
    script.src = VAGARO_SCRIPT_SRC;
    container.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-[#f7f5f0] text-stone-800">
      {/* Top Header Block */}
      <section className="py-16 sm:py-20 bg-[#e2d7c5] border-b border-[#423226]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#423226] hover:text-[#624a37] mb-8 cursor-pointer transition-colors"
          >
            <ArrowLeft size={15} />
            <span>Back to Home</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#624a37] font-bold mb-3 block">
              Online Scheduling
            </span>
            <h1 className="serif text-5xl sm:text-6xl md:text-7xl text-[#2c221a] mb-4 leading-tight">
              Reserve Your <span className="italic text-[#624a37]">Ritual</span>
            </h1>
            <p className="text-stone-800 text-sm sm:text-base font-medium leading-[1.85] max-w-2xl">
              Select your desired treatment and preferred time directly through our live Vagaro booking tool below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Embedded Vagaro Scheduler Section */}
      <section className="py-16 sm:py-24 bg-[#ebe3d5] border-b border-[#423226]/12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-[#faf8f4] rounded-[2.5rem] p-4 sm:p-8 md:p-10 border border-[#423226]/15 shadow-sm overflow-x-auto"
          >
            {/* Vagaro Embedded Booking Widget */}
            <div
              id="frameTitle"
              className="embedded-widget-title"
              style={{
                fontSize: '23px',
                color: '#333',
                fontFamily: 'Arial, Helvetica, sans-serif',
                lineHeight: '24px',
                padding: '18px 10px 8px',
                textAlign: 'center',
                WebkitBoxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                boxSizing: 'border-box',
              }}
            >
              Book Now
            </div>

            <div
              ref={vagaroContainerRef}
              className="vagaro"
              style={{
                width: '250px',
                padding: 0,
                border: 0,
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <style>{`.vagaro a {font-size:14px; color:#AAA; text-decoration:none;}`}</style>
              <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>
              &nbsp;
              <a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>,
              &nbsp;
              <a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>
              &nbsp;&amp;&nbsp;
              <a href="https://www.vagaro.com/pro/fitness-software">Fitness Software</a>
            </div>

            {/* Fallback direct link */}
            <div className="mt-8 pt-6 border-t border-[#423226]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
              <span className="flex items-center gap-2 font-medium">
                <Calendar size={14} className="text-[#7d6049]" />
                Prefer to book in a separate window?
              </span>
              <a
                href="https://www.vagaro.com/estheticsbyclaree/services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-bold text-[#423226] hover:text-[#624a37] transition-colors"
              >
                <span>Open Vagaro Booking Page</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
