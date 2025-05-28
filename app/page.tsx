import HeroSection from "@/components/home/hero-section";
import ImproveSection from "@/components/home/improve-section";
import BannerSection from "@/components/home/banner-section";
import WhyChooseSection from "@/components/home/why-choose-section";
import BlogsSection from "@/components/home/blogs-section";
import ProductSection from "@/components/home/products-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImproveSection />
      <ProductSection />
      <WhyChooseSection />
      <BlogsSection />
      <BannerSection />
    </div>
  )
}