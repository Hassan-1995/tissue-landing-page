"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const links = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Offers", href: "#offers" },
    { label: "Contact", href: "#contact" },
  ];

  // Detect scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let newActiveSection = "#home"; // Default to home

      links.forEach((link) => {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (section) {
          const offset = section.offsetTop - 80; // Adjust for navbar height
          if (scrollPosition >= offset) {
            newActiveSection = link.href;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex bg-gray-900 w-screen items-center justify-between px-8 py-4 text-white sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">
        Sunny<span className="text-[#d4a76a]">Enterprises</span>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-lg font-medium transition-all ${
                link.href === activeSection
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-gray-300 hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300"
              }`}
              onClick={() => setActiveSection(link.href)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bg-gray-800 h-screen w-64 p-6 z-50 shadow-lg transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 left-4 text-white flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <ChevronLeft size={30} />
          <span className="ml-2 text-xl">Back</span>
        </button>
        <ul className="mt-12 space-y-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block text-lg font-bold p-2 rounded transition-colors ${
                  link.href === activeSection
                    ? "text-yellow-400 bg-gray-700"
                    : "text-white hover:text-yellow-300"
                }`}
                onClick={() => {
                  setActiveSection(link.href);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
