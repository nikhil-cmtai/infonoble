'use client';

import React from 'react';
import HeroSection from '@/components/all/hero-section';
import { ShieldCheck, Globe, Lock, Server, AlertCircle, CheckCircle } from 'lucide-react';

const certifications = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-cyan-600" />,
    title: 'ISO 27001',
    desc: 'Certified for information security management.'
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: 'GDPR Ready',
    desc: 'Compliant with global data privacy regulations.'
  },
  {
    icon: <Server className="w-10 h-10 text-green-500" />,
    title: 'Data Residency',
    desc: 'Regional data storage options for compliance.'
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-yellow-500" />,
    title: 'Regular Audits',
    desc: 'Ongoing third-party security assessments.'
  },
];

const pillars = [
  {
    icon: <Lock className="w-8 h-8 text-cyan-600" />,
    title: 'Data Privacy',
    desc: 'Your information is protected with advanced encryption and strict access controls. We never compromise on your privacy.'
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    title: 'Global Compliance',
    desc: 'We adhere to international and regional regulations, so you can operate with confidence anywhere.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: 'Reliability & Transparency',
    desc: 'Continuous monitoring, regular audits, and clear communication keep your business secure and informed.'
  },
];

const protections = [
  {
    icon: <Lock className="w-7 h-7 text-cyan-600" />,
    title: 'End-to-End Encryption',
    desc: 'All data is encrypted in transit and at rest.'
  },
  {
    icon: <Server className="w-7 h-7 text-blue-500" />,
    title: '24/7 Monitoring',
    desc: 'Our systems are monitored around the clock for threats.'
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-green-500" />,
    title: 'Regular Security Audits',
    desc: 'We conduct frequent internal and external audits.'
  },
  {
    icon: <AlertCircle className="w-7 h-7 text-yellow-500" />,
    title: 'Incident Response',
    desc: 'Rapid response plans for any security event.'
  },
  {
    icon: <Globe className="w-7 h-7 text-pink-500" />,
    title: 'Data Residency Options',
    desc: 'Choose where your data is stored to meet compliance needs.'
  },
];

const ComplianceSecurity = () => {
  return (
    <div className="bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--secondary)/0.07)] to-[hsl(var(--accent)/0.10)] min-h-screen">
      <HeroSection
        title="Compliance & Security"
        description="Enterprise-grade security, privacy, and compliance—built for your peace of mind. We protect your data and help you meet global and regional regulations."
        imageSrc="/banner/security.png"
      />
      {/* Certifications Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <div className="mb-8">
          <span className="inline-block bg-cyan-100 text-cyan-800 font-semibold px-4 py-2 rounded-full text-base shadow">Certifications & Standards</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((c, i) => (
            <div key={i} className="flex flex-col items-center bg-white/80 backdrop-blur-xl rounded-2xl shadow p-6 border border-[hsl(var(--border))] min-w-[160px] max-w-[200px]">
              {c.icon}
              <div className="font-bold text-lg mt-2 text-[hsl(var(--primary))]">{c.title}</div>
              <div className="text-[hsl(var(--muted-foreground))] text-sm mt-1">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Pillars Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <div key={i} className="bg-gradient-to-br from-white/80 to-[hsl(var(--secondary)/0.10)] backdrop-blur-xl rounded-2xl shadow-xl border border-[hsl(var(--border))] p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-4">{p.icon}</div>
            <h3 className="font-bold text-xl mb-2 text-[hsl(var(--primary))]">{p.title}</h3>
            <p className="text-[hsl(var(--muted-foreground))]">{p.desc}</p>
          </div>
        ))}
      </section>
      {/* How We Protect You Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[hsl(var(--primary))]">How We Protect You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {protections.map((p, i) => (
            <div key={i} className="flex flex-col items-center bg-white/80 backdrop-blur-xl rounded-2xl shadow p-6 border border-[hsl(var(--border))]">
              <div className="mb-2">{p.icon}</div>
              <div className="font-bold text-base text-[hsl(var(--primary))] mb-1">{p.title}</div>
              <div className="text-[hsl(var(--muted-foreground))] text-sm text-center">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="text-lg text-[hsl(var(--muted-foreground))] mb-6">
          Want to know more about our security practices or need a custom compliance report?
        </div>
        <a
          href="/contact"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-all"
        >
          Contact Our Compliance Team &rarr;
        </a>
      </section>
    </div>
  );
};

export default ComplianceSecurity;

