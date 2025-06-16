import React from 'react';
import HeroSection from '@/components/all/hero-section';
import CTASection from '@/components/all/cta-section';
import { PhoneCall, ShieldCheck, Cloud, Settings, Users, Zap, CheckCircle, MonitorSmartphone } from 'lucide-react';
import Image from 'next/image';

// --- Content for IP PBX ---
const whyIntro =
  "NobleIP-PBX is a private branch exchange (telephone switching system within a business) that routes call between VoIP (voice over Internet Protocol or IP) users on local lines while enabling all users to share a limited number of external phone lines. NobleIP-PBX feature enables organizations to leverage their managed intranet to cut long-distance costs and get the benefits of a single network for voice and data. The monthly savings with NobleIP-PBX are considerable. If you have many locations, you may effortlessly link phone systems and make free phone calls between them. Adding users with NobleIP-PBX is simple; there is no need to update or purchase new gear.";

const whyPoints = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-[hsl(var(--primary))]" />,
    title: "Secure & Reliable",
    desc: "Leverage your managed intranet for secure, cost-effective communication.",
  },
  {
    icon: <Cloud className="w-7 h-7 text-cyan-500" />,
    title: "Cloud or On-Premise",
    desc: "Available as both a physical device and a software platform.",
  },
  {
    icon: <PhoneCall className="w-7 h-7 text-orange-500" />,
    title: "Effortless Scalability",
    desc: "Easily add users and locations without new hardware.",
  },
  {
    icon: <Settings className="w-7 h-7 text-[hsl(var(--secondary))]" />,
    title: "Unified Network",
    desc: "Benefit from a single network for voice and data across all sites.",
  },
];

const features = [
  {
    icon: <Settings className="w-8 h-8 text-[hsl(var(--primary))]" />,
    title: "Smart IVRs & Call Routing",
    desc: "Advanced call management with IVRs, routing, and transfer features.",
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-[hsl(var(--secondary))]" />,
    title: "Remote Support & Hot Desking",
    desc: "Support for remote work, hot desking, and mobile extensions.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[hsl(var(--accent))]" />,
    title: "Call Recording & Monitoring",
    desc: "Monitor, record, and analyze calls for quality assurance.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    title: "Conferencing & Collaboration",
    desc: "Built-in conferencing, call queuing, and collaboration tools.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-500" />,
    title: "Voicemail & Inbound/Outbound Routes",
    desc: "Flexible voicemail, inbound, and outbound call management.",
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "Contact Manager & Groups",
    desc: "Manage contacts, ring groups, and least cost routing easily.",
  },
];

const steps = [
  {
    icon: <Users className="w-7 h-7 text-[hsl(var(--primary))]" />,
    title: "Connect Extensions",
    desc: "Link all your phone extensions and users to the PBX system.",
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-[hsl(var(--secondary))]" />,
    title: "Configure Routing",
    desc: "Set up call routing, IVRs, and rules for seamless communication.",
  },
  {
    icon: <PhoneCall className="w-7 h-7 text-orange-500" />,
    title: "Enable Features",
    desc: "Activate call recording, conferencing, and remote support.",
  },
  {
    icon: <Cloud className="w-7 h-7 text-cyan-500" />,
    title: "Scale Effortlessly",
    desc: "Add users, locations, and features as your business grows.",
  },
];

const integrations = [
  { img: "/images/crm-icon.png", label: "CRM Systems" },
  { img: "/images/email-icon.png", label: "Email Platforms" },
  { img: "/images/whatsapp-icon.png", label: "WhatsApp" },
  { img: "/images/social-icon.png", label: "Social Media" },
  { img: "/images/chatbot-icon.png", label: "Chatbots" },
];

const NobleIPPBX = () => {
  return (
    <div className="bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--secondary)/0.07)] to-[hsl(var(--accent)/0.10)]">
      {/* 1. Hero Section */}
      <HeroSection
        title="NobleIP-PBX"
        description="A scalable, secure, and cost-effective business phone system for every company. Connect, manage, and optimize all your communications with ease—on-premise or in the cloud."
        imageSrc="/products/ip-pbx.jpg"
      />

      {/* 2. Why Choose NobleIP-PBX */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--primary))] mb-4">Why NobleIP-PBX?</h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">{whyIntro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--secondary)/0.10)] border border-[hsl(var(--border))]">
                  <div className="p-2 rounded-lg bg-[hsl(var(--primary)/0.08)]">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1 text-[hsl(var(--primary))]">{point.title}</h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/ip-pbx-why.png"
              alt="Why NobleIP-PBX"
              className="rounded-2xl object-contain w-full h-auto"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* 3. Key Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[hsl(var(--primary))]">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-white/80 to-[hsl(var(--secondary)/0.15)] backdrop-blur-xl rounded-2xl shadow-xl p-10 flex flex-col items-center text-center border border-[hsl(var(--border))] transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-[hsl(var(--foreground))]">{item.title}</h3>
              <p className="text-[hsl(var(--muted-foreground))]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. How It Works Stepper */}
      <section className="relative max-w-5xl mx-auto px-4 py-20">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-100 opacity-30 rounded-full blur-3xl pointer-events-none z-0" />
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[hsl(var(--primary))]">How It Works</h2>
        <p className="text-lg text-[hsl(var(--muted-foreground))] text-center mb-12 max-w-2xl mx-auto">
          See how NobleIP-PBX transforms your business communication with seamless integration and scalability.
        </p>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white text-2xl font-bold shadow-lg mb-4 border-4 border-white">
                {i + 1}
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/70 backdrop-blur-md shadow mb-3">
                {step.icon}
              </div>
              <h4 className="font-bold text-lg mb-1 text-[hsl(var(--primary))]">{step.title}</h4>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-2">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-16 h-1 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] -translate-y-1/2 z-0"></div>
              )}
              {i < steps.length - 1 && (
                <div className="block md:hidden w-1 h-10 bg-gradient-to-b from-[hsl(var(--primary))] to-[hsl(var(--secondary))] mx-auto"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. Integrations Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[hsl(var(--primary))]">Seamless Integrations</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {integrations.map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--secondary)/0.15)] backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-[hsl(var(--border))] w-40">
              <Image src={item.img} alt={item.label} className="w-16 h-16 mb-2 object-contain" width={500} height={500} />
              <h3 className="font-bold text-lg text-[hsl(var(--foreground))]">{item.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA Section */}
      <CTASection />
    </div>
  );
};

export default NobleIPPBX; 