import React from 'react';
import HeroSection from '@/components/all/hero-section';
import CTASection from '@/components/all/cta-section';
import { Users, Settings, PhoneCall, Zap, MonitorSmartphone, ShieldCheck, MessageCircle, Star, Cloud, CheckCircle } from 'lucide-react';
import ProductsSection from '@/components/home/products-section';
import Image from 'next/image'; 

// --- Products Section ---
const products = [
  {
    icon: <Settings className="w-8 h-8 text-[hsl(var(--primary))]" />,
    title: "Smart IVR",
    desc: "Customizable menus, self-service, and intelligent call distribution.",
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-[hsl(var(--secondary))]" />,
    title: "Omnichannel Dashboard",
    desc: "Manage calls, chats, and emails from a single, unified dashboard.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[hsl(var(--accent))]" />,
    title: "Seamless Integrations",
    desc: "Connect with CRM, WhatsApp, email, social media, and chatbots.",
  },
  {
    icon: <PhoneCall className="w-8 h-8 text-cyan-500" />,
    title: "Advanced Dialers",
    desc: "Preview, progressive, and predictive dialers for every need.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: "Call Monitoring",
    desc: "Monitor, barge-in, whisper, and record calls for quality assurance.",
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    title: "Click 2 Call",
    desc: "Operators get complete control over customer interactions.",
  },
];

// --- Middle Section: How It Works Stepper ---
const steps = [
  {
    icon: <Users className="w-7 h-7 text-[hsl(var(--primary))]" />,
    title: "Import Leads",
    desc: "Easily import your leads from CRM, spreadsheets, or integrations.",
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-[hsl(var(--secondary))]" />,
    title: "Automate Dialing",
    desc: "Let NobleDialer automatically connect your agents to customers.",
  },
  {
    icon: <MessageCircle className="w-7 h-7 text-[hsl(var(--accent))]" />,
    title: "Engage & Track",
    desc: "Monitor calls, collect feedback, and track every interaction in real time.",
  },
  {
    icon: <Cloud className="w-7 h-7 text-cyan-500" />,
    title: "Analyze & Optimize",
    desc: "Get actionable insights and optimize your campaigns for better results.",
  },
];

const integrations = [
  { img: "/images/crm-icon.png", label: "CRM Systems" },
  { img: "/images/email-icon.png", label: "Email Platforms" },
  { img: "/images/whatsapp-icon.png", label: "WhatsApp" },
  { img: "/images/social-icon.png", label: "Social Media" },
  { img: "/images/chatbot-icon.png", label: "Chatbots" },
];

const NobleDialer = () => {
  return (
    <div className="bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--secondary)/0.07)] to-[hsl(var(--accent)/0.10)]">
      {/* 1. Hero Section */}
      <HeroSection
        title="Noble Dialer"
        description="NobleDialer is an advanced automatic dialing system that consolidates all your leads and calls in one centralized platform. Designed for customer service and contact centers, it enhances consumer relations through seamless integration with email, WhatsApp, CRM systems, social media, and chatbots."
        imageSrc="/products/dialer.jpg"
      />

      {/* 2. Why Choose NobleDialer (custom section) */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">Why Choose NobleDialer?</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Experience the future of contact center management with NobleDialer - your all-in-one solution for seamless customer engagement and efficient call handling.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {products.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--secondary)/0.15)] border border-[hsl(var(--border))]">
                <div className="p-2 rounded-lg bg-[hsl(var(--primary)/0.1)]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1 text-[hsl(var(--primary))]">{item.title}</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl transform rotate-3"></div>
            <Image 
              src="/images/noble.png" 
              alt="About NobleDialer" 
              className="relative rounded-2xl object-contain w-full h-auto"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* 3. Products Section (main features/modules) */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[hsl(var(--primary))]">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-white/80 to-[hsl(var(--secondary)/0.15)] backdrop-blur-xl rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-[hsl(var(--border))] transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-[hsl(var(--foreground))]">{item.title}</h3>
              <p className="text-[hsl(var(--muted-foreground))]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Middle Section: How It Works Stepper */}
      <section className="relative max-w-5xl mx-auto px-4 py-20">
        {/* Decorative background blob */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-100 opacity-30 rounded-full blur-3xl pointer-events-none z-0" />
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[hsl(var(--primary))]">How It Works</h2>
        <p className="text-lg text-[hsl(var(--muted-foreground))] text-center mb-12 max-w-2xl mx-auto">
          See how NobleDialer streamlines your workflow from lead import to campaign optimization.
        </p>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative">
              {/* Step number with gradient background */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white text-2xl font-bold shadow-lg mb-4 border-4 border-white">
                {i + 1}
              </div>
              {/* Icon with glassy background */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/70 backdrop-blur-md shadow mb-3">
                {step.icon}
              </div>
              <h4 className="font-bold text-lg mb-1 text-[hsl(var(--primary))]">{step.title}</h4>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-2">{step.desc}</p>
              {/* Connector (desktop only, not last step) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-16 h-1 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] -translate-y-1/2 z-0"></div>
              )}
              {/* Vertical connector for mobile */}
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

      {/* 6. Products Section (do not change) */}

      <ProductsSection />

      {/* 7. Free Trial CTA Banner (do not change) */}

      
      <CTASection />
    </div>
  );
};

export default NobleDialer;