"use client";

import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import RotatingIcons from "@/components/RotatingIcons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <Hero />

      {/* Company Logos Section (now a component) */}
      <CompanyLogos />

      {/* Rotating Icons Section */}
      <RotatingIcons />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section (now a component) */}
      <Testimonials/>

      <Footer />
    </div>
  );
}
