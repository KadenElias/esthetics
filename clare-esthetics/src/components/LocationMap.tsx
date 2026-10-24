import { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Car, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';

// Studio Coordinates: 28410 Old Town Front St #102, Temecula, CA 92590
const STUDIO_COORDINATES = { lat: 33.49661, lng: -117.15118 };
const STUDIO_ADDRESS = '28410 Old Town Front St #102, Temecula, CA 92590';
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STUDIO_ADDRESS)}`;

function MapContent() {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoOpen, setInfoOpen] = useState(true);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-[#423226]/10">
      <Map
        defaultCenter={STUDIO_COORDINATES}
        defaultZoom={17}
        mapId="DEMO_MAP_ID"
        gestureHandling="cooperative"
        disableDefaultUI={false}
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        className="w-full h-full"
      >
        <AdvancedMarker
          ref={markerRef}
          position={STUDIO_COORDINATES}
          title="Esthetics by Clare - Skin Sanctuary"
          onClick={() => setInfoOpen(true)}
        >
          <Pin
            background="#423226"
            borderColor="#f7f5f0"
            glyphColor="#d8ccb8"
            scale={1.25}
          />
        </AdvancedMarker>

        {infoOpen && marker && (
          <InfoWindow
            anchor={marker}
            onCloseClick={() => setInfoOpen(false)}
            maxWidth={300}
          >
            <div className="p-1 text-[#1e1713]">
              <h5 className="font-serif text-base font-semibold text-[#1e1713] leading-snug">
                Esthetics by Clare
              </h5>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                28410 Old Town Front St #102<br />Temecula, CA 92590
              </p>
              <div className="mt-3 pt-2 border-t border-stone-200 flex items-center justify-between">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#423226] hover:text-[#624a37] underline decoration-[#423226]/40 underline-offset-2"
                >
                  <Navigation size={12} />
                  Get Google Maps Directions
                </a>
              </div>
            </div>
          </InfoWindow>
        )}
      </Map>

      {/* Floating Action Badge on Map */}
      <div className="absolute bottom-4 left-4 z-10 pointer-events-auto">
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 bg-[#1e1713]/90 hover:bg-[#1e1713] text-[#f7f5f0] text-xs font-medium rounded-2xl backdrop-blur-md shadow-lg border border-white/10 transition-all hover:scale-[1.02]"
        >
          <Navigation size={14} className="text-[#d8ccb8]" />
          <span>Open in Google Maps</span>
          <ExternalLink size={12} className="text-[#d8ccb8]/60" />
        </a>
      </div>
    </div>
  );
}

export default function LocationMap() {
  const [copied, setCopied] = useState(false);
  const apiKey = (import.meta.env?.VITE_GOOGLE_MAPS_API_KEY as string) || 'AIzaSyC2DaK7hF4y4V-NuPuJ5ThYAzB9M8TZJwA';

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="location" className="py-28 relative bg-[#ebe3d5] text-stone-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="serif text-4xl sm:text-5xl font-normal text-[#1e1713] tracking-tight">
            Visit Our Location
          </h2>
          <p className="mt-4 text-stone-600 font-medium text-sm sm:text-base leading-relaxed">
            Conveniently situated in historic Old Town Temecula, offering private, tranquil clinical treatments in an intimate boutique setting.
          </p>
        </div>

        {/* Content Grid: Map + Studio Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Map Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {apiKey ? (
              <APIProvider apiKey={apiKey} libraries={['marker']}>
                <MapContent />
              </APIProvider>
            ) : (
              <div className="w-full h-[450px] rounded-3xl bg-stone-200/80 flex flex-col items-center justify-center p-6 text-center border border-stone-300">
                <MapPin size={32} className="text-stone-400 mb-3" />
                <p className="text-sm font-medium text-stone-600">Google Maps API Key configuration pending.</p>
              </div>
            )}
          </div>

          {/* Details & Directions Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-stone-200/80 shadow-xl">
              <div>
                <h3 className="serif text-2xl sm:text-3xl text-[#1e1713] mb-6">
                  Esthetics by Clare
                </h3>

                {/* Address Box */}
                <div className="p-4 rounded-2xl bg-[#f7f5f0] border border-stone-200/80 mb-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-[#423226] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-stone-900 text-sm">Suite #102</div>
                        <div className="text-stone-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                          28410 Old Town Front St #102<br />
                          Temecula, CA 92590
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={copyAddress}
                      title="Copy Address"
                      className="p-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 transition-all cursor-pointer shadow-2xs shrink-0"
                    >
                      {copied ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
                    </button>
                  </div>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-[11px] font-medium text-emerald-700 flex items-center gap-1.5"
                    >
                      <Check size={12} /> Address copied to clipboard
                    </motion.div>
                  )}
                </div>

                {/* Practical Studio Notes */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3.5 text-xs sm:text-sm text-stone-700">
                    <div className="p-2 rounded-xl bg-[#423226]/5 text-[#423226] shrink-0 mt-0.5">
                      <Clock size={16} />
                    </div>
                    <div>
                      <strong className="block text-stone-900 font-semibold text-xs uppercase tracking-wider mb-0.5">Arrival Policy</strong>
                      <span>Please arrive on time for your scheduled appointment. Arriving 10 minutes or later after your scheduled appointment time may result in cancellation, and your appointment will be subsequently rescheduled and considered a No-Show.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row gap-3">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary py-3 px-6 text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm text-center"
                >
                  <Navigation size={14} className="text-[#d8ccb8]" />
                  <span>Get Directions</span>
                </a>
                <button
                  onClick={copyAddress}
                  className="sm:w-auto px-5 py-3 rounded-full border border-stone-300 hover:border-[#423226] text-stone-700 hover:text-[#423226] text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer bg-white"
                >
                  {copied ? 'Copied' : 'Copy Address'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
