'use client'

import { useEffect, useState } from 'react';
import { ThumbsUp, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <ThumbsUp className="w-8 h-8 text-orange-500 mb-2" />,
    title: 'Customer Satisfaction',
    desc: '98%+ CSAT scores from our clients across the GCC.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-500 mb-2" />,
    title: 'Secure & Reliable',
    desc: 'Enterprise-grade security and 99.99% uptime for your peace of mind.'
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-500 mb-2" />,
    title: 'Fast & Easy Setup',
    desc: 'Get started in minutes with our intuitive, cloud-based platform.'
  },
];

export default function BannerSection() {
  const [show, setShow] = useState([false, false, false]);
  useEffect(() => {
    features.forEach((_, i) => {
      setTimeout(() => {
        setShow(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 200 + i * 200);
    });
  }, []);

  return (
    <section className="w-full bg-[hsl(var(--background))] px-0 py-14 relative overflow-hidden">
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-[-15%] top-[-15%] w-[60vw] h-[60vw] bg-gradient-radial from-orange-100 via-white/60 to-transparent opacity-60" />
        <div className="absolute right-[-10%] bottom-[-10%] w-[40vw] h-[40vw] bg-gradient-radial from-blue-100 via-white/60 to-transparent opacity-50" />
      </div>
      {/* Animated Blobs */}
      <div className="absolute z-0 top-[10%] left-[10%] w-[180px] h-[180px] bg-orange-200 opacity-30 rounded-full blur-3xl animate-whyblob1" />
      <div className="absolute z-0 bottom-[12%] right-[12%] w-[140px] h-[140px] bg-blue-200 opacity-25 rounded-full blur-2xl animate-whyblob2" />
      <div className="absolute z-0 top-[40%] right-[20%] w-[120px] h-[120px] bg-purple-200 opacity-20 rounded-full blur-2xl animate-whyblob3" />
      
      <style jsx>{`
        @keyframes whyblob1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-24px) scale(1.08); }
        }
        @keyframes whyblob2 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(24px) scale(1.05); }
        }
        @keyframes whyblob3 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(18px) scale(1.12) rotate(6deg); }
        }
        .animate-whyblob1 { animation: whyblob1 14s ease-in-out infinite; }
        .animate-whyblob2 { animation: whyblob2 18s ease-in-out infinite; }
        .animate-whyblob3 { animation: whyblob3 16s ease-in-out infinite; }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-2 text-center">
            Why <span className="text-orange-500">Choose Us?</span>
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mb-4 text-center">
            We help successful companies to reach their customers from anywhere with a single interface that brings value in your conversations.
          </p>
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`flex flex-col items-start bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 hover:shadow-2xl border border-[hsl(var(--border))] transition group
                  ${show[i] ? 'opacity-100 scale-100 rotate-0 translate-y-0' : 'opacity-0 scale-90 rotate-3 translate-y-8'}
                  duration-700 ease-out`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {f.icon}
                <span className="font-bold text-lg text-[hsl(var(--foreground))] mb-1">{f.title}</span>
                <span className="text-[hsl(var(--muted-foreground))] text-base">{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}   
