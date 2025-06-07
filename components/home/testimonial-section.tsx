import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Khan",
    company: "Al Noor Group",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Infonoble's platform has transformed our customer support. The call quality and analytics are top-notch!",
  },
  {
    name: "Omar Al-Farsi",
    company: "GCC Retail",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Seamless omnichannel support and easy CRM integration. Our team is more productive than ever!",
  },
  {
    name: "Priya Sharma",
    company: "FinServe ME",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "The automation and reporting features are a game changer. Highly recommend Infonoble for any modern business.",
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[hsl(var(--background))]">
      {/* Animated Theme Blobs */}
      <div className="absolute left-[-20%] top-[-20%] w-[70vw] h-[70vw] bg-gradient-radial from-cyan-100 via-white/60 to-transparent opacity-70 z-0 pointer-events-none" />
      <div className="absolute right-[-15%] bottom-[-15%] w-[60vw] h-[60vw] bg-gradient-radial from-blue-100 via-white/60 to-transparent opacity-60 z-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[hsl(var(--foreground))]">
          What Our <span className="text-[hsl(var(--primary))]">Clients Say</span>
        </h2>
        <p className="text-center text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-12 max-w-2xl mx-auto font-medium">
          Real stories from businesses who elevated their customer experience with Infonoble.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative group bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 border border-[hsl(var(--border))] transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] hover:scale-105 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
              style={{ minHeight: 380 }}
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-l-3xl" />
              {/* Faint quote icon */}
              <Quote className="absolute right-6 top-6 w-16 h-16 text-[hsl(var(--primary)/0.08)] z-0" />
              {/* Photo */}
              <div className="relative z-10 w-24 h-24 rounded-full border-4 border-[hsl(var(--primary))] bg-white shadow-lg flex items-center justify-center -mt-10">
                <Image src={t.image} alt={t.name} width={96} height={96} className="object-cover w-20 h-20 rounded-full" />
              </div>
              {/* Testimonial text */}
              <blockquote className="relative z-10 text-lg md:text-xl text-[hsl(var(--muted-foreground))] italic text-center font-medium leading-relaxed">
                “{t.text}”
              </blockquote>
              {/* Name & company */}
              <div className="relative z-10 text-center flex flex-col items-center gap-1 mt-2">
                <div className="font-bold text-lg text-[hsl(var(--foreground))]">{t.name}</div>
                <div className="px-3 py-1 rounded-full bg-[hsl(var(--primary)/0.12)] text-[hsl(var(--primary))] text-xs font-semibold shadow">
                  {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
