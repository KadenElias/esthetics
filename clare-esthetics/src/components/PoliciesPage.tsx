import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, AlertCircle, Phone } from 'lucide-react';

interface PoliciesPageProps {
  onBackHome: () => void;
  onBookNow?: () => void;
}

export default function PoliciesPage({ onBackHome, onBookNow }: PoliciesPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-[#f7f5f0] text-stone-800">
      {/* Top Header Block */}
      <section className="py-20 bg-[#e2d7c5] border-b border-[#423226]/15">
        <div className="max-w-4xl mx-auto px-6">
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
            <h1 className="serif text-5xl sm:text-6xl md:text-7xl text-[#2c221a] mb-6 leading-tight">
              Policies
            </h1>
            <p className="text-stone-800 text-sm sm:text-base font-medium leading-[1.85] max-w-3xl">
              These policies are put in place to ensure that each client receives the best quality experience every time they come in. Each policy will be enforced. Please read each policy carefully to avoid any miscommunication! Thank you for your cooperation and understanding! Feel free to contact us with any questions!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Policies Block */}
      <section className="py-24 bg-[#faf8f4] border-b border-[#423226]/12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="serif text-4xl sm:text-5xl text-[#2c221a] mb-12 italic">
            Appointment Policies
          </h2>

          <div className="space-y-8">
            {/* Cancelation Policy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="bg-[#f0eadd] p-8 sm:p-10 rounded-[2.25rem] border border-[#423226]/15 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#423226] text-[#f7f5f0] flex items-center justify-center shrink-0">
                  <Calendar size={18} className="text-[#d8ccb8]" />
                </div>
                <h3 className="serif text-2xl sm:text-3xl font-semibold tracking-wide text-[#2c221a] uppercase">
                  Cancelation Policy
                </h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base font-medium leading-[1.85]">
                Your appointments and well-being are very important to us. We understand that sometimes, unexpected delays can occur, making schedule adjustments. If you need to cancel your appointment, we respectfully request at least 24 hour notice. Less than 24 hour notice will result in a 50% fee.
              </p>
            </motion.div>

            {/* Late Arrivals */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="bg-[#f0eadd] p-8 sm:p-10 rounded-[2.25rem] border border-[#423226]/15 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#423226] text-[#f7f5f0] flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#d8ccb8]" />
                </div>
                <h3 className="serif text-2xl sm:text-3xl font-semibold tracking-wide text-[#2c221a] uppercase">
                  Late Arrivals
                </h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base font-medium leading-[1.85]">
                Please note that if you are over 10 minutes late for your appointment we may have to reschedule your service if it cannot be completed in the remaining time frame. All attempts to reschedule in a timely manner will be made. If we do not hear from you 10 or more minutes into your scheduled appointment time it is considered a “No-Show”.
              </p>
            </motion.div>

            {/* No Shows */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="bg-[#f0eadd] p-8 sm:p-10 rounded-[2.25rem] border border-[#423226]/15 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#423226] text-[#f7f5f0] flex items-center justify-center shrink-0">
                  <AlertCircle size={18} className="text-[#d8ccb8]" />
                </div>
                <h3 className="serif text-2xl sm:text-3xl font-semibold tracking-wide text-[#2c221a] uppercase">
                  No Shows
                </h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base font-medium leading-[1.85]">
                In the event that a client does not show up for an appointment without getting in touch first, a fee of 90% scheduled service will be paid before rebooking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Note & Action Block */}
      <section className="py-20 bg-[#ebe3d5] border-b border-[#423226]/15">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#423226]/10 text-[#423226] flex items-center justify-center mx-auto mb-6">
            <Phone size={20} />
          </div>
          <div className="space-y-4 text-stone-800 text-sm sm:text-base font-medium leading-[1.85]">
            <p className="serif italic text-2xl sm:text-3xl text-[#2c221a] leading-relaxed">
              We understand that emergencies happen that prevent 24-hour notice for canceling or rescheduling your appointment.
            </p>
            <p>
              We will do everything we can to accommodate appointment changes and cancellations as required. Please give us a call or text at your earliest convenience to modify or cancel your appointment!
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onBookNow}
              className="btn-primary inline-flex items-center gap-2 py-4 px-8 cursor-pointer"
            >
              <Calendar size={15} className="text-[#d8ccb8]" />
              <span>Book Now</span>
            </button>
            <button
              type="button"
              onClick={onBackHome}
              className="btn-secondary py-4 px-8 cursor-pointer"
            >
              Return Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
