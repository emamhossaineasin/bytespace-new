import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import FeaturedCourses from "@/components/FeaturedCourses";
import Categories from "@/components/Categories";
import GrowthSection from "@/components/GrowthSection";
import CreatorSection from "@/components/CreatorSection";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Partners />
        <FeaturedCourses />
        <Categories />
        <GrowthSection />
        <CreatorSection />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}