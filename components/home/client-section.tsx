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
    <section className="py-20 relative overflow-hidden bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[hsl(var(--foreground))]">
          Our <span className="text-[hsl(var(--primary))]">Clients</span>
        </h2>
        <div className="relative w-full overflow-x-hidden">
          <div className="marquee flex items-center gap-12">
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center justify-center group">
                <div className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center bg-white/70 rounded-xl border border-[hsl(var(--border))] transition-shadow duration-300 group-hover:shadow-xl">
                  <Image src={client.logo} alt={client.name} width={120} height={48} className="object-contain w-full h-full" />
                </div>
                <span className="mt-2 text-xs text-[hsl(var(--muted-foreground))] font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .marquee {
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default ClientSection;