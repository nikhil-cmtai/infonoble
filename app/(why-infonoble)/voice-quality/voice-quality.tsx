import React from "react";
import HeroSection from '@/components/all/hero-section';
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import CTASection from "@/components/all/cta-section";


const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-cyan-600" />,
    title: "HD Voice Technology",
    desc: "Crystal clear calls with advanced HD codecs.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-cyan-600" />,
    title: "Global Coverage",
    desc: "Reliable connectivity across continents.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-cyan-600" />,
    title: "Zero Downtime",
    desc: "Redundant systems for 24/7 uptime.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-cyan-600" />,
    title: "Real-Time Analytics",
    desc: "Monitor and optimize every call.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-cyan-600" />,
    title: "Seamless CRM Integration",
    desc: "Connect with your favorite tools.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-cyan-600" />,
    title: "Enterprise Security",
    desc: "Your data is always protected.",
  },
];

const VoiceQuality = () => {
  return (
    <>
      <HeroSection
        title="Superior Voice Quality for Call Centers"
        description="Empower your call center with Infonoble's advanced cloud communication platform. Enjoy crystal clear voice quality, 99.9% uptime, and seamless integration with your CRM — all backed by enterprise-grade reliability and real-time analytics."
        imageSrc="/voice.png"
      />


            {/* Image + Text Section */}
            <section className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <Image
            src="/voice-quality-detail.png"
            alt="Crystal Clear Voice"
            width={500}
            height={400}
            className="rounded-2xl shadow-xl object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))]">Crystal Clear, Always Reliable</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Infonoble&rsquo;s voice platform is built for clarity and reliability. Our global infrastructure, advanced codecs, and proactive monitoring ensure your business calls are always sharp and uninterrupted.
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full" />
              <span>HD audio with noise suppression</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full" />
              <span>Global data centers for low latency</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full" />
              <span>24/7 proactive monitoring</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[hsl(var(--primary))]">Why Choose Infonoble Voice?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-2xl border border-[hsl(var(--border))]"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-[hsl(var(--foreground))]">{f.title}</h3>
              <p className="text-[hsl(var(--muted-foreground))]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner Section */}
      <CTASection />
    </>
  );
};

export default VoiceQuality;