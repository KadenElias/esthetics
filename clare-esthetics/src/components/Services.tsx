import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Service } from '../lib/firebase';
import { ArrowRight, Clock, ChevronDown } from 'lucide-react';
import { CLARE_SERVICES } from '../data/servicesData';

interface ServicesProps {
  services?: Service[];
  onBook?: (service: Service) => void;
}

function splitDescription(description: string): { intro: string; details: string | null } {
  if (description.length <= 190) {
    return { intro: description, details: null };
  }

  // Look for natural section boundaries
  const splitKeywords = [
    'Includes a ',
    'Includes ',
    'Your appointment includes ',
    'This is not a relaxation',
  ];

  for (const kw of splitKeywords) {
    const idx = description.indexOf(kw);
    if (idx !== -1 && idx > 60) {
      return {
        intro: description.substring(0, idx).trim(),
        details: description.substring(idx).trim(),
      };
    }
  }

  const periodIdx = description.indexOf('. ', 130);
  if (periodIdx !== -1 && periodIdx < description.length - 20) {
    return {
      intro: description.substring(0, periodIdx + 1).trim(),
      details: description.substring(periodIdx + 2).trim(),
    };
  }

  return { intro: description, details: null };
}

export default function Services({ services, onBook }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const sourceServices = CLARE_SERVICES;

  return (
    <section id="services" className="py-28 relative overflow-hidden bg-[#f4f0e8] border-b border-[#423226]/12">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="serif text-6xl md:text-7xl text-[#2c221a] leading-tight">
              Services
            </h2>
          </div>
          <p className="max-w-[340px] text-[13px] text-stone-600 leading-relaxed font-medium">
            Merging clinical precision with earth-sourced botanical infusions to reveal your skin's true natural radiance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          <AnimatePresence>
            {sourceServices.map((service, idx) => {
              const { intro, details } = splitDescription(service.description);
              const hasMore = Boolean(details);
              const isExpanded = expandedId === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.35, ease: 'easeOut' }}
                  className="liquid-glass p-4 rounded-[2.5rem] group flex flex-col justify-between h-full min-h-[560px]"
                >
                  {/* Internal Meniscus Liquid Sheen */}
                  <div className="liquid-glass-sheen" />
                  {/* Animated Liquid Caustic Glare on hover */}
                  <div className="liquid-glass-shimmer" />
                  {/* Top Specular Meniscus Light Refraction Edge */}
                  <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none" />

                  <div className="flex-1 flex flex-col">
                    {/* Image Container */}
                    <div className="aspect-[4/3] sm:aspect-[4/3.5] overflow-hidden rounded-[2rem] mb-6 relative border border-white/60 shadow-[inset_0_1px_3px_rgba(255,255,255,0.7)] shrink-0">
                      <img 
                        src={service.imageUrl} 
                        alt={service.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2c221a]/25 via-transparent to-transparent pointer-events-none" />
                    </div>
                    
                    <div className="px-3 pb-2 relative z-10 flex-1 flex flex-col">
                      <h3 className="serif text-2xl sm:text-3xl mb-3 text-[#2c221a] group-hover:text-[#423226] transition-colors leading-snug min-h-[4rem]">
                        {service.name}
                      </h3>

                      {/* Description with smooth height expansion */}
                      <div className="text-[13px] text-stone-600 mb-6 font-medium leading-relaxed flex-1">
                        <p>{intro}</p>
                        
                        <AnimatePresence initial={false}>
                          {isExpanded && details && (
                            <motion.div
                              key="details"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pt-2.5 mt-2.5 border-t border-[#423226]/10 text-stone-600/95 leading-relaxed text-[12.5px]">
                                {details}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {hasMore && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedId(isExpanded ? null : service.id);
                            }}
                            className="mt-2.5 text-[11px] font-bold text-[#7d6049] hover:text-[#423226] inline-flex items-center gap-1.5 cursor-pointer transition-colors py-0.5 group/btn"
                          >
                            <span>{isExpanded ? 'Read less' : 'Read more'}</span>
                            <ChevronDown 
                              size={13} 
                              className={`transition-transform duration-300 ease-out text-[#7d6049] group-hover/btn:text-[#423226] ${
                                isExpanded ? 'rotate-180' : 'rotate-0'
                              }`} 
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom / Reservation Action */}
                  <div className="px-3 pb-3 relative z-10 mt-auto shrink-0">
                    <div className="flex items-center justify-between pt-4 border-t border-[#423226]/10">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 flex items-center gap-1.5">
                        <Clock size={12} className="text-[#7d6049]" />
                        {service.duration} mins
                      </span>
                      <button 
                        type="button"
                        onClick={() => onBook?.(service)}
                        className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-[#423226] group-hover:gap-3 transition-all cursor-pointer hover:text-[#2e2118] bg-white/60 hover:bg-white px-3.5 py-1.5 rounded-full border border-stone-200/80 shadow-xs"
                      >
                        <span>Book Now</span>
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
