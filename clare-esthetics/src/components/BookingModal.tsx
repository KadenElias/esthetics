import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, Sparkles, ChevronDown } from 'lucide-react';
import { Service } from '../lib/firebase';
import { CLARE_SERVICES } from '../data/servicesData';

interface BookingModalProps {
  service: Service | null;
  services?: Service[];
  isOpen?: boolean;
  onClose: () => void;
  onConfirm: (date: string, notes: string, chosenService?: Service) => Promise<void>;
}

export default function BookingModal({
  service,
  services,
  isOpen = true,
  onClose,
  onConfirm,
}: BookingModalProps) {
  const allServices = (services && services.length > 0) ? services : CLARE_SERVICES;

  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    service?.id || allServices[0]?.id || ''
  );
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (service) {
      setSelectedServiceId(service.id);
    } else if (allServices.length > 0) {
      setSelectedServiceId(allServices[0].id);
    }
  }, [service, allServices]);

  const activeService = allServices.find(s => s.id === selectedServiceId) || allServices[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time) return;

    setIsSubmitting(true);
    try {
      const isoDate = new Date(`${date}T${time}`).toISOString();
      await onConfirm(isoDate, notes, activeService);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setDate('');
        setTime('');
        setNotes('');
      }, 2200);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1c1511]/60 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#f7f5f0] w-full max-w-2xl rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-stone-200/90 z-10 transition-all duration-300 my-auto"
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-4 border-b border-stone-200/70 bg-[#ede8e1]/60">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest font-bold text-[#624a37]">
                  Book Appointment
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 hover:bg-[#423226]/10 rounded-xl transition-colors text-[#423226] cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Selected Service Banner */}
            {activeService && (
              <div className="bg-[#423226] text-[#f7f5f0] px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <span className="serif text-base italic truncate max-w-[260px] sm:max-w-md">
                    {activeService.name}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-stone-300 font-medium shrink-0">
                  <span>{activeService.duration} mins</span>
                </div>
              </div>
            )}

            {/* Booking Form Content */}
            <div>
              {isSuccess ? (
                <div className="p-16 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-[#423226]/10 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-12 h-12 text-[#423226]" />
                  </div>
                  <h3 className="serif text-4xl mb-4 text-[#2c221a] italic">Treatment Reserved</h3>
                  <p className="text-stone-600 font-medium">
                    We've received your inquiry for Clare's studio. <br />
                    Our concierge will reach out to confirm your slot.
                  </p>
                </div>
              ) : (
                <div className="p-6 sm:p-10">
                  <h3 className="serif text-3xl mb-2 text-[#2c221a]">
                    Request <span className="italic text-[#624a37]">Treatment</span>
                  </h3>
                  <p className="text-xs text-stone-500 mb-6 font-medium">
                    Send a private booking request directly to Clare's skin atelier schedule.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Treatment Selection */}
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-[#7d6049] font-bold block mb-2">
                        Select Treatment
                      </label>
                      <div className="relative">
                        <select
                          value={selectedServiceId}
                          onChange={(e) => setSelectedServiceId(e.target.value)}
                          className="w-full bg-white/80 border border-stone-200 rounded-2xl py-3 px-4 text-xs font-semibold text-stone-800 focus:outline-none focus:border-[#423226]/50 shadow-inner appearance-none pr-10"
                        >
                          {allServices.map((srv) => (
                            <option key={srv.id} value={srv.id}>
                              {srv.name} ({srv.duration} mins)
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7d6049] pointer-events-none" size={16} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.2em] text-[#7d6049] font-bold block mb-2">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7d6049]" size={16} />
                          <input
                            type="date"
                            required
                            min={new Date().toISOString().split('T')[0]}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-white/70 border border-stone-200 rounded-2xl py-3 pl-12 pr-4 text-xs font-bold text-stone-800 focus:outline-none focus:border-[#423226]/50 shadow-inner"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-[0.2em] text-[#7d6049] font-bold block mb-2">
                          Preferred Time
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7d6049]" size={16} />
                          <input
                            type="time"
                            required
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full bg-white/70 border border-stone-200 rounded-2xl py-3 pl-12 pr-4 text-xs font-bold text-stone-800 focus:outline-none focus:border-[#423226]/50 shadow-inner"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-[#7d6049] font-bold block mb-2">
                        Skin Notes & Special Nuances
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Share your skin concerns, sensitivities, or goals..."
                        className="w-full bg-white/70 border border-stone-200 rounded-2xl py-3 px-4 text-xs font-medium text-stone-800 focus:outline-none focus:border-[#423226]/50 h-24 resize-none placeholder:text-stone-400 shadow-inner"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Book Now'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
