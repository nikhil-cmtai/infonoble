import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="w-full px-4 md:px-24 py-14 my-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-white/20 relative overflow-hidden">
            {/* Decorative Sparkles Icon */}
            <div className="absolute -top-8 -left-8 opacity-30 blur-xl pointer-events-none">
                <Sparkles className="w-32 h-32 text-white" />
            </div>
            <div className="w-full md:w-2/3 z-10 text-center md:text-left px-6">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-2 drop-shadow-lg">Ready to Experience Superior Voice Quality?</h2>
                <p className="text-lg md:text-xl font-medium drop-shadow-sm">Join Infonoble today and transform your business communication.</p>
            </div>
            <Link
                href="/contact"
                className="z-10 px-10 py-4 rounded-full bg-white text-cyan-600 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-200 border-2 border-white/60 focus:outline-none focus:ring-4 focus:ring-cyan-300"
            >
                Get Started
            </Link>
            {/* Decorative Glow */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
};

export default CTASection;