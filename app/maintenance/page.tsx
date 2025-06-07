import React from "react";
import { Wrench } from "lucide-react";

const Maintenance = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[hsl(var(--background))] px-4">
      <div className="flex flex-col items-center gap-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-[hsl(var(--border))] p-10 max-w-lg w-full">
        <Wrench className="w-16 h-16 text-[hsl(var(--primary))]" />
        <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] text-center">
          We're Under Maintenance
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))] text-center">
          Our website is currently undergoing scheduled maintenance.<br />
          For urgent support, please email: <a href="mailto:nikhi.chaudhary@cmtai.in" className="text-[hsl(var(--primary))] underline">nikhi.chaudhary@cmtai.in</a>
        </p>
        <span className="text-sm text-[hsl(var(--muted-foreground))] text-center">
          Thank you for your patience. We'll be back soon!
        </span>
      </div>
    </main>
  );
};

export default Maintenance;