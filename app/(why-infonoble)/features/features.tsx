import React from "react";
import HeroSection from "@/components/all/hero-section";
import { Phone, MessageSquare, Puzzle, Rocket, Cloud, Mic } from "lucide-react";

const features = [
  {
    title: "Crystal Clear Calls",
    icon: <Phone className="w-10 h-10 text-[hsl(var(--primary))] drop-shadow-md" />,
    desc: "Enjoy HD voice quality and reliable connections for every customer conversation.",
  },
  {
    title: "Omnichannel Support",
    icon: <MessageSquare className="w-10 h-10 text-[hsl(var(--secondary))] drop-shadow-md" />,
    desc: "Manage calls, chats, and emails from a single, unified dashboard.",
  },
  {
    title: "15+ CRM Integrations",
    icon: <Puzzle className="w-10 h-10 text-orange-400 drop-shadow-md" />,
    desc: "Connect with your favorite CRMs and tools for a unified workflow.",
  },
  {
    title: "Automate with Workflows",
    icon: <Rocket className="w-10 h-10 text-purple-400 drop-shadow-md" />,
    desc: "Automate repetitive tasks and boost efficiency with smart workflows and chatbots.",
  },
  {
    title: "Cloud-based",
    icon: <Cloud className="w-10 h-10 text-cyan-500 drop-shadow-md" />,
    desc: "Access your contact center from anywhere, anytime, with secure cloud technology.",
  },
  {
    title: "High-quality Voice",
    icon: <Mic className="w-10 h-10 text-pink-500 drop-shadow-md" />,
    desc: "Industry-leading voice clarity and uptime for all your business calls.",
  },
];

export default function Features() {
  return (
    <>
      <HeroSection
        title="Features"
        description="Infonoble's features are the best in the industry. We use the latest technology to ensure that your calls are crystal clear."
        imageSrc="/features-hero.png"
      />
      {/* Decorative background blob */}
      <div className="relative">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200 via-blue-100 to-purple-100 opacity-40 rounded-full blur-3xl pointer-events-none z-0 animate-pulse" />
        <section className="relative z-10 max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-6 border border-[hsl(var(--border))] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] hover:border-[hsl(var(--primary))] cursor-pointer overflow-hidden"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:animate-spin-slow group-hover:bg-gradient-to-tr group-hover:from-[hsl(var(--primary)/0.10)] group-hover:to-[hsl(var(--secondary)/0.10)]" />
              {/* Floating icon */}
              <div className="relative z-10 mb-2 group-hover:-translate-y-2 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="font-extrabold text-2xl text-[hsl(var(--primary))] group-hover:text-[hsl(var(--secondary))] transition-colors duration-300 text-center drop-shadow-sm">
                {f.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-lg text-center z-10">
                {f.desc}
              </p>
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 rounded-3xl pointer-events-none group-hover:shadow-[0_0_40px_10px_rgba(56,189,248,0.15)] transition-all duration-300" />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}