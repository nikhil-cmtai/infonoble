'use client';

import React from 'react';
import HeroSection from '@/components/all/hero-section';
import { Quote, TrendingUp, Users, Globe, Star } from 'lucide-react';

const testimonials = [  
  {
    name: "Suzuki Motorcycles",
    title: "Seamless Customer Engagement",
    desc: "Infonoble's platform helped us unify our customer support channels and deliver faster, more personalized service. Our CSAT scores have never been higher.",
  },
  {
    name: "Quest Diagnostics",
    title: "Reliable & Secure",
    desc: "With Infonoble, we achieved compliance and data security for our healthcare operations, while improving our response times and patient satisfaction.",
  },
  {
    name: "JP Hospital",
    title: "Healthcare Transformation",
    desc: "The automation and analytics from Infonoble have streamlined our patient communications and improved our operational efficiency.",
  },
  {
    name: "BPTP Ltd",
    title: "Enterprise-Ready",
    desc: "We needed a scalable, secure solution for our growing business. Infonoble delivered beyond expectations, with excellent support.",
  },
];  

const stats = [
  {
    icon: <Users className="w-8 h-8 text-cyan-600" />,
    label: 'Clients Served',
    value: '500+',
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    label: 'Countries',
    value: '7+',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    label: 'Industries',
    value: '12+',
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    label: 'Avg. CSAT Score',
    value: '98%',
  },
];

const caseStudy = {
  client: 'Suzuki Motorcycles',
  title: 'Transforming Customer Support at Scale',
  desc: `Suzuki Motorcycles partnered with Infonoble to unify their customer engagement across channels. With our platform, they reduced response times by 40%, improved customer satisfaction, and gained actionable insights to drive continuous improvement.`,
  cta: 'Read More',
  ctaHref: '/contact',
};

const SuccessStories = () => {
  return (
    <div className="bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--secondary)/0.07)] to-[hsl(var(--accent)/0.10)] min-h-screen">
      <HeroSection
        title="Our Journey of Impact"
        description="From our first client to 500+ businesses, Infonoble has been a catalyst for digital transformation across industries. Our commitment to excellence and partnership has empowered organizations to deliver unforgettable customer experiences."
        imageSrc="/banner/success.jpg"
      />
      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[hsl(var(--primary))]">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="relative bg-gradient-to-br from-white/80 to-[hsl(var(--secondary)/0.10)] backdrop-blur-xl rounded-2xl shadow-xl border border-[hsl(var(--border))] p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <Quote className="w-8 h-8 text-orange-500 mb-4 opacity-80" />
              <div className="text-lg text-[hsl(var(--muted-foreground))] mb-4">{t.desc}</div>
              <div className="mt-auto">
                <div className="font-bold text-[hsl(var(--primary))] text-lg">{t.name}</div>
                <div className="text-sm text-[hsl(var(--muted-foreground))]">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Impact Stats Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[hsl(var(--primary))]">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center bg-white/80 backdrop-blur-xl rounded-2xl shadow p-6 border border-[hsl(var(--border))]">
              <div className="mb-2">{s.icon}</div>
              <div className="font-extrabold text-3xl text-[hsl(var(--primary))] mb-1">{s.value}</div>
              <div className="text-[hsl(var(--muted-foreground))] text-base font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Featured Case Study Section */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-white/90 to-[hsl(var(--secondary)/0.10)] backdrop-blur-xl rounded-2xl shadow-xl border border-[hsl(var(--border))] p-10 flex flex-col items-center text-center">
          <div className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-2">Featured Case Study</div>
          <div className="text-2xl md:text-3xl font-bold text-[hsl(var(--primary))] mb-3">{caseStudy.title}</div>
          <div className="text-lg text-[hsl(var(--muted-foreground))] mb-6">{caseStudy.desc}</div>
          <div className="font-bold text-[hsl(var(--primary))] mb-4">{caseStudy.client}</div>
          <a
            href={caseStudy.ctaHref}
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-all"
          >
            {caseStudy.cta}
          </a>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;

