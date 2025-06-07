import React from "react";
import HeroSection from '@/components/all/hero-section';

const highlights = [
  {
    title: "HD Voice Technology",
    desc: "Our platform uses advanced HD voice technology to ensure every call is crisp, clear, and free from noise or distortion.",
  },
  {
    title: "Global Reliability",
    desc: "With robust infrastructure and multiple data centers, we deliver reliable voice connectivity for your business, wherever you are.",
  },
  {
    title: "Zero Downtime",
    desc: "Our redundant systems and proactive monitoring ensure your calls are always connected, 24/7.",
  },
];

const VoiceQuality = () => {
  return (
    <>
      <HeroSection
        title="Voice Quality"
        description="Experience crystal clear voice quality and reliability with Infonoble."
      />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h3 className="font-bold text-2xl mb-8 text-[hsl(var(--primary))] text-center">Why Our Voice Quality Stands Out</h3>
        <ul className="flex flex-col gap-8">
          {highlights.map((h, i) => (
            <li key={i} className="bg-white/80 backdrop-blur-xl rounded-xl shadow p-6 border border-[hsl(var(--border))]">
              <h4 className="font-bold text-lg mb-1 text-[hsl(var(--foreground))]">{h.title}</h4>
              <p className="text-[hsl(var(--muted-foreground))]">{h.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default VoiceQuality;