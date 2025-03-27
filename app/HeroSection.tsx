// "use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="w-full relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90 z-0"></div>
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: "url('/wave-pattern.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto px-6 py-24 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12 max-w-7xl">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hanké<span className="text-[#d4a76a]">Tissue</span>
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            <span className="block">Experience Luxury</span>
            <span className="block text-[#d4a76a]">In Every Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            Discover our premium 2-ply tissues, crafted with elegance and
            comfort in mind. Elevate your everyday moments with our exquisite
            designs and superior softness.
          </p>
          <div className="pt-4">
            <Link
              href="#products"
              className="inline-flex items-center rounded-md bg-[#8e2a3c] px-6 py-3 text-white hover:bg-[#7a1f30] transition-all"
            >
              Explore Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design.png-mz3gJd4D0X5t0bHAVflGaKdDJwnnoR.webp"
              alt="Premium Tissue Box"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl transform rotate-3 z-20 relative"
            />
            <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 z-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design_02.png-d8H7QgvM3uRrRf2PdYsZTjCmPeeN4R.webp"
                alt="Premium Tissue Box Design"
                width={250}
                height={250}
                className="rounded-lg shadow-2xl transform -rotate-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
