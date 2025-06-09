import React from "react";
import Image from "next/image";
import Link from "next/link";
interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc?: string;
  ctaText?: string;
  ctaHref?: string;
}

const HeroSection = ({
  title,
  description,
  ctaText,
  ctaHref,
  imageSrc
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-100 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--primary))] leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-medium">
            {description}
          </p>
          {ctaText && ctaHref && (
            <Link href={ctaHref} className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 transition-all">
              {ctaText}
            </Link>
          )}
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={imageSrc || ""}
            alt={title}
            width={400}
            height={400}
            className="rounded-2xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;