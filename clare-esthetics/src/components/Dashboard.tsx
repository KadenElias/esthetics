import { motion } from 'motion/react';
import { Appointment, Service } from '../lib/firebase';
import { Calendar, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface DashboardProps {
  appointments: Appointment[];
  services: Service[];
}

export default function Dashboard({ appointments, services }: DashboardProps) {
  const getService = (id: string) => services.find(s => s.id === id);

  return (
    <section className="py-40 relative min-h-screen">
      <div className="ambient-brown" />
      <div className="ambient-tan" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="serif text-6xl text-[#2c221a] mb-4 italic">My Reservations</h2>
          <p className="text-stone-600 font-medium">Harmony, earth rituals, and skin health, organized for you with Clare.</p>
        </div>

        {appointments.length === 0 ? (
          <div className="text-center py-24 frosted rounded-[4rem] border-stone-200/70">
            <Calendar className="mx-auto w-16 h-16 text-[#423226]/25 mb-6" />
            <p className="text-stone-500 italic serif text-2xl">No upcoming rituals scheduled.</p>
            <button className="btn-secondary mt-8">Begin My Skin Journey</button>
          </div>
        ) : (
          <div className="space-y-8">
            {appointments.map((app) => {
              const service = getService(app.serviceId);
              const dateObj = new Date(app.date);
              
              return (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="frosted p-10 rounded-[3rem] flex flex-col md:flex-row md:items-center justify-between gap-8 border-stone-200/80 group hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-center gap-10">
                    {service && (
                      <div className="frosted-earth p-2 rounded-3xl shrink-0 group-hover:rotate-1 transition-transform">
                        <img src={service.imageUrl} className="w-24 h-24 object-cover rounded-[1.2rem]" alt={service.name} />
                      </div>
                    )}
                    <div>
                      <h3 className="serif text-3xl mb-4 text-[#2c221a] italic">{service?.name || "Clare's Signature Ritual"}</h3>
                      <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-stone-600">
                        <span className="flex items-center gap-2 text-[#7d6049]"><Calendar size={14} /> {dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        <span className="flex items-center gap-2 text-[#7d6049]"><Clock size={14} /> {dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-6 md:pt-0 border-t md:border-t-0 border-stone-200/60">
                    <div className={`px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-3 ${
                      app.status === 'confirmed' ? 'bg-[#423226] text-[#f7f5f0]' :
                      app.status === 'pending' ? 'bg-[#ece5d8] text-[#554634] border border-[#d6caba]' :
                      'bg-stone-200 text-stone-500'
                    }`}>
                      {app.status === 'confirmed' ? <CheckCircle2 size={12} /> : app.status === 'pending' ? <Clock size={12} /> : <AlertCircle size={12} />}
                      {app.status}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
