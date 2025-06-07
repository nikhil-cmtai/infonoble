'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import {
    Phone,
    MessageSquare,
    Puzzle,
    Rocket,
    Cloud,
    Mic,
    Plus
} from 'lucide-react';

const features = [
    {
        title: 'Crystal Clear Quality Calls',
        icon: <Phone className="w-6 h-6 text-[hsl(var(--primary))]" />,
        desc: 'Experience HD voice quality and reliable connections for every customer conversation.'
    },
    {
        title: 'Streamline Your Communication',
        icon: <MessageSquare className="w-6 h-6 text-[hsl(var(--secondary))]" />,
        desc: 'Integrate all your channels—voice, chat, and more—into a single, seamless platform.'
    },
    {
        title: '15+ CRM Integrations',
        icon: <Puzzle className="w-6 h-6 text-orange-400" />,
        desc: 'Connect with your favorite CRMs and tools for a unified workflow.'
    },
    {
        title: 'Automate with Workflows & Chatbots',
        icon: <Rocket className="w-6 h-6 text-purple-400" />,
        desc: 'Automate repetitive tasks and boost efficiency with smart workflows and chatbots.'
    },
];

const quickFeatures = [
    {
        label: 'Cloud-based',
        icon: <Cloud className="w-5 h-5 text-pink-500" />,
    },
    {
        label: 'High-quality voice',
        icon: <Mic className="w-5 h-5 text-pink-500" />,
    },
    {
        label: 'Deployed in minutes',
        icon: <Rocket className="w-5 h-5 text-pink-500" />,
    },
];

const ImproveSection = () => {
    // By default, first item open
    const [openIdx, setOpenIdx] = useState<number>(0);
    return (
        <section className="w-full py-24 px-6 md:px-16 bg-[hsl(var(--background))] relative overflow-hidden">
            {/* Animated Background Blobs & Gradient */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute left-[-15%] top-[-10%] w-[40vw] h-[40vw] bg-gradient-radial from-blue-100 via-white/60 to-transparent opacity-50" />
                <div className="absolute right-[-10%] bottom-[-10%] w-[32vw] h-[32vw] bg-gradient-radial from-purple-200 via-white/60 to-transparent opacity-30" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-0 md:px-8">
                {/* Left Side: Text & Features */}
                <div className="flex-1 flex flex-col items-start gap-8 max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] leading-tight">
                        Improving Customer Experience in the GCC
                    </h2>
                    {/* Quick Features Row */}
                    <div className="flex flex-row items-center gap-8 mt-2">
                        {quickFeatures.map((f, i) => (
                            <div key={i} className="flex items-center gap-2">
                                {f.icon}
                                <span className="text-base font-medium text-pink-600">{f.label}</span>
                            </div>
                        ))}
                    </div>
                    {/* Feature Accordion */}
                    <div className="mt-6 flex flex-col gap-4 w-full">
                        {features.map((f, i) => {
                            const isOpen = openIdx === i;
                            return (
                                <div
                                    key={i}
                                    className={`flex flex-col bg-[hsl(var(--muted))] rounded-2xl px-6 py-3 shadow-sm transition group cursor-pointer ${isOpen ? 'shadow-md' : ''}`}
                                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <span>{f.icon}</span>
                                            <span className="text-lg font-semibold text-[hsl(var(--foreground))]">{f.title}</span>
                                        </div>
                                        <button
                                            className={`w-8 h-8 flex items-center justify-center rounded-full bg-pink-100 group-hover:bg-pink-200 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                                            tabIndex={-1}
                                            aria-label={isOpen ? 'Collapse' : 'Expand'}
                                            onClick={e => { e.stopPropagation(); setOpenIdx(isOpen ? -1 : i); }}
                                        >
                                            <Plus className="w-5 h-5 text-pink-500" />
                                        </button>
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-32 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="text-[hsl(var(--muted-foreground))] text-base pl-10 pr-2">
                                            {f.desc}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Right Side: Illustration/Image */}
                <div className="flex-1 flex items-center justify-center mt-12 md:mt-0">
                    <div className="relative flex items-center justify-center w-[340px] h-[340px] md:w-[400px] md:h-[400px] aspect-square rounded-full bg-gradient-to-br from-blue-100 via-white to-purple-100 shadow-xl overflow-hidden">
                        {/* Floating animated icons */}
                        <div className="absolute inset-0 pointer-events-none z-20">
                            <span className="absolute top-[10%] left-[6%] icon-float1">
                                <Cloud className="w-7 h-7 text-pink-500 bg-white rounded-full p-1 shadow" />
                            </span>
                            <span className="absolute top-[16%] right-[8%] icon-float2">
                                <Rocket className="w-7 h-7 text-purple-500 bg-white rounded-full p-1 shadow" />
                            </span>
                            <span className="absolute bottom-[10%] left-[12%] icon-float3">
                                <Mic className="w-7 h-7 text-cyan-500 bg-white rounded-full p-1 shadow" />
                            </span>
                            <span className="absolute bottom-[8%] right-[10%] icon-float4">
                                <MessageSquare className="w-7 h-7 text-orange-400 bg-white rounded-full p-1 shadow" />
                            </span>
                        </div>
                        <style jsx>{`
                            @keyframes float1 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-12px);} }
                            @keyframes float2 { 0%,100%{transform:scale(1);} 50%{transform:scale(1.13);} }
                            @keyframes float3 { 0%,100%{transform:translateX(0);} 50%{transform:translateX(14px);} }
                            @keyframes float4 { 0%,100%{transform:rotate(0);} 50%{transform:rotate(18deg);} }
                            .icon-float1 { animation: float1 4.2s ease-in-out infinite; }
                            .icon-float2 { animation: float2 4.8s ease-in-out infinite; }
                            .icon-float3 { animation: float3 4.5s ease-in-out infinite; }
                            .icon-float4 { animation: float4 5.2s ease-in-out infinite; }
                        `}</style>
                        {/* Main Illustration */}
                        <Image
                            src="/home2.png"
                            alt="Customer Experience"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImproveSection;
