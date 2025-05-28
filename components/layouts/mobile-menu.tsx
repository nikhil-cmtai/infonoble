"use client";

import Link from "next/link";
import { X } from "lucide-react";
import React from "react";

type SubMenuItem = { label: string; href: string };
type MegaMenu = { heading: string; headingClass: string; items: SubMenuItem[] };
type ProductMenu = { title: string; desc: string; href: string };
type NavItem = {
  label: string;
  submenu?: (MegaMenu | ProductMenu)[];
  isMega?: boolean;
  isProductMega?: boolean;
  isSolutionsMega?: boolean;
};

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({ open, onClose, navItems }: MobileMenuProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[999]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/20"
        onClick={onClose}
        aria-label="Close menu"
      />
      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-1/2 bg-white flex flex-col p-6 animate-fade-in-up overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <span className="text-2xl font-bold text-[hsl(var(--foreground))]">
            INFO<span className="text-orange-500">NOBLE</span>
          </span>
          <button
            className="p-2 rounded-full hover:bg-[hsl(var(--muted))] focus:outline-none"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="w-7 h-7 text-[hsl(var(--foreground))]" />
          </button>
        </div>
        <nav className="flex flex-col gap-6 text-lg font-semibold">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href="#"
                className="block py-2 px-2 rounded-lg text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition"
                onClick={onClose}
              >
                {item.label}
              </Link>
              {/* If submenu, show as sublist */}
              {item.submenu && Array.isArray(item.submenu) && (
                <div className="pl-4 mt-1 flex flex-col gap-2">
                  {item.submenu.map((sub, subIdx) => {
                    // Mega menu (has items)
                    if ('items' in sub && Array.isArray(sub.items)) {
                      return (
                        <div key={subIdx}>
                          <div className="text-sm font-bold text-orange-500 mb-1">
                            {'heading' in sub ? sub.heading : ''}
                          </div>
                          <ul className="flex flex-col gap-1 mb-2">
                            {sub.items.map((s, i) => (
                              <li key={i}>
                                <Link
                                  href={s.href || '#'}
                                  className="block text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] py-1"
                                  onClick={onClose}
                                >
                                  {s.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    // Product/solution menu (has title)
                    if ('title' in sub && sub.title) {
                      return (
                        <Link
                          key={subIdx}
                          href={sub.href || '#'}
                          className="block text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] py-1"
                          onClick={onClose}
                        >
                          {sub.title}
                        </Link>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
          ))}
          <Link
            href="#"
            className="mt-8 px-6 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold shadow hover:bg-[hsl(var(--secondary))] transition-all text-center"
          >
            Request a Demo
          </Link>
        </nav>
      </div>
    </div>
  );
}   
