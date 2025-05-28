'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: 'Enhancing Customer Support with Smart Call Handling',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
    date: 'May 30, 2025',
    author: 'Ravi Mehta',
  },
  {
    id: 2,
    title: 'Boosting Support Team Efficiency with the Right Tools',
    image: 'https://images.unsplash.com/photo-1748199625283-581bc1e9b1a8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'June 3, 2025',
    author: 'Anjali Verma',
  },
  {
    id: 3,
    title: 'Automated Call Handling: Saving Time and Resources',
    image: 'https://images.unsplash.com/photo-1748199625283-581bc1e9b1a8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'June 7, 2025',
    author: 'Mohammed Qureshi',
  },
  {
    id: 4,
    title: 'Simple Strategies to Enhance Customer Experience',
    image: 'https://images.unsplash.com/photo-1748199625283-581bc1e9b1a8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'June 11, 2025',
    author: 'Priya Sharma',
  },
  {
    id: 5,
    title: 'Essential Support Tools Every Business Should Have',
    image: 'https://images.unsplash.com/photo-1748199625283-581bc1e9b1a8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'June 15, 2025',
    author: 'Amit Joshi',
  },
  {
    id: 6,
    title: 'Ensuring Prompt Responses to Customer Inquiries',
    image: 'https://images.unsplash.com/photo-1748199625283-581bc1e9b1a8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'June 18, 2025',
    author: 'Sneha Kapoor',
  },
  {
    id: 7,
    title: 'Leveraging Call Data for Business Insights',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    date: 'June 22, 2025',
    author: 'Raj Malhotra',
  },
];

export default function BlogsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[hsl(var(--background))]">
      {/* Animated Theme Blobs (matching hero section) */}
      <div className="absolute left-[-20%] top-[-20%] w-[70vw] h-[70vw] bg-gradient-radial from-cyan-100 via-white/60 to-transparent opacity-70 z-0 pointer-events-none" />
      <div className="absolute right-[-15%] bottom-[-15%] w-[60vw] h-[60vw] bg-gradient-radial from-blue-100 via-white/60 to-transparent opacity-60 z-0 pointer-events-none" />
      <div className="absolute z-0 top-[-120px] left-[-120px] w-[340px] h-[340px] bg-[hsl(var(--primary))] opacity-30 rounded-full blur-3xl animate-blob1" />
      <div className="absolute z-0 bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[hsl(var(--secondary))] opacity-30 rounded-full blur-3xl animate-blob2" />
      <div className="absolute z-0 top-1/2 left-[60%] w-[220px] h-[220px] bg-orange-300 opacity-20 rounded-full blur-2xl animate-blob3" />
      <div className="absolute z-0 top-[10%] right-[20%] w-[180px] h-[180px] bg-purple-300 opacity-20 rounded-full blur-2xl animate-blob4" />
      <div className="absolute z-0 bottom-[15%] left-[15%] w-[160px] h-[160px] bg-yellow-200 opacity-20 rounded-full blur-2xl animate-blob5" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">  
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[hsl(var(--foreground))]">
          Latest <span className="text-[hsl(var(--primary))]">Blogs</span>
        </h2>
        <p className="text-center text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-10 max-w-2xl mx-auto font-medium">
          Insights, tips, and the latest trends to help you deliver world-class customer experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 6).map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <button className="px-8 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold shadow hover:bg-[hsl(var(--secondary))] transition-colors">
            View All Blogs
          </button>
        </div>
      </div>
      {/* Animations for blobs (copied from hero section) */}
      <style jsx>{`
        @keyframes blob1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(40px) scale(1.08); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.04); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(-40px) scale(1.1); }
        }
        @keyframes blob4 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(30px) scale(1.07) rotate(8deg); }
        }
        @keyframes blob5 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(30px) scale(1.09) rotate(-6deg); }
        }
        .animate-blob1 { animation: blob1 12s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 14s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 16s ease-in-out infinite; }
        .animate-blob4 { animation: blob4 18s ease-in-out infinite; }
        .animate-blob5 { animation: blob5 20s ease-in-out infinite; }
        @keyframes fade-up { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
        .animate-fade-up { animation: fade-up 0.7s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </section>
  );
}

function BlogCard({ blog, index }: { blog: Blog, index: number }) {
  return (
    <div
      className="relative group bg-white/60 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 border border-[hsl(var(--border))] animate-fade-up"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
      tabIndex={0}
      aria-label={blog.title}
    >
      {/* Accent bar with animated dot */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-l-2xl flex items-center justify-center">
        <span className="block w-2 h-2 rounded-full bg-[hsl(var(--primary))] animate-pulse-dot mt-4" />
      </div>
      {/* Image with overlay */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-t-2xl shadow-lg">
        <Image src={blog.image} alt={blog.title} fill className="object-cover w-full h-full transition-transform duration-500 rounded-t-2xl" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />
      </div>
      <div className="flex-1 flex flex-col gap-2 p-6 pb-5">
        <h3 className="font-bold text-lg text-[hsl(var(--foreground))] transition-colors duration-300 group-hover:text-[hsl(var(--primary))] line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-[hsl(var(--muted-foreground))] text-sm mb-2 line-clamp-2 opacity-80">
          Elevate your customer experience with the latest strategies and tools. Discover how to make every interaction count.
        </p>
        <div className="flex-1" />
        <button
          className="mt-2 w-full inline-flex items-center justify-center gap-2 px-0 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary)/0.1)] to-[hsl(var(--secondary)/0.1)] border-2 border-transparent text-[hsl(var(--primary))] font-semibold shadow-md hover:shadow-lg hover:bg-gradient-to-l hover:from-[hsl(var(--primary)/0.15)] hover:to-[hsl(var(--secondary)/0.15)] hover:text-black transition-all duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
          aria-label={`Read more about ${blog.title}`}
        >
          Read More <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <style jsx>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        .animate-pulse-dot { animation: pulse-dot 1.2s infinite; }
      `}</style>
    </div>
  );
}

type Blog = {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
};

// Add slow pulse animation for the second blob
// Add this to your global CSS if not present:
// @keyframes pulse-slow { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.7; } }
// .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
// Add fade-up animation for cards if not present:
// @keyframes fade-up { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
// .animate-fade-up { animation: fade-up 0.7s cubic-bezier(.4,0,.2,1) both; }
