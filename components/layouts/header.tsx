"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ChevronRight, Menu} from "lucide-react";
import MobileMenu from "./mobile-menu";

const whyMenu = [
  {
    heading: "Quality",
    headingClass: "text-pink-600 font-bold text-base mb-2",
    items: [
      { label: "Voice Quality", href: "#" },
      { label: "Features", href: "#" },
      { label: "Compliance & Security", href: "#" },
    ],
  },
  {
    heading: "INFONOBLE",
    headingClass: "text-pink-600 font-bold text-base mb-2",
    items: [
      { label: "Our Story", href: "#" },
      { label: "Success Stories & Testimonials", href: "#" },
      { label: "Join Us", href: "#" },
    ],
  },
];

const productsMenu = [
  {
    title: "Call Center Software",
    desc: "The Leading Cloud Contact Center Software in the Middle East.",
    href: "#",
  },
  {
    title: "Business Phone System",
    desc: "A scalable business phone system for every company.",
    href: "#",
  },
  {
    title: "INFONOBLE AI",
    desc: "Revolutionize Your Contact Center with INFONOBLE AI.",
    href: "#",
  },
  {
    title: "Omnichannel",
    desc: "Manage all your Voice, WhatsApp conversations seamlessly in one place.",
    href: "#",
  },
  {
    title: "Workflows & Chatbot",
    desc: "Power your business with intelligent conversations and seamless automation using INFONOBLE Workflows and Chatbots.",
    href: "#",
  },
];

const solutionsMenu = [
  {
    heading: "By Departments",
    headingClass: "text-pink-600 font-bold text-base mb-2",
    items: [
      { label: "Sales & Marketing", href: "#" },
      { label: "Customer Success & Support", href: "#" },
      { label: "IT & Operations", href: "#" },
      { label: "Across the company", href: "#" },
    ],
  },
  {
    heading: "By Size",
    headingClass: "text-pink-600 font-bold text-base mb-2",
    items: [
      { label: "SMEs (Small & Medium Business)", href: "#" },
      { label: "Large Business", href: "#" },
    ],
  },
  {
    heading: "By Industry",
    headingClass: "text-pink-600 font-bold text-base mb-2",
    items: [
      { label: "Retail & E-Commerce", href: "#" },
      { label: "Real Estate", href: "#" },
      { label: "Finance & Banks", href: "#" },
      { label: "BPOs", href: "#" },
      { label: "Travel & Hospitality", href: "#" },
    ],
  },
];

const navItems = [
  {
    label: "Why INFONOBLE",
    submenu: whyMenu,
    isMega: true,
  },
  {
    label: "Products",
    submenu: productsMenu,
    isProductMega: true,
  },
  {
    label: "Solutions",
    submenu: solutionsMenu,
    isSolutionsMega: true,
  },
  {
    label: "Contact Us",
  },
];

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92vw] max-w-7xl rounded-full bg-white/70 backdrop-blur-xl shadow-lg flex items-center px-4 md:px-10 py-3 border border-[hsl(var(--border))] min-h-[64px] transition-all">
      <div className="flex items-center w-full">
        {/* Logo */}
        <div className="flex-shrink-0 mr-4 md:mr-8">
          <Link href="/">
            <span className="text-2xl font-bold text-[hsl(var(--foreground))]">
              INFO
              <span className="text-2xl font-bold text-orange-500">NOBLE</span>
            </span>
          </Link>
        </div>
        {/* Desktop Nav Links */}
        <nav className="flex-1 justify-center space-x-8 relative hidden md:flex">
          {navItems.map((item, idx) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.submenu && setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                href="#"
                className="font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition flex items-center gap-1 px-4 py-2 text-lg rounded-full hover:bg-[hsl(var(--muted))]"
              >
                {item.label}
                {item.submenu && <span className="text-xs">▼</span>}
              </Link>
              {/* Mega Menu for Why INFONOBLE */}
              {item.isMega && openIndex === idx && Array.isArray(item.submenu) && typeof item.submenu[0] === 'object' && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-4 min-w-[440px] rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl py-8 px-8 z-50 flex gap-8 border border-[hsl(var(--border))]">
                  {item.submenu.map((col, colIdx) => (
                    <div key={colIdx} className={`min-w-[180px] ${colIdx === 0 ? 'pr-8 border-r border-[hsl(var(--border))]' : 'pl-8'}`}> 
                      <div className="text-lg font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-3">{col.heading}</div>
                      <ul className="space-y-2">
                        {col.items.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              href={sub.href}
                              className="flex items-center justify-between text-[hsl(var(--foreground))] font-semibold text-base px-0 py-1 rounded-lg hover:bg-[hsl(var(--muted))] hover:text-orange-500 transition"
                            >
                              <span>{sub.label}</span>
                              <ChevronRight className="w-5 h-5 ml-2 text-orange-500" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {/* Product Mega Menu */}
              {item.isProductMega && openIndex === idx && Array.isArray(item.submenu) && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-4 min-w-[720px] rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl py-8 px-8 z-50 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-2 border border-[hsl(var(--border))]">
                  {item.submenu.map((prod, prodIdx) => (
                    <Link
                      key={prodIdx}
                      href={prod.href}
                      className="flex flex-col px-0 py-2 rounded-lg hover:bg-[hsl(var(--muted))] transition group"
                    >
                      <span className="flex items-center justify-between font-bold text-[hsl(var(--foreground))] text-base group-hover:text-orange-500 transition-all">
                        {prod.title}
                        <ChevronRight className="w-5 h-5 ml-2 text-orange-500 group-hover:text-orange-600 transition-all" />
                      </span>
                      <span className="text-sm text-[hsl(var(--foreground))] font-medium mt-1">
                        {prod.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
              {/* Solutions Mega Menu */}
              {item.isSolutionsMega && openIndex === idx && Array.isArray(item.submenu) && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-4 min-w-[900px] rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl py-8 px-8 z-50 flex gap-12 border border-[hsl(var(--border))]">
                  {item.submenu.map((col, colIdx) => (
                    <div key={colIdx} className="min-w-[220px]">
                      <div className={col.headingClass}>{col.heading}</div>
                      <ul className="space-y-2">
                        {col.items.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              href={sub.href}
                              className="flex items-center justify-between text-[hsl(var(--foreground))] font-semibold text-lg px-0 py-1 rounded-lg hover:bg-[hsl(var(--muted))] hover:text-orange-500 transition"
                            >
                              <span>{sub.label}</span>
                              <ChevronRight className="w-5 h-5 ml-2 text-orange-500" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {/* Normal Dropdown for other nav items */}
              {!item.isMega && !item.isProductMega && !item.isSolutionsMega && openIndex === idx && Array.isArray(item.submenu) && item.submenu.every((sub) => typeof sub === 'string') && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 min-w-[160px] rounded-xl bg-white/95 shadow-xl py-2 z-50 animate-fade-in-up border border-[hsl(var(--border))]">
                  {item.submenu.map((sub) => (
                    <Link
                      href="#"
                      key={sub as string}
                      className="block px-4 py-2 text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition text-sm whitespace-nowrap rounded-lg"
                    >
                      {sub as string}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="md:hidden ml-auto flex items-center justify-center p-2 rounded-full hover:bg-[hsl(var(--muted))] focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7 text-[hsl(var(--foreground))]" />
        </button>
        {/* Request a Demo Button (desktop only) */}
        <div className="flex-shrink-0 ml-4 hidden md:block">
          <Link href="#" className="px-6 py-2 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold shadow hover:scale-105 hover:bg-[hsl(var(--secondary))] transition-all border border-[hsl(var(--border))]">
            Request a Demo
          </Link>
        </div>
      </div>
      {/* Mobile Menu Overlay (moved to MobileMenu component) */}
    </header>
          <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navItems={navItems} />
</>
  );
}
