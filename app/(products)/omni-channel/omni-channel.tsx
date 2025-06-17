import React from 'react';
import HeroSection from '@/components/all/hero-section';
import { Users, MessageCircle, Cloud, Zap, Puzzle, PhoneCall, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const whyIntro =
  "NobleOmniChannel empowers your business to deliver seamless, unified customer experiences across every channel—voice, chat, email, and social. Simplify your operations and delight your customers with one powerful platform.";

const whyPoints = [
  {
    icon: <MessageCircle className="w-7 h-7 text-[hsl(var(--primary))]" />,
    title: "Unified Inbox",
    desc: "All customer conversations in one place, no matter the channel.",
  },
  {
    icon: <Zap className="w-7 h-7 text-[hsl(var(--secondary))]" />,
    title: "Smart Automation",
    desc: "Automate repetitive tasks and boost agent productivity.",
  },
  {
    icon: <Cloud className="w-7 h-7 text-cyan-500" />,
    title: "Cloud Flexibility",
    desc: "Access and manage your contact center from anywhere, anytime.",
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-yellow-400" />,
    title: "Actionable Insights",
    desc: "Real-time analytics to optimize every customer interaction.",
  },
];

const features = [
  {
    icon: <MessageCircle className="w-8 h-8 text-[hsl(var(--primary))]" />,
    title: "Unified Conversations",
    desc: "Manage all your voice, chat, email, and social media conversations in one place.",
  },
  {
    icon: <Puzzle className="w-8 h-8 text-[hsl(var(--secondary))]" />,
    title: "15+ CRM Integrations",
    desc: "Connect with your favorite CRMs and tools for a unified workflow.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[hsl(var(--accent))]" />,
    title: "Smart Automation",
    desc: "Automate repetitive tasks and boost efficiency with workflows and chatbots.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-500" />,
    title: "Cloud-Based",
    desc: "Access your contact center from anywhere, anytime, with secure cloud technology.",
  },
  {
    icon: <PhoneCall className="w-8 h-8 text-green-500" />,
    title: "Omnichannel Routing",
    desc: "Route customer queries to the right agent, on the right channel, every time.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-yellow-400" />,
    title: "Analytics & Insights",
    desc: "Get actionable insights across all channels for better decision making.",
  },
];

const steps = [
  {
    icon: <Users className="w-7 h-7 text-[hsl(var(--primary))]" />,
    title: "Connect Channels",
    desc: "Integrate all your communication channels in one platform.",
  },
  {
    icon: <MessageCircle className="w-7 h-7 text-[hsl(var(--secondary))]" />,
    title: "Engage Customers",
    desc: "Respond to customers on their preferred channel, instantly.",
  },
  {
    icon: <Zap className="w-7 h-7 text-[hsl(var(--accent))]" />,
    title: "Automate Workflows",
    desc: "Use smart automation to handle routine queries and tasks.",
  },
  {
    icon: <Cloud className="w-7 h-7 text-cyan-500" />,
    title: "Analyze & Optimize",
    desc: "Track performance and optimize your customer experience.",
  },
];

const integrations = [
  { img: "/images/crm-icon.png", label: "CRM Systems" },
  { img: "/images/email-icon.png", label: "Email Platforms" },
  { img: "/images/whatsapp-icon.png", label: "WhatsApp" },
  { img: "/images/social-icon.png", label: "Social Media" },
  { img: "/images/chatbot-icon.png", label: "Chatbots" },
];

const OmniChannel = () => {
  return (
    <div className="bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--secondary)/0.07)] to-[hsl(var(--accent)/0.10)]">
      {/* 1. Hero Section */}
      <HeroSection
        title="Noble OmniChannel"
        description="Deliver seamless, unified customer experiences across every channel—voice, chat, email, and social. Simplify your operations, empower your agents, and delight your customers with one powerful platform that brings all conversations and data together."
        imageSrc="/products/omnichannel.jpg"
      />

      {/* 2. Why Choose NobleOmniChannel */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--primary))] mb-4">Why NobleOmniChannel?</h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">{whyIntro}</p>
            <div className="flex flex-col gap-4">
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
              src="/products/omnichannel2.jpg"
              alt="Why NobleOmniChannel"
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
          See how NobleOmniChannel unifies your customer experience across every channel.
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

      {/* 6. Contact/CTA Section */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">
          NobleOmnichannel CRM successfully combines all of these platforms, bringing together the most relevant communication channels (phone, email, chat, and social media) in a single interface, simplifying the company&apos;s contact with the customer for a wonderful experience. Today, NobleOmnichannel CRM is a crucial component for supporting clients that lead several lives at the same time - social, professional, personal, and individual. To provide a better client experience (CX).
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-all"
        >
          Contact Us &rarr;
        </a>
      </section>
    </div>
  );
};

export default OmniChannel;