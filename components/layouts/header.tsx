"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const navItems = [
  {
    label: "Why ZIWO",
    submenu: ["About Us", "Our Mission", "Careers"],
  },
  {
    label: "Products",
    submenu: ["Product 1", "Product 2", "Product 3"],
  },
  {
    label: "Solutions",
    submenu: ["Solution 1", "Solution 2", "Solution 3"],
  },
  {
    label: "Contact Us",
    submenu: null,
  },
];

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-6xl rounded-full bg-blue-400/30 backdrop-blur-md shadow-2xl flex items-center px-10 py-3 border border-blue-300/40 min-h-[60px]">
      <div className="flex items-center w-full">
        {/* Logo */}
        <div className="flex-shrink-0 mr-8">
          <Link href="/">
            <Image src="/next.svg" alt="Logo" width={48} height={48} className="rounded-full bg-white" />
          </Link>
        </div>
        {/* Nav Links */}
        <nav className="flex-1 flex justify-center space-x-8 relative">
          {navItems.map((item, idx) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.submenu && setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                href="#"
                className="font-semibold text-blue-900 hover:text-blue-700 transition flex items-center gap-1 px-4 py-2 text-lg"
              >
                {item.label}
                {item.submenu && <span className="text-xs">▼</span>}
              </Link>
              {item.submenu && openIndex === idx && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 min-w-[160px] rounded-xl bg-white/90 shadow-lg py-2 z-50 animate-fade-in-up">
                  {item.submenu.map((sub) => (
                    <Link
                      href="#"
                      key={sub}
                      className="block px-4 py-2 text-blue-900 hover:bg-blue-100 hover:text-blue-700 transition text-sm whitespace-nowrap"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        {/* Request a Demo Button */}
        <div className="flex-shrink-0 ml-8">
          <Link href="#" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold shadow-md hover:scale-105 transition">Request a Demo</Link>
        </div>
      </div>
    </header>
  );
}
