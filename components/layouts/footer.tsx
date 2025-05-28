import React from "react";
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--background))] border-t border-[hsl(var(--border))] pt-12 pb-6 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand/Logo */}
        <div className="md:col-span-1 flex flex-col gap-4 items-start justify-start">
          <Link href="/" className="text-2xl font-bold text-[hsl(var(--foreground))]">
            INFO<span className="text-orange-500">NOBLE</span>
          </Link>
          <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-[180px]">Cloud Contact Center Solution for the GCC.</p>
        </div>
        {/* Why Infonoble */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-[hsl(var(--primary))] mb-1">Why Infonoble</span>
          <Link href="#" className="text-[hsl(var(--foreground))] hover:text-orange-500 transition">About Us</Link>
          <Link href="#" className="text-[hsl(var(--foreground))] hover:text-orange-500 transition">Our Mission</Link>
          <Link href="#" className="text-[hsl(var(--foreground))] hover:text-orange-500 transition">Careers</Link>
        </div>
        {/* Products */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-[hsl(var(--primary))] mb-1">Products</span>
          <Link href="#" className="text-[hsl(var(--foreground))] hover:text-orange-500 transition">Call Center Software</Link>
          <Link href="#" className="text-[hsl(var(--foreground))] hover:text-orange-500 transition">Business Phone System</Link>
          <Link href="#" className="text-[hsl(var(--foreground))] hover:text-orange-500 transition">INFONOBLE AI</Link>
        </div>
        {/* Solutions */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-[hsl(var(--primary))] mb-1">Solutions</span>
          <Link href="#" className="text-[hsl(var(--foreground))] hover:text-orange-500 transition">By Departments</Link>
          <Link href="#" className="text-[hsl(var(--foreground))] hover:text-orange-500 transition">By Size</Link>
          <Link href="#" className="text-[hsl(var(--foreground))] hover:text-orange-500 transition">By Industry</Link>
        </div>
        {/* Contact */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-[hsl(var(--primary))] mb-1">Contact</span>
          <Link href="#" className="text-[hsl(var(--foreground))] hover:text-orange-500 transition">Contact Us</Link>
          <Link href="#" className="text-[hsl(var(--foreground))] hover:text-orange-500 transition">Request a Demo</Link>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="LinkedIn" className="text-[hsl(var(--foreground))] hover:text-blue-600 transition"><Linkedin className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter" className="text-[hsl(var(--foreground))] hover:text-blue-400 transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="Email" className="text-[hsl(var(--foreground))] hover:text-orange-500 transition"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 border-t border-[hsl(var(--border))] pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center text-[hsl(var(--muted-foreground))] text-sm">© {new Date().getFullYear()} INFONOBLE. All rights reserved.</p>
        <div className="flex gap-4 text-xs text-[hsl(var(--muted-foreground))]">
          <Link href="#" className="hover:text-orange-500 transition">Privacy Policy</Link>
          <Link href="#" className="hover:text-orange-500 transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

    