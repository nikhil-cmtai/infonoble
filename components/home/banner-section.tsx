
export default function BannerSection() {
  return (
    <section className="w-full bg-[hsl(var(--background))] px-0 py-20 relative overflow-hidden flex items-center justify-center">
      {/* Subtle background gradient/blob */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[60vw] bg-gradient-to-br from-blue-100 via-white/60 to-orange-100 opacity-60 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        {/* Left: Content */}
        <div className="flex flex-col items-start justify-center gap-6 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))]">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-xl">
            Start your journey with <span className="text-orange-500 font-semibold">INFONOBLE</span> today and see the difference.
          </p>
        </div>
        {/* Right: Form */}
        <form className="flex flex-col gap-3 w-full  mx-auto">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="px-3 py-2 rounded-lg text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition w-1/2"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-3 py-2 rounded-lg text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition w-1/2"
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="px-3 py-2 rounded-lg text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition"
            required
          />
          <button
            type="submit"
            className="mt-2 px-6 py-2 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-base font-bold shadow hover:bg-[hsl(var(--secondary))] transition-colors"
          >
            Book a Demo
          </button>
        </form>
      </div>
    </section>
  );
}   
