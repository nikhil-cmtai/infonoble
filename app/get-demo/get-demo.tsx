'use client';

import React, { useState } from "react";
import HeroSection from "@/components/all/hero-section";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarCheck, MessageCircle, ShieldCheck, HelpCircle, Loader2, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const benefits = [
    {
        icon: <CalendarCheck className="w-7 h-7 text-cyan-600" />,
        title: "Personalized Walkthrough",
        desc: "See exactly how our platform fits your business needs."
    },
    {
        icon: <MessageCircle className="w-7 h-7 text-orange-500" />,
        title: "Expert Guidance",
        desc: "Get answers to all your questions from our product specialists."
    },
    {
        icon: <ShieldCheck className="w-7 h-7 text-green-500" />,
        title: "No Obligation",
        desc: "Experience the platform risk-free—no pressure, no commitment."
    },
];

const faqs = [
    {
        q: "How secure is my data?",
        a: "We use industry-leading encryption and follow strict compliance standards to keep your data safe."
    },
    {
        q: "Can I integrate with my existing tools?",
        a: "Yes, our platform supports integrations with popular CRMs, communication tools, and more."
    },
    {
        q: "Is support available after onboarding?",
        a: "Absolutely! Our support team is available 24/7 to assist you at every step."
    },
];
    
const companySizes = [
    { value: '', label: 'Select Company Size' },
    { value: '1-30', label: '1-30' },
    { value: '31-50', label: '31-50' },
    { value: '51-100', label: '51-100' },
    { value: '101-200', label: '101-200' },
    { value: '201-500', label: '201-500' },
    { value: '500+', label: '500 & above' },
];

export default function GetDemo() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        message: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleCompanySize = (value: string) => {
        setForm({ ...form, companySize: value });
        setErrors({ ...errors, companySize: '' });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.name.trim()) newErrors.name = 'Name is required.';
        if (!form.email.trim()) newErrors.email = 'Email is required.';
        if (!form.companySize) newErrors.companySize = 'Please select company size.';
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(false);
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setForm({ name: '', email: '', phone: '', company: '', companySize: '', message: '' });
        }, 1800);
    };

    return (
        <div className="bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--secondary)/0.07)] to-[hsl(var(--accent)/0.10)] min-h-screen">
            <HeroSection
                title="Get a Demo"
                description="We'll help you get started with our products and services. Book a personalized walkthrough with our experts."
                imageSrc="/banner/book-demo.jpg"
            />
            {/* Demo Request Form */}
            <section className="max-w-2xl mx-auto px-4 py-12">
                <div className="bg-white/80 rounded-xl shadow-lg border border-[hsl(var(--border))] p-8 flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mb-2">Request Your Free Demo</h2>
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit} autoComplete="off">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 flex flex-col gap-1">
                                <Label htmlFor="name" className="font-medium text-[hsl(var(--primary))]">Name <span className="text-red-500">*</span></Label>
                                <Input name="name" id="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} className={errors.name ? 'border-red-500' : ''} required />
                                {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name}</span>}
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                                <Label htmlFor="email" className="font-medium text-[hsl(var(--primary))]">Email <span className="text-red-500">*</span></Label>
                                <Input name="email" id="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className={errors.email ? 'border-red-500' : ''} required />
                                {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 flex flex-col gap-1">
                                <Label htmlFor="phone" className="font-medium text-[hsl(var(--primary))]">Phone</Label>
                                <Input name="phone" id="phone" type="text" placeholder="Phone" value={form.phone} onChange={handleChange} />
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                                <Label htmlFor="company" className="font-medium text-[hsl(var(--primary))]">Company</Label>
                                <Input name="company" id="company" type="text" placeholder="Company" value={form.company} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Label className="font-medium text-[hsl(var(--primary))]">Company Size <span className="text-red-500">*</span></Label>
                            <Select value={form.companySize} onValueChange={handleCompanySize} required>
                                <SelectTrigger className={`px-4 py-2 rounded-lg border bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] ${errors.companySize ? 'border-red-500' : 'border-[hsl(var(--border))]'}`}>
                                    <SelectValue placeholder="Select Company Size" />
                                </SelectTrigger>
                                <SelectContent className="z-[1000]">
                                    {companySizes.filter(size => size.value !== '').map((size) => (
                                        <SelectItem key={size.value} value={size.value}>
                                            {size.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.companySize && <span className="text-xs text-red-500 mt-1">{errors.companySize}</span>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="message" className="font-medium text-[hsl(var(--primary))]">Message</Label>
                            <Textarea name="message" id="message" placeholder="Message" rows={3} value={form.message} onChange={handleChange} />
                        </div>
                        <Button
                            type="submit"
                            className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold shadow transition-all text-lg flex items-center justify-center gap-2 disabled:opacity-60"
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <></>}
                            {loading ? "Booking..." : "Book My Demo"}
                        </Button>
                        {success && (
                            <div className="flex items-center gap-2 mt-2 text-green-600 font-semibold">
                                <CheckCircle className="w-5 h-5" />
                                Thank you! Your demo request has been received.
                            </div>
                        )}
                    </form>
                </div>
            </section>
            
            {/* Benefits Section */}
            <section className="max-w-5xl mx-auto px-4 py-12">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[hsl(var(--primary))]">Why Book a Demo?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {benefits.map((b, i) => (
                        <div key={i} className="flex flex-col items-center bg-white/80 backdrop-blur-xl rounded-2xl shadow p-6 border border-[hsl(var(--border))]">
                            <div className="mb-2">{b.icon}</div>
                            <div className="font-bold text-lg text-[hsl(var(--primary))] mb-1">{b.title}</div>
                            <div className="text-[hsl(var(--muted-foreground))] text-center">{b.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-3xl mx-auto px-4 py-12">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[hsl(var(--primary))]">FAQs</h3>
                <div className="flex flex-col gap-6">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white/80 backdrop-blur-xl rounded-xl shadow p-6 border border-[hsl(var(--border))]">
                            <div className="flex items-center gap-3 mb-2">
                                <HelpCircle className="w-5 h-5 text-orange-500" />
                                <span className="font-bold text-[hsl(var(--primary))]">{f.q}</span>
                            </div>
                            <div className="text-[hsl(var(--muted-foreground))] ml-8">{f.a}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
