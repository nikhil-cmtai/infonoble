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
    description: 'Modernize your business communication with a secure, scalable cloud phone system. NobleIP-PBX offers crystal-clear calls, easy management, and powerful integrations for today’s hybrid teams.',
  },
];

export default function ProductsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[hsl(var(--foreground))]">
          Our <span className="text-[hsl(var(--primary))]">Products</span>
        </h2>
        <p className="text-center text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-10 max-w-2xl mx-auto font-medium">
          Powerful tools to elevate your customer experience and streamline your support operations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <button className="px-8 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold shadow hover:bg-[hsl(var(--secondary))] transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white/60 backdrop-blur-2xl rounded-2xl shadow-xl p-7 flex flex-col gap-4 border border-[hsl(var(--border))] transition-colors duration-300 hover:text-[hsl(var(--primary))]">
      <h3 className="font-bold text-xl mb-1">{product.name}</h3>
      <p className="text-[hsl(var(--muted-foreground))] text-base flex-1">{product.description}</p>
    </div>
  );
}

type Product = {
  id: number;
  name: string;
  description: string;
}; 