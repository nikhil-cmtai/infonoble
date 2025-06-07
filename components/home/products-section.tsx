'use client';

import React from 'react';

const products = [
  {
    id: 1,
    name: 'NobleDialer',
    description: 'Boost your sales and support teams with automated, high-speed outbound calling. NobleDialer maximizes agent productivity, reduces idle time, and ensures every lead is reached efficiently.',
  },
  {
    id: 2,
    name: 'NobleOmniChannel',
    description: 'Deliver seamless customer experiences across voice, chat, email, and social channels—all in one unified platform. NobleOmniChannel empowers your team to respond faster and build stronger relationships.',
  },
  {
    id: 3,
    name: 'NobleIP-PBX',
    description: 'Modernize your business communication with a secure, scalable cloud phone system. NobleIP-PBX offers crystal-clear calls, easy management, and powerful integrations for today\'s hybrid teams.',
  },
];

export default function ProductsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[hsl(var(--background))]">
      {/* Animated Theme Blobs (matching hero section) */}
      <div className="absolute left-[-20%] top-[-20%] w-[70vw] h-[70vw] bg-gradient-radial from-cyan-100 via-white/60 to-transparent opacity-70 z-0 pointer-events-none" />
      <div className="absolute right-[-15%] bottom-[-15%] w-[60vw] h-[60vw] bg-gradient-radial from-blue-100 via-white/60 to-transparent opacity-60 z-0 pointer-events-none" />
      <div className="absolute z-0 top-[-120px] left-[-120px] w-[340px] h-[340px] bg-[hsl(var(--primary))] opacity-30 rounded-full blur-3xl animate-blob1" />
      <div className="absolute z-0 bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[hsl(var(--secondary))] opacity-30 rounded-full blur-3xl animate-blob2" />
      <div className="absolute z-0 top-1/2 left-[60%] w-[220px] h-[220px] bg-orange-300 opacity-20 rounded-full blur-2xl animate-blob3" />
      <div className="absolute z-0 top-[10%] right-[20%] w-[180px] h-[180px] bg-purple-300 opacity-20 rounded-full blur-2xl animate-blob4" />
      <div className="absolute z-0 bottom-[15%] left-[15%] w-[160px] h-[160px] bg-yellow-200 opacity-20 rounded-full blur-2xl animate-blob5" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[hsl(var(--foreground))]">
          Our <span className="text-[hsl(var(--primary))]">Products</span>
        </h2>
        <p className="text-center text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-10 max-w-2xl mx-auto font-medium">
          Powerful tools to elevate your customer experience and streamline your support operations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <button className="px-8 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold shadow hover:bg-[hsl(var(--secondary))] transition-colors">
            View All Products
          </button>
        </div>
      </div>
      {/* Animations for blobs (copied from hero section) */}
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
      `}</style>
    </section>
  );
}

function ProductCard({ product }: { product: Product, index: number }) {
  return (
    <div className="relative group bg-white/60 backdrop-blur-2xl rounded-2xl shadow-2xl p-8 flex flex-col gap-4 border border-[hsl(var(--border))] transition-colors duration-300 hover:text-[hsl(var(--primary))]">
      {/* Accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-l-2xl" />
      <h3 className="font-bold text-xl mb-1 pl-4">{product.name}</h3>
      <p className="text-[hsl(var(--muted-foreground))] text-base flex-1 pl-4">{product.description}</p>
    </div>
  );
}

type Product = {
  id: number;
  name: string;
  description: string;
}; 