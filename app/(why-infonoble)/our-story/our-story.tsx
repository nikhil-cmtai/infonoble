import React from "react";
import HeroSection from '@/components/all/hero-section';
import { Award, Rocket, Star, Users, TrendingUp } from "lucide-react";

const milestones = [
  {
    year: "2018",
    title: "Founded in Dubai",
    desc: "Infonoble was born from a simple idea: to empower businesses in the GCC with world-class customer engagement. Our founders, driven by passion and a vision for digital transformation, set out to build something truly impactful.",
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    extra: "First office opened in Dubai Internet City.",
  },
  {
    year: "2020",
    title: "First 100 Clients",
    desc: "Despite global challenges, our commitment to service and innovation helped us reach our first 100 happy clients. Each partnership taught us, inspired us, and made us stronger.",
    icon: <Award className="w-6 h-6 text-cyan-500" />,
    extra: "Launched our first cloud-based contact center solution.",
  },
  {
    year: "2022",
    title: "Team Growth",
    desc: "Our team grew to 50+ passionate professionals, united by a shared mission to deliver excellence. We expanded our presence across the GCC and fostered a culture of learning and growth.",
    icon: <Users className="w-6 h-6 text-green-500" />,
    extra: "Opened new offices in Abu Dhabi and Riyadh.",
  },
  {
    year: "2023",
    title: "AI & Omnichannel Expansion",
    desc: "We launched AI-powered analytics and omnichannel support, empowering businesses to connect with their customers like never before. Our platform became smarter, faster, and more reliable.",
    icon: <Rocket className="w-6 h-6 text-indigo-500" />,
    extra: "Recognized as a top innovator in the region.",
  },
  {
    year: "2024",
    title: "Scaling New Heights",
    desc: "With 500+ clients and a growing global footprint, Infonoble continues to set new benchmarks in customer experience. Our journey is just beginning.",
    icon: <TrendingUp className="w-6 h-6 text-pink-500" />,
    extra: "Launched operations in Europe and Southeast Asia.",
  },
];

const OurStory = () => {
  return (
    <>
      <HeroSection
        title="Our Story"
        description="From a bold idea in Dubai to a leading force in customer engagement—discover the journey, the people, and the passion behind Infonoble."
      />
      {/* Tagline/Stat */}
      <section className="max-w-2xl mx-auto px-4 mt-4 mb-8 text-center">
        <div className="inline-block bg-cyan-100 text-cyan-800 font-semibold px-4 py-2 rounded-full text-base shadow">
          Trusted by 500+ businesses across 7 countries
        </div>
      </section>
      {/* Intro */}
      <section className="max-w-2xl mx-auto px-4 mb-12 text-center">
        <p className="text-xl text-[hsl(var(--muted-foreground))] font-medium">
          Infonoble&apos;s journey is a story of vision, innovation, and relentless pursuit of excellence.<br />
          From our first office in Dubai to a global presence, we&apos;ve always believed in the power of technology to transform businesses and lives. Every milestone is a testament to our team&apos;s passion and our clients&apos; trust.
        </p>
      </section>
      {/* Timeline */}
      <section className="relative max-w-3xl mx-auto px-4 pb-24">
        {/* Decorative background blob */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-100 opacity-30 rounded-full blur-3xl pointer-events-none z-0" />
        <ol className="relative z-10">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(var(--primary))] to-cyan-200 rounded-full z-0" />
          {milestones.map((m, i) => (
            <li key={i} className="mb-16 flex items-start relative z-10">
              {/* Year + Icon */}
              <div className="flex flex-col items-center mr-8 z-10">
                <span className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg border-4 border-[hsl(var(--primary))] text-[hsl(var(--primary))] text-2xl font-bold mb-2 relative">
                  {m.year}
                  {/* Icon attached to the circle */}
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full p-1 shadow border border-yellow-300">
                    {m.icon}
                  </span>
                </span>
              </div>
              {/* Card */}
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-[hsl(var(--border))] p-8 min-w-0 flex-1">
                <h4 className="font-extrabold text-2xl mb-2 text-[hsl(var(--primary))]">{m.title}</h4>
                <p className="text-[hsl(var(--muted-foreground))] text-lg mb-2">{m.desc}</p>
                <div className="text-base text-cyan-600 font-semibold italic">{m.extra}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* What's Next / Mission */}
      <section className="max-w-2xl mx-auto px-4 pb-24 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--primary))] mb-4">Our Mission</h3>
        <p className="text-lg text-[hsl(var(--muted-foreground))] mb-4">
          To empower every business with the tools, technology, and support they need to deliver unforgettable customer experiences—today and tomorrow.
        </p>
        <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 py-3 rounded-full shadow-lg">
          The journey continues...
        </div>
      </section>
      
    </>
  );
};

export default OurStory;