'use client'

import Image from 'next/image';
import { Phone, MessageSquare, Mic, Cloud } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-[70vh] bg-[hsl(var(--background))] px-0 py-16 relative overflow-hidden pt-32 md:pt-40"
    >
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-[-20%] top-[-20%] w-[70vw] h-[70vw] bg-gradient-radial from-cyan-100 via-white/60 to-transparent opacity-70" />
        <div className="absolute right-[-15%] bottom-[-15%] w-[60vw] h-[60vw] bg-gradient-radial from-blue-100 via-white/60 to-transparent opacity-60" />
      </div>
      {/* Animated Blobs */}
      <div className="absolute z-0 top-[50px] left-[-120px] w-[340px] h-[340px] bg-[hsl(var(--primary))] opacity-30 rounded-full blur-3xl animate-blob1" />
      <div className="absolute z-0 bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[hsl(var(--secondary))] opacity-30 rounded-full blur-3xl animate-blob2" />
      <div className="absolute z-0 top-1/2 left-[60%] w-[220px] h-[220px] bg-orange-300 opacity-20 rounded-full blur-2xl animate-blob3" />
      <div className="absolute z-0 top-[10%] right-[20%] w-[180px] h-[180px] bg-purple-300 opacity-20 rounded-full blur-2xl animate-blob4" />
      <div className="absolute z-0 bottom-[15%] left-[15%] w-[160px] h-[160px] bg-yellow-200 opacity-20 rounded-full blur-2xl animate-blob5" />
      <style jsx>{`
        @keyframes blob1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(40px) scale(1.08); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.04); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(-40px) scale(1.1); }
        }
        @keyframes blob4 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(30px) scale(1.07) rotate(8deg); }
        }
        @keyframes blob5 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(30px) scale(1.09) rotate(-6deg); }
        }
        .animate-blob1 { animation: blob1 12s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 14s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 16s ease-in-out infinite; }
        .animate-blob4 { animation: blob4 18s ease-in-out infinite; }
        .animate-blob5 { animation: blob5 20s ease-in-out infinite; }
        @keyframes float1 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-18px);} }
        @keyframes float2 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(14px);} }
        @keyframes float3 { 0%,100%{transform:scale(1);} 50%{transform:scale(1.18);} }
        @keyframes float4 { 0%,100%{transform:rotate(0);} 50%{transform:rotate(18deg);} }
        .icon-float1 { animation: float1 3.5s ease-in-out infinite; }
        .icon-float2 { animation: float2 4.2s ease-in-out infinite; }
        .icon-float3 { animation: float3 3.8s ease-in-out infinite; }
        .icon-float4 { animation: float4 4.5s ease-in-out infinite; }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--foreground))] leading-tight">
            Simply talk to <br /> your clients!
          </h1>
          <h2 className="text-lg font-semibold text-[hsl(var(--muted-foreground))]">
            Leading cloud-based contact center software for enhanced customer engagement
          </h2>
          <p className="text-base text-[hsl(var(--muted-foreground))] max-w-lg">
            INFONOBLE is the leading Cloud Contact Center Solution in the GCC. We help successful companies to reach their customers from anywhere with a single interface that brings value in your conversations.
          </p>
          <button
            className="mt-4 px-8 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold shadow hover:bg-[hsl(var(--secondary))] transition-colors"
          >
            Request a Demo
          </button>
        </div>

        {/* Right: Image/Visual Content */}
        <div className="flex-1 flex items-center justify-center mt-12 md:mt-0">
          <div className="relative flex items-center justify-center w-full h-full min-h-[320px] min-w-[220px]">
            {/* Animated floating icons, now hugging the image closely */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <span className="absolute top-[28%] left-[13%] icon-float1">
                <Phone className="w-8 h-8 text-[hsl(var(--primary))] drop-shadow-lg" />
              </span>
              <span className="absolute top-[32%] right-[13%] icon-float2">
                <MessageSquare className="w-8 h-8 text-orange-400 drop-shadow-lg" />
              </span>
              <span className="absolute bottom-[22%] left-[14%] icon-float3">
                <Mic className="w-8 h-8 text-cyan-500 drop-shadow-lg" />
              </span>
              <span className="absolute bottom-[14%] right-[18%] icon-float4">
                <Cloud className="w-8 h-8 text-purple-400 drop-shadow-lg" />
              </span>
            </div>
                <Image src="/hero.png" alt="Hero Image" width={1920} height={1080} className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
