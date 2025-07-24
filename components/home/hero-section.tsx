'use client'

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-[60vh] bg-[hsl(var(--background))] px-0 py-16 relative overflow-hidden"
    >
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-[-20%] top-[-20%] w-[70vw] h-[70vw] bg-gradient-radial from-cyan-100 via-white/60 to-transparent opacity-70" />
        <div className="absolute right-[-15%] bottom-[-15%] w-[60vw] h-[60vw] bg-gradient-radial from-blue-100 via-white/60 to-transparent opacity-60" />
      </div>
      {/* Animated Blobs */}
      <div className="absolute z-0 top-[66px] left-[-120px] w-[340px] h-[340px] bg-[hsl(var(--primary))] opacity-30 rounded-full blur-3xl animate-blob1" />
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-8">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center gap-5 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[hsl(var(--foreground))] leading-tight">
            Connect Effortlessly <br /> with Your Customers
          </h1>
          <h2 className="text-lg font-semibold text-[hsl(var(--muted-foreground))]">
            Powerful cloud-based contact center software to elevate customer experiences
          </h2>
          <p className="text-base text-[hsl(var(--muted-foreground))] max-w-lg">
            INFONOBLE leads the way in Cloud Contact Center Solutions across the GCC. Empower your team to reach customers anywhere, anytime, with a unified platform designed to maximize engagement and drive meaningful conversations.
          </p>
          <button
            className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Request a Demo
          </button>
        </div>

        {/* Right: Image/Visual Content */}
        <div className="flex-1 flex items-center justify-center h-[420px] md:h-[560px]">
          <div className="relative flex items-center justify-center h-full max-w-[400px] md:max-w-[480px]">
            {/* Animated floating icons */}
            {/* <div className="absolute inset-0 pointer-events-none z-20">
              <span className="absolute top-[25%] left-[10%] icon-float1">
                <Phone className="w-8 h-8 text-[hsl(var(--primary))] drop-shadow-lg" />
              </span>
              <span className="absolute top-[30%] right-[10%] icon-float2">
                <MessageSquare className="w-8 h-8 text-orange-400 drop-shadow-lg" />
              </span>
              <span className="absolute bottom-[25%] left-[12%] icon-float3">
                <Mic className="w-8 h-8 text-cyan-500 drop-shadow-lg" />
              </span>
              <span className="absolute bottom-[20%] right-[15%] icon-float4">
                <Cloud className="w-8 h-8 text-purple-400 drop-shadow-lg" />
              </span>
            </div> */}
            <div className="h-full w-full rounded-lg flex items-center justify-center">
              <Image 
                src="/banner/infohome.gif" 
                alt="Hero Image" 
                width={440} 
                height={460} 
                className="object-contain max-h-[420px] md:max-h-[560px] rounded-lg"
                priority 
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

