import React from "react";
import HeroSection from '@/components/all/hero-section';

const milestones = [
  {
    year: "2018",
    title: "Founded in Dubai",
    desc: "Infonoble was founded with a vision to revolutionize customer engagement in the GCC.",
  },
  {
    year: "2020",
    title: "First 100 Clients",
    desc: "We reached our first 100 happy clients, helping them deliver world-class customer experiences.",
  },
  {
    year: "2023",
    title: "AI & Omnichannel Expansion",
    desc: "Launched AI-powered analytics and omnichannel support, empowering businesses to grow further.",
  },
];

const OurStory = () => {
  return (
    <>
      <HeroSection
        title="Our Story"
        description="From humble beginnings to industry leader—discover the journey of Infonoble."
      />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h3 className="font-bold text-2xl mb-8 text-[hsl(var(--primary))] text-center">Our Journey</h3>
        <ol className="relative border-l-2 border-[hsl(var(--primary))] ml-4">
          {milestones.map((m, i) => (
            <li key={i} className="mb-12 ml-6">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center text-white font-bold shadow">
                {m.year}
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-xl shadow p-6 border border-[hsl(var(--border))]">
                <h4 className="font-bold text-lg mb-1 text-[hsl(var(--foreground))]">{m.title}</h4>
                <p className="text-[hsl(var(--muted-foreground))]">{m.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default OurStory;