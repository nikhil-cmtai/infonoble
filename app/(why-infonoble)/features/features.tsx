import React from "react";
import HeroSection from "@/components/all/hero-section";
import { Phone, MessageSquare, Puzzle, Rocket, Cloud, Mic } from "lucide-react";

const features = [
  {
    title: "Crystal Clear Calls",
    icon: <Phone className="w-7 h-7 text-[hsl(var(--primary))]" />,
    desc: "Enjoy HD voice quality and reliable connections for every customer conversation.",
  },
  {
    title: "Omnichannel Support",
    icon: <MessageSquare className="w-7 h-7 text-[hsl(var(--secondary))]" />,
    desc: "Manage calls, chats, and emails from a single, unified dashboard.",
  },
  {
    title: "15+ CRM Integrations",
    icon: <Puzzle className="w-7 h-7 text-orange-400" />,
    desc: "Connect with your favorite CRMs and tools for a unified workflow.",
  },
  {
    title: "Automate with Workflows",
    icon: <Rocket className="w-7 h-7 text-purple-400" />,
    desc: "Automate repetitive tasks and boost efficiency with smart workflows and chatbots.",
  },
  {
    title: "Cloud-based",
    icon: <Cloud className="w-7 h-7 text-cyan-500" />,
    desc: "Access your contact center from anywhere, anytime, with secure cloud technology.",
  },
  {
    title: "High-quality Voice",
    icon: <Mic className="w-7 h-7 text-pink-500" />,
    desc: "Industry-leading voice clarity and uptime for all your business calls.",
  },
];

export default function Features() {
  return (
    <>
      <HeroSection
        title="Features"
        description="Infonoble's features are the best in the industry. We use the latest technology to ensure that your calls are crystal clear."
      />
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-2xl rounded-2xl shadow-xl p-8 flex flex-col items-start gap-4 border border-[hsl(var(--border))] transition-colors duration-300 hover:text-[hsl(var(--primary))]"
          >
            <div>{f.icon}</div>
            <h3 className="font-bold text-xl">{f.title}</h3>
            <p className="text-[hsl(var(--muted-foreground))]">{f.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}