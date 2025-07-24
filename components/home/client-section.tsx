"use client";

import React from "react";
import Image from "next/image";

const clients = [
  {
    name: "Gulf Cooperation Council (GCC)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Logo_gcc.png"
  },
  {
    name: "BPO Connect",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/BPO_logo.svg"
  },
  {
    name: "Tech‑X Corporation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Tech-X_Logo.svg"
  },
  {
    name: "Century 21 Real Estate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Century_21_Real_Estate_logo.svg"
  },
  {
    name: "Consus Real Estate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Consus_Real_Estate_Logo.svg"
  }
];

const ClientSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--secondary)/0.05)] to-[hsl(var(--accent)/0.05)]">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className=" mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--foreground))]">
            Trusted by <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Join hundreds of companies using our solutions to transform their customer experience
          </p>
        </div>
        
        <div className="relative w-full overflow-x-hidden py-8">
          <div className="marquee flex items-center gap-16">
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center justify-center group">
                <div className="w-48 h-32 md:w-56 md:h-40 p-6 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl border border-[hsl(var(--border))] shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white">
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    width={200} 
                    height={80} 
                    className="object-contain w-full h-full filter saturate-0 hover:saturate-100 transition-all duration-300" 
                  />
                </div>
                <span className="mt-4 text-sm font-medium text-[hsl(var(--foreground))] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ClientSection;