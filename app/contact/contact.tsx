import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import HeroSection from "@/components/all/hero-section";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">
      <HeroSection
        title="Contact Us"
        description="We&rsquo;d love to hear from you. Reach out and our team will get back to you soon."
        imageSrc="/banner/contact.png"
      />
      {/* Contact Details & Form */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-24">
        <div className="max-w-3xl mx-auto px-4 relative z-10 p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--foreground))]">Get in touch</h1>
        </div>
        <div className="bg-white/60 backdrop-blur-2xl rounded-xl shadow-lg border border-[hsl(var(--border))] p-8 md:p-16 flex flex-col md:flex-row gap-12">
          {/* Left: Details */}
          <div className="flex-1 flex flex-col gap-8 justify-center">
            <div className="flex items-center gap-4">
              <MapPin className="w-7 h-7 text-[hsl(var(--primary))]" />
              <div>
                <div className="font-bold text-lg text-[hsl(var(--foreground))]">Address</div>
                <div className="text-[hsl(var(--muted-foreground))]">123 Business Bay, Dubai, UAE</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-7 h-7 text-[hsl(var(--primary))]" />
              <div>
                <div className="font-bold text-lg text-[hsl(var(--foreground))]">Phone</div>
                <div className="text-[hsl(var(--muted-foreground))]">+971 4 123 4567</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-7 h-7 text-[hsl(var(--primary))]" />
              <div>
                <div className="font-bold text-lg text-[hsl(var(--foreground))]">Email</div>
                <div className="text-[hsl(var(--muted-foreground))]">support@infonoble.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-7 h-7 text-[hsl(var(--primary))]" />
              <div>
                <div className="font-bold text-lg text-[hsl(var(--foreground))]">Support Hours</div>
                <div className="text-[hsl(var(--muted-foreground))]">Mon–Fri: 9am – 6pm</div>
              </div>
            </div>
          </div>
          {/* Right: Form */}
          <form className="flex-1 flex flex-col gap-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-md p-8 border border-[hsl(var(--border))]">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-white/80 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-white/80 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              className="px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-white/80 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-white/80 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] resize-none"
              required
            />
            <button
              type="submit"
              className="mt-2 px-8 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold shadow hover:bg-[hsl(var(--secondary))] transition-colors text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

