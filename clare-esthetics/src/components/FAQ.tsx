import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Calendar } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'first-visit',
    question: "Which facial should I book if it's my first visit?",
    answer:
      "If you are visiting for the first time or aren't sure which treatment your skin needs, the Signature Facial is the best place to start. Every 60-minute session is tailored around your skin and your goals—addressing breakouts, congestion, sensitivity, or aging with targeted corrective care, extractions if needed, facial and neck massage, and a customized mask."
  },
  {
    id: 'prep',
    question: 'How should I prepare my skin before my appointment?',
    answer:
      'Please pause active exfoliants—including retinoids, retinol, AHA/BHA acids, and physical scrubs—for 3 to 5 days prior to your facial, dermaplaning, or waxing service. If you are receiving ProCell Microchanneling, avoid direct sunburn or injectable treatments for at least two weeks prior.'
  },
  {
    id: 'silk-vs-procell',
    question: 'What is the difference between the Silk Infusion Facial and ProCell Microchanneling?',
    answer:
      'The Silk Infusion Facial uses non-invasive nano infusion to boost serum absorption, deeply hydrate, and immediately brighten skin texture with zero downtime. The Skin Perfecting Facial (ProCell Microchanneling) uses a professional .25mm microchanneling tip with growth-factor cell renewal serums to stimulate collagen and correct acne scarring, texture, and early signs of aging.'
  },
  {
    id: 'dermaplane-addon',
    question: 'Can Dermaplaning be added to a 60-minute facial?',
    answer:
      'Yes! While our 30-minute Dermaplane Facial is a focused exfoliation treatment to remove dead skin buildup and peach fuzz, dermaplaning can easily be added onto any 60-minute facial if you want both results-driven resurfacing and full relaxation.'
  },
  {
    id: 'brows-lashes',
    question: 'How long do Brow Lamination and Lash Lift results last?',
    answer:
      'Brow Lamination and Lash Lift + Tint results typically last between 6 and 8 weeks, following your natural hair growth cycle. For the first 24 hours after your service, keep your brows and lashes dry and avoid steam, saunas, or heavy oil-based cleansers.'
  },
  {
    id: 'location-policy',
    question: 'Where are you located and what is the arrival policy?',
    answer:
      'Our studio is located at 28410 Old Town Front St #102 in Old Town Temecula, with client parking available behind the building and along Front Street. Please arrive 5 to 10 minutes before your appointment time to settle in. If you need to reschedule, we kindly ask for at least 24 hours notice.'
  }
];

interface FAQProps {
  onBookNow?: () => void;
}

export default function FAQ({ onBookNow }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="qa" className="py-28 relative overflow-hidden bg-[#e2d8c7] border-b border-[#423226]/15">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="serif text-5xl sm:text-6xl md:text-7xl text-[#2c221a] tracking-tight">
            Questions & <span className="italic text-[#624a37]">Answers</span>
          </h2>
          <p className="mt-4 text-stone-700 font-medium text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about preparing for your treatment, selecting the right facial, and visiting the studio.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#faf8f4] rounded-3xl border border-[#423226]/12 shadow-xs transition-colors duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between gap-6 cursor-pointer group"
                >
                  <span className="serif text-xl sm:text-2xl text-[#2c221a] group-hover:text-[#624a37] transition-colors leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full bg-[#423226]/5 group-hover:bg-[#423226]/10 flex items-center justify-center shrink-0 transition-transform duration-200 ease-out text-[#423226] ${
                      isOpen ? 'rotate-180 bg-[#423226]/10' : 'rotate-0'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm text-stone-600 font-medium leading-relaxed border-t border-stone-200/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-stone-600 font-medium mb-5">
            Ready to schedule your session with Clare?
          </p>
          <button
            type="button"
            onClick={onBookNow}
            className="btn-primary inline-flex items-center gap-2 py-4 px-8 cursor-pointer"
          >
            <Calendar size={15} className="text-[#d8ccb8]" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}
