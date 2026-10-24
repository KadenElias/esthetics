import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Sierra',
    content: 'Clare is an absolutely amazing esthetician! She is so well rounded in every part of esthetics. From her facials to waxing, you won’t be disappointed. She is truly the best! I have received every possible service from her, brow wax, Brazilian, facials, and brow lamination! I have been more than happy with every service. I feel comfortable with her and trust her fully. I can’t recommend her enough',
    rating: 5
  },
  {
    name: 'Morgan O.',
    content: 'Clare is so sweet and takes her time to listen so you get exactly what you’re looking for! I always leave feeling refreshed and very satisfied with my service!',
    rating: 5
  },
  {
    name: 'Maddie R.',
    content: 'Clare is so awesome!! She’s super friendly and gives me exactly what I want every time!! I recommend her to everyone!',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative bg-[#faf8f4] border-b border-[#423226]/12">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <Quote className="text-[#423226]/10 w-24 h-24 absolute -top-12 opacity-40" />
          <h2 className="serif text-5xl sm:text-6xl md:text-7xl italic text-[#2c221a]">What Clients <span className="text-[#624a37]">Have to Say</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#efe9de] p-10 rounded-[3rem] flex flex-col items-center text-center group hover:bg-[#e6decb] transition-colors duration-300 border border-[#423226]/15 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-8 text-[#9e8867]">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-lg font-serif italic leading-relaxed text-[#2c221a] mb-10 opacity-90 group-hover:opacity-100 transition-opacity">"{t.content}"</p>
              <div className="mt-auto">
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-stone-500">— {t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
