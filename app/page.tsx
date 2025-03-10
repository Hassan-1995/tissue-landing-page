"use client";
import Image from "next/image";
import {
  Check,
  Star,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./NavBar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import ProductSection from "./ProductSection";
import OffersSection from "./OffersSection";
import TestimonialSection from "./TestimonialSection";
import ContactSection from "./ContactSection";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Simple Header */}
      <Navbar />

      {/* Home/Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeatureSection />

      {/* Products Section */}
      <ProductSection />

      {/* Offers Section */}
      <OffersSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
