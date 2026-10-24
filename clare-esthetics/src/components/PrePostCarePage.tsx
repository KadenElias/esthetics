import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, CheckCircle2, AlertCircle, Calendar, ShieldCheck } from 'lucide-react';

interface PrePostCarePageProps {
  onBackHome: () => void;
  onBookNow?: () => void;
}

export default function PrePostCarePage({ onBackHome, onBookNow }: PrePostCarePageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] pt-28 pb-24">
      {/* Header Banner */}
      <div className="bg-[#e2d7c5] py-16 md:py-20 mb-14 border-b border-[#423226]/10">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={onBackHome}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#624a37] hover:text-[#2c221a] transition-colors mb-6 cursor-pointer"
            >
              <ArrowLeft size={14} />
              Back to Home
            </button>
            <p className="text-xs uppercase tracking-[0.25em] text-[#624a37] mb-3">
              Client Preparation & Aftercare Guide
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl serif text-[#2c221a] font-light tracking-wide mb-6">
              Pre &amp; Post Care
            </h1>
            <div className="w-16 h-[1px] bg-[#624a37]/40 mx-auto mb-6"></div>
            <p className="text-[#423226]/90 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Following proper pre- and post-care instructions ensures the healthiest skin, longest-lasting results, and safest experience for every treatment.
            </p>

            {/* Quick-Jump Section Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <button
                onClick={() => scrollToSection('brow-laminations')}
                className="px-4 py-2.5 bg-[#faf8f4] hover:bg-[#423226] text-[#2c221a] hover:text-[#faf8f4] border border-[#423226]/20 text-[11px] uppercase tracking-[0.16em] transition-colors cursor-pointer"
              >
                Brow Laminations
              </button>
              <button
                onClick={() => scrollToSection('waxing-checklist')}
                className="px-4 py-2.5 bg-[#faf8f4] hover:bg-[#423226] text-[#2c221a] hover:text-[#faf8f4] border border-[#423226]/20 text-[11px] uppercase tracking-[0.16em] transition-colors cursor-pointer"
              >
                What to Tell Your Waxer
              </button>
              <button
                onClick={() => scrollToSection('waxing-care')}
                className="px-4 py-2.5 bg-[#faf8f4] hover:bg-[#423226] text-[#2c221a] hover:text-[#faf8f4] border border-[#423226]/20 text-[11px] uppercase tracking-[0.16em] transition-colors cursor-pointer"
              >
                Waxing Care
              </button>
              <button
                onClick={() => scrollToSection('lash-lifts')}
                className="px-4 py-2.5 bg-[#faf8f4] hover:bg-[#423226] text-[#2c221a] hover:text-[#faf8f4] border border-[#423226]/20 text-[11px] uppercase tracking-[0.16em] transition-colors cursor-pointer"
              >
                Lash Lifts
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-6 space-y-16">
        {/* 1. BROW LAMINATIONS */}
        <motion.section
          id="brow-laminations"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="scroll-mt-28"
        >
          <div className="border-b border-[#423226]/15 pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#624a37] mb-1">
                Brow Services
              </p>
              <h2 className="text-3xl md:text-4xl serif text-[#2c221a] font-light">
                Brow Laminations
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Before Your Appointment */}
            <div className="bg-[#faf8f4] p-7 sm:p-8 border border-[#423226]/10 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#423226]/10">
                <div className="w-9 h-9 bg-[#e2d7c5]/60 flex items-center justify-center text-[#624a37] shrink-0">
                  <Calendar size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg uppercase tracking-[0.15em] text-[#2c221a] font-medium">
                  Before Your Appointment
                </h3>
              </div>

              <ul className="space-y-4 text-[#423226]/90 font-light text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Avoid tweezing/waxing:</strong> Do NOT pluck, trim, wax, thread or shave your brows for at least 2-3 weeks before.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Avoid Retinoids/AHA:</strong> Stop using any retinols, AHAs, exfoliants, etc. at least 1-2 weeks before.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Allergies:</strong> Please inform me of any allergies/sensitivities you may have.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Pregnant:</strong> If pregnant, consult with a doctor before.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">No Makeup:</strong> Please try and come with no makeup or products on your brows.
                  </span>
                </li>
              </ul>
            </div>

            {/* After Your Appointment */}
            <div className="bg-[#faf8f4] p-7 sm:p-8 border border-[#423226]/10 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#423226]/10">
                <div className="w-9 h-9 bg-[#e2d7c5]/60 flex items-center justify-center text-[#624a37] shrink-0">
                  <Sparkles size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg uppercase tracking-[0.15em] text-[#2c221a] font-medium">
                  After Your Appointment
                </h3>
              </div>

              <ul className="space-y-4 text-[#423226]/90 font-light text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Keep Them Dry:</strong> Do NOT get your brows wet for the first 24hrs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Avoid Oil/Makeup:</strong> Avoid oil-based products for the entirety of your lamination; cleansers, makeup, etc. (except for castor oil)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Apply Take Home Treatment:</strong> Apply nourishing treatment every night
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Brush Daily:</strong> Brush your brows throughout the day everyday. (brush up and towards your temple)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">No Sleeping on Brows:</strong> Avoid sleeping directly on your brows
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Avoid Sun Exposure:</strong> Avoid direct sunlight, sunbeds, saunas, steam rooms, and bodies of water for 48 hours.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">No Touching:</strong> Avoid excessive touching or rubbing of the area for the first 24 hrs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 2. WHAT TO TELL YOUR WAXER BEFORE YOUR WAX APPOINTMENT */}
        <motion.section
          id="waxing-checklist"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="scroll-mt-28"
        >
          <div className="bg-[#f0eadd] p-7 sm:p-10 border border-[#423226]/15">
            <div className="flex items-start gap-4 mb-6 pb-5 border-b border-[#423226]/10">
              <div className="w-10 h-10 bg-[#faf8f4] flex items-center justify-center text-[#624a37] shrink-0 mt-0.5">
                <AlertCircle size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#624a37] mb-1">
                  Important Safety Consultation
                </p>
                <h2 className="text-2xl sm:text-3xl serif text-[#2c221a] font-light">
                  What to Tell Your Waxer Before Your Wax Appointment
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <div className="bg-[#faf8f4] p-4 sm:p-5 border border-[#423226]/10 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#624a37] shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-[#2c221a] text-sm sm:text-base font-light leading-relaxed">
                  Have you been waxed before?
                </p>
              </div>

              <div className="bg-[#faf8f4] p-4 sm:p-5 border border-[#423226]/10 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#624a37] shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-[#2c221a] text-sm sm:text-base font-light leading-relaxed">
                  Any Allergies?
                </p>
              </div>

              <div className="bg-[#faf8f4] p-4 sm:p-5 border border-[#423226]/10 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#624a37] shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-[#2c221a] text-sm sm:text-base font-light leading-relaxed">
                  Current use of Topical or Oral Skincare with active ingredients. (that could cause skin thinning)
                </p>
              </div>

              <div className="bg-[#faf8f4] p-4 sm:p-5 border border-[#423226]/10 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#624a37] shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-[#2c221a] text-sm sm:text-base font-light leading-relaxed">
                  Current use of any RX medications such as retinol, AHA, Glycolic/ Benzoyl/ Salicylic, Differin.
                </p>
              </div>

              <div className="bg-[#faf8f4] p-4 sm:p-5 border border-[#423226]/10 flex items-start gap-3">
                <ShieldCheck size={18} className="text-[#624a37] shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-[#2c221a] text-sm sm:text-base font-light leading-relaxed">
                  <strong className="font-medium">Avoid ALL products with active ingredients</strong> 3-7 days before and after.
                </p>
              </div>

              <div className="bg-[#faf8f4] p-4 sm:p-5 border border-[#423226]/10 flex items-start gap-3">
                <ShieldCheck size={18} className="text-[#624a37] shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-[#2c221a] text-sm sm:text-base font-light leading-relaxed">
                  <strong className="font-medium">Avoid Retin-A</strong> for at least 7-14 days before and after service.
                </p>
              </div>

              <div className="bg-[#faf8f4] p-4 sm:p-5 border border-[#423226]/10 flex items-start gap-3">
                <AlertCircle size={18} className="text-[#624a37] shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-[#2c221a] text-sm sm:text-base font-light leading-relaxed">
                  Oral medications such as Accutane, Retin-A, Isotretinoin, Roaccuatane.
                </p>
              </div>

              <div className="bg-[#faf8f4] p-4 sm:p-5 border border-[#423226]/10 flex items-start gap-3">
                <AlertCircle size={18} className="text-[#624a37] shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-[#2c221a] text-sm sm:text-base font-light leading-relaxed">
                  <strong className="font-medium">Accutane:</strong> stop using 6 months- 1 year before appointment.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. WAXING */}
        <motion.section
          id="waxing-care"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="scroll-mt-28"
        >
          <div className="border-b border-[#423226]/15 pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#624a37] mb-1">
                Smooth Skin Care
              </p>
              <h2 className="text-3xl md:text-4xl serif text-[#2c221a] font-light">
                Waxing
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Before Your Appointment */}
            <div className="bg-[#faf8f4] p-7 sm:p-8 border border-[#423226]/10 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#423226]/10">
                <div className="w-9 h-9 bg-[#e2d7c5]/60 flex items-center justify-center text-[#624a37] shrink-0">
                  <Calendar size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg uppercase tracking-[0.15em] text-[#2c221a] font-medium">
                  Before Your Appointment
                </h3>
              </div>

              <ul className="space-y-5 text-[#423226]/90 font-light text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Hair Length:</strong> Ensure that your hair is the right length for waxing. Typically, it should be about 1/4 to 1/2 inch long (roughly the length of a grain of rice). If it's too short, the wax may not effectively grip the hair, and if it's too long, it can be more painful.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Exfoliate:</strong> Exfoliate the area to be waxed a day or two before your appointment. This helps remove dead skin cells, allowing for better wax adhesion and reducing the risk of ingrown hairs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Avoid Sun Exposure:</strong> Avoid sun exposure and tanning beds for at least 24 hours before waxing. Sunburned or overly tanned skin can be more sensitive.
                  </span>
                </li>
              </ul>
            </div>

            {/* After Your Appointment */}
            <div className="bg-[#faf8f4] p-7 sm:p-8 border border-[#423226]/10 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#423226]/10">
                <div className="w-9 h-9 bg-[#e2d7c5]/60 flex items-center justify-center text-[#624a37] shrink-0">
                  <Sparkles size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg uppercase tracking-[0.15em] text-[#2c221a] font-medium">
                  After Your Appointment
                </h3>
              </div>

              <ul className="space-y-5 text-[#423226]/90 font-light text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Avoid Touching &amp; Swimming:</strong> Refrain from touching the waxed area with unwashed hands to prevent infection. Avoid swimming in pools, hot tubs, or the ocean for at least 24-48 hours after waxing to reduce the risk of infection.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Exfoliate Gently:</strong> After a few days, you can start gentle exfoliation to prevent ingrown hairs. Use a soft exfoliating scrub or a washcloth in a circular motion. Avoid harsh exfoliants immediately after waxing. <strong className="font-medium text-[#2c221a]">NO SALT SCRUBS</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Moisturize:</strong> Apply a gentle, hydrating moisturizer to keep the skin soft and nourished. Avoid heavy lotions or creams with fragrances that can irritate freshly waxed skin.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Loose Clothing:</strong> Wear loose-fitting, breathable clothing to prevent friction and irritation in the waxed area.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Regular Maintenance:</strong> To maintain smooth skin, schedule regular waxing appointments every 4-6 weeks or as advised by your waxing professional.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 4. LASH LIFTS */}
        <motion.section
          id="lash-lifts"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="scroll-mt-28"
        >
          <div className="border-b border-[#423226]/15 pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#624a37] mb-1">
                Lash Services
              </p>
              <h2 className="text-3xl md:text-4xl serif text-[#2c221a] font-light">
                Lash Lifts
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Before Your Appointment */}
            <div className="bg-[#faf8f4] p-7 sm:p-8 border border-[#423226]/10 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#423226]/10">
                <div className="w-9 h-9 bg-[#e2d7c5]/60 flex items-center justify-center text-[#624a37] shrink-0">
                  <Calendar size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg uppercase tracking-[0.15em] text-[#2c221a] font-medium">
                  Before Your Appointment
                </h3>
              </div>

              <ul className="space-y-4 text-[#423226]/90 font-light text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    Arrive with clean, makeup-free eyes (no mascara, eyeliner, or oily skincare)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Lash serums:</strong> stop 2 weeks before the appointment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Mascara:</strong> skip waterproof mascara 48 hours before
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    If you've recently had lash extensions, please wait 4 weeks before booking an appointment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    Inform me of any eye irritants, allergies, or sensitivities before appointment.
                  </span>
                </li>
              </ul>
            </div>

            {/* After Your Appointment */}
            <div className="bg-[#faf8f4] p-7 sm:p-8 border border-[#423226]/10 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#423226]/10">
                <div className="w-9 h-9 bg-[#e2d7c5]/60 flex items-center justify-center text-[#624a37] shrink-0">
                  <Sparkles size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg uppercase tracking-[0.15em] text-[#2c221a] font-medium">
                  After Your Appointment
                </h3>
              </div>

              <ul className="space-y-4 text-[#423226]/90 font-light text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Keep Them Dry:</strong> Do NOT get your lashes wet for the first 24hrs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Lash curler:</strong> DO NOT use an at-home curler for the entirety of your lashes (will increase risk of lashes breaking)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Avoid Oil/ Waterproof Makeup:</strong> Avoid oil-based products for the entirety of your lift; cleansers, makeup (regular mascara is okay occasionally), etc.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Apply Take Home Treatment:</strong> Apply nourishing treatment or lash serum every morning or night.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Brush Daily:</strong> Brush your lashes throughout the day every day.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">No Sleeping on Lashes:</strong> Avoid sleeping directly on your lashes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">Avoid Sun Exposure:</strong> Avoid direct sunlight, sunbeds, saunas, steam rooms, and bodies of water for 48 hours.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#624a37] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-medium text-[#2c221a]">No Touching:</strong> Avoid excessive touching or rubbing of the area for the first 24 hrs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="bg-[#f0eadd] p-8 md:p-10 border border-[#423226]/15 text-center space-y-6"
        >
          <p className="text-[#2c221a] serif italic text-xl md:text-2xl">
            Have questions about preparing for your upcoming service?
          </p>
          <p className="text-[#423226]/80 font-light leading-relaxed max-w-2xl mx-auto">
            Feel free to call or text anytime if you are unsure about any skincare ingredients, medications, or aftercare steps!
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:3852386209"
              className="px-8 py-3.5 bg-[#423226] text-[#faf8f4] text-xs uppercase tracking-[0.2em] hover:bg-[#2c221a] transition-colors w-full sm:w-auto text-center"
            >
              Call or Text (385) 238-6209
            </a>
            <button
              type="button"
              onClick={onBookNow}
              className="px-8 py-3.5 border border-[#423226] text-[#423226] text-xs uppercase tracking-[0.2em] hover:bg-[#423226] hover:text-[#faf8f4] transition-colors w-full sm:w-auto text-center cursor-pointer"
            >
              Book Appointment
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
