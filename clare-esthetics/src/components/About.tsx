import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

interface AboutProps {
  onBookNow?: () => void;
}

export default function About({ onBookNow }: AboutProps) {
  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden bg-[#e2d7c5] border-b border-[#423226]/15"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#faf8f4] p-3.5 rounded-[2.75rem] shadow-xl border border-[#423226]/12 max-w-md mx-auto">
              <div className="aspect-[4/5] overflow-hidden rounded-[2.25rem]">
                <img
                  src="/assets/aistudio/image_d60009f8.png"
                  alt="Clare — Licensed Esthetician and Founder of Esthetics by Clare"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h2 className="serif text-5xl sm:text-6xl md:text-7xl text-[#2c221a] mb-8 leading-tight">
              Hi, I’m <span className="italic text-[#624a37]">Clare!</span>
            </h2>

            <div className="space-y-5 text-stone-800 text-sm sm:text-base font-medium leading-[1.85]">
              <p>
                I’ve always believed beauty should feel fun, relaxing, and effortless. That’s what inspired me to create Esthetics by Clare—a space where you can unwind, feel taken care of, and leave glowing with confidence.
              </p>
              <p>
                I’m a licensed esthetician specializing in brows, lash lifts, and body waxing. My favorite part of what I do? The moment someone looks in the mirror after a service and lights up—it never gets old.
              </p>
              <p>
                Outside of the studio, you’ll usually find me at the gym or with my nieces and nephews.
              </p>
              <p className="serif italic text-xl sm:text-2xl text-[#2c221a] pt-2 leading-relaxed">
                Whether it’s your first visit or your fiftieth, my goal is always the same: to make you feel comfortable, cared for, and completely yourself.
              </p>
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={onBookNow}
                className="btn-primary inline-flex items-center gap-2 py-4 px-8 cursor-pointer"
              >
                <Calendar size={15} className="text-[#d8ccb8]" />
                <span>Book Now</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
