"use client";

import React from "react";
import Image from "next/image";

const clients = [
  { name: "Al Noor Group", logo: "/clients/logo1.png" },
  { name: "GCC Retail", logo: "/clients/logo2.png" },
  { name: "FinServe ME", logo: "/clients/logo3.png" },
  { name: "TechX", logo: "/clients/logo4.png" },
  { name: "BPO Connect", logo: "/clients/logo5.png" },
  { name: "RealEstatePro", logo: "/clients/logo6.png" },
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