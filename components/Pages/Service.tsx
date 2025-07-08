'use client';
import { useEffect, useState } from 'react';
import GlassCard from '../ui/GlassCard';

export default function Services() {
  const [services, setServices] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/services').then(r => r.json()).then(setServices);
  }, []);

  return (
    <section className="py-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-white/80">Some of </span>
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">My Work</span>
          </h2>
          <a href="#" className="bg-gradient-to-r from-cyan-400 via-green-500 to-blue-500 bg-clip-text text-transparent">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <GlassCard key={s.id} title={s.title} description={s.description} image={s.image} isCode={s.isCode} />
          ))}
        </div>
      </div>
    </section>
  );
}
