import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Companies from "@/components/landing/Companies";
import Features from "@/components/landing/Features";

import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Stats from "@/components/landing/stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
     <Stats/>
     <HowItWorks/>
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}