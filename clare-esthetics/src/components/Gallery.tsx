import { ChevronLeft, ChevronRight, Grid, Maximize2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

const GALLERY_IMAGES = [
  {
    url: '/assets/aistudio/IG_8.12.2025_689bb2d274f331.68074535_d52ef2ff.jpg',
    title: 'Brow Full Package',
    subtitle: 'Lamination + Shaping + Tint',
    size: 'tall',
  },
  {
    url: '/assets/aistudio/2025-08-12_14-25-57_1755034430_d700397c.webp?v=centered',
    title: 'Lash Package & Brow Sculpt',
    subtitle: 'Lash Lift + Tint',
    size: 'tall',
  },
  {
    url: '/src/assets/images/service_botanical_glow_1792598042305.jpg',
    title: 'Signature Facial Glow',
    subtitle: 'Custom 60-Minute Facial',
    size: 'medium',
  },
  {
    url: '/src/assets/images/nano_infusion_facial_1792717052832.jpg',
    title: 'The Silk Infusion Facial',
    subtitle: 'Nano Infusion Texture & Tone',
    size: 'tall',
  },
  {
    url: '/src/assets/images/dermaplane_treatment_1792717041325.jpg',
    title: 'Dermaplane Facial',
    subtitle: 'Smooth Canvas & Exfoliation',
    size: 'medium',
  },
  {
    url: '/src/assets/images/procell_microchannel_1792717064945.jpg',
    title: 'The Skin Perfecting Facial',
    subtitle: 'ProCell Microchanneling',
    size: 'tall',
  },
];

const AUTO_SLIDE_INTERVAL_MS = 4500;

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isHovering, setIsHovering] = useState(false);

  // Fullscreen lightbox modal state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');

  const goToNextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Automatic rotation timer for the main slider
  useEffect(() => {
    if (isHovering || selectedIndex !== null) return;

    const timer = window.setInterval(() => {
      goToNextSlide();
    }, AUTO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [currentSlide, isHovering, selectedIndex, goToNextSlide]);

  // Lightbox modal navigation
  const handleModalPrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (selectedIndex === null) return;
      setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    },
    [selectedIndex]
  );

  const handleModalNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (selectedIndex === null) return;
      setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length);
    },
    [selectedIndex]
  );

  // Keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft' && viewMode === 'single') handleModalPrev();
      if (e.key === 'ArrowRight' && viewMode === 'single') handleModalNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, viewMode, handleModalPrev, handleModalNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  const openModal = (index: number, mode: 'single' | 'grid' = 'single') => {
    setSelectedIndex(index);
    setViewMode(mode);
  };

  const activeImage = GALLERY_IMAGES[currentSlide];

  return (
    <section
      id="gallery"
      className="py-20 bg-[#2b2119] text-[#f7f5f0] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.2em] text-[#d8ccb8] font-medium mb-4 block"
            >
              Client Transformations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-light tracking-tight leading-[1.1]"
            >
              Real results, <br />
              <span className="italic font-normal text-[#d8ccb8]">radiant confidence.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start md:items-end gap-3"
          >
            <p className="text-[#d8ccb8]/80 font-light max-w-sm text-sm leading-relaxed md:text-right">
              Every treatment is customized to your unique features and skin goals. Click through or let the gallery glide through real studio transformations.
            </p>
            <button
              onClick={() => openModal(currentSlide, 'grid')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#f7f5f0] hover:text-[#d8ccb8] transition-colors border-b border-[#d8ccb8]/40 pb-1 cursor-pointer"
            >
              <Grid size={14} />
              View All Results ({GALLERY_IMAGES.length})
            </button>
          </motion.div>
        </div>

        {/* Single-Image Rotating Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main Stage Frame (Slightly More Compact) */}
          <div className="relative mx-auto max-w-xl rounded-3xl overflow-hidden bg-[#382b21] border border-[#f7f5f0]/10 shadow-2xl">
            <div className="relative aspect-[4/4.3] sm:aspect-[4/4] w-full overflow-hidden bg-[#1e1711]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => openModal(currentSlide, 'single')}
                  className="w-full h-full relative cursor-pointer group"
                >
                  <img
                    src={activeImage.url}
                    alt={activeImage.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Subtle Bottom Vignette for Caption Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a130e]/90 via-[#1a130e]/20 to-transparent pointer-events-none" />

                  {/* Expand Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(currentSlide, 'single');
                    }}
                    aria-label="Expand full image"
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#2b2119]/70 backdrop-blur-md border border-[#f7f5f0]/20 flex items-center justify-center text-[#f7f5f0] hover:bg-[#2b2119] transition-colors cursor-pointer"
                  >
                    <Maximize2 size={15} />
                  </button>

                  {/* Slide Counter Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-md bg-[#2b2119]/70 backdrop-blur-md border border-[#f7f5f0]/15 text-xs uppercase tracking-[0.2em] text-[#d8ccb8]">
                    {currentSlide + 1} / {GALLERY_IMAGES.length}
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#d8ccb8] mb-1 font-medium">
                        {activeImage.subtitle}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-serif font-light text-[#f7f5f0]">
                        {activeImage.title}
                      </h3>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-[#d8ccb8]/80 group-hover:text-[#f7f5f0] transition-colors">
                      Click to enlarge
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Left / Right Click Controls Over Image */}
              <button
                type="button"
                onClick={goToPrevSlide}
                aria-label="Previous result"
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#2b2119]/75 hover:bg-[#2b2119] text-[#f7f5f0] border border-[#f7f5f0]/20 backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={goToNextSlide}
                aria-label="Next result"
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#2b2119]/75 hover:bg-[#2b2119] text-[#f7f5f0] border border-[#f7f5f0]/20 backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Centered Dot Progress Bar */}
          <div
            className="mt-6 flex items-center justify-center gap-2.5"
            role="tablist"
            aria-label="Select result slide"
          >
            {GALLERY_IMAGES.map((img, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show ${img.title}`}
                  onClick={() => goToSlide(idx)}
                  className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'w-9 bg-[#d8ccb8]'
                      : 'w-2.5 bg-[#f7f5f0]/25 hover:bg-[#f7f5f0]/50'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#1a130e]/95 backdrop-blur-xl flex flex-col"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Modal Header */}
            <div
              className="flex justify-between items-center p-6 border-b border-[#f7f5f0]/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-sm font-light tracking-widest uppercase text-[#d8ccb8]">
                {viewMode === 'single' ? (
                  <span>
                    {selectedIndex + 1} / {GALLERY_IMAGES.length}
                  </span>
                ) : (
                  <span>All Results ({GALLERY_IMAGES.length})</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setViewMode(viewMode === 'single' ? 'grid' : 'single')}
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#f7f5f0] hover:text-[#d8ccb8] transition-colors bg-[#f7f5f0]/10 px-4 py-2 rounded-full cursor-pointer"
                >
                  <Grid size={14} />
                  {viewMode === 'single' ? 'Grid View' : 'Single View'}
                </button>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="w-10 h-10 rounded-full bg-[#f7f5f0]/10 flex items-center justify-center text-[#f7f5f0] hover:bg-[#f7f5f0]/20 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto relative flex items-center justify-center p-4 md:p-12">
              {viewMode === 'single' ? (
                <div
                  className="relative w-full max-w-5xl h-full flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Prev Button */}
                  <button
                    onClick={handleModalPrev}
                    className="absolute left-0 md:-left-12 z-10 w-12 h-12 rounded-full bg-[#2b2119]/80 border border-[#f7f5f0]/10 flex items-center justify-center text-[#f7f5f0] hover:bg-[#f7f5f0] hover:text-[#2b2119] transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  {/* Image Container */}
                  <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative max-h-[75vh] max-w-full flex flex-col items-center"
                  >
                    <img
                      src={GALLERY_IMAGES[selectedIndex].url}
                      alt={GALLERY_IMAGES[selectedIndex].title}
                      className="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl"
                    />
                    <div className="mt-6 text-center">
                      <p className="text-xs uppercase tracking-[0.15em] text-[#d8ccb8] mb-1">
                        {GALLERY_IMAGES[selectedIndex].subtitle}
                      </p>
                      <h3 className="text-2xl font-serif text-[#f7f5f0] font-light">
                        {GALLERY_IMAGES[selectedIndex].title}
                      </h3>
                    </div>
                  </motion.div>

                  {/* Next Button */}
                  <button
                    onClick={handleModalNext}
                    className="absolute right-0 md:-right-12 z-10 w-12 h-12 rounded-full bg-[#2b2119]/80 border border-[#f7f5f0]/10 flex items-center justify-center text-[#f7f5f0] hover:bg-[#f7f5f0] hover:text-[#2b2119] transition-colors cursor-pointer"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              ) : (
                <div
                  className="w-full max-w-7xl mx-auto h-full overflow-y-auto py-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {GALLERY_IMAGES.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => {
                          setSelectedIndex(idx);
                          setViewMode('single');
                        }}
                        className={`group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                          selectedIndex === idx ? 'border-[#d8ccb8]' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={img.url}
                          alt={img.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2b2119]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <p className="text-[10px] uppercase tracking-[0.15em] text-[#d8ccb8] mb-1">
                            {img.subtitle}
                          </p>
                          <h4 className="text-lg font-serif text-[#f7f5f0] font-light">
                            {img.title}
                          </h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
