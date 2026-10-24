import { useEffect, useState } from 'react';
import { Service } from './lib/firebase';
import { getServices } from './services/dataService';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import VagaroWidget from './components/VagaroWidget';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import LocationMap from './components/LocationMap';
import PoliciesPage from './components/PoliciesPage';
import PrePostCarePage from './components/PrePostCarePage';
import Footer from './components/Footer';

export type View = 'home' | 'policies' | 'pre-post-care' | 'booking';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getServices().then(setServices).catch(() => {});
  }, []);

  const goToBooking = () => setView('booking');

  return (
    <div className="min-h-screen relative bg-[#f7f5f0] text-stone-800">
      <Navbar 
        currentView={view}
        onNavigate={setView} 
      />
      
      {view === 'home' && (
        <main>
          <Hero onBookNow={goToBooking} />
          <About onBookNow={goToBooking} />
          <Services services={services} onBook={goToBooking} />
          <Gallery />
          <Testimonials />
          <FAQ onBookNow={goToBooking} />
          <LocationMap />
        </main>
      )}

      {view === 'booking' && (
        <main>
          <VagaroWidget
            onBackHome={() => setView('home')}
          />
        </main>
      )}

      {view === 'policies' && (
        <main>
          <PoliciesPage
            onBackHome={() => setView('home')}
            onBookNow={goToBooking}
          />
        </main>
      )}

      {view === 'pre-post-care' && (
        <main>
          <PrePostCarePage
            onBackHome={() => setView('home')}
            onBookNow={goToBooking}
          />
        </main>
      )}

      <Footer 
        onNavigate={setView}
        onOpenBooking={goToBooking}
      />
    </div>
  );
}
