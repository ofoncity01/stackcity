"use client";

import { useState, useEffect } from "react";
import { Menu, X, Building2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center shadow-md group-hover:bg-yellow-400 transition-colors duration-200">
              <Building2 className="w-5 h-5 text-white group-hover:text-black transition-colors duration-200" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-zinc-900" : "text-white"}`}>
              City<span className="text-yellow-400">Stack</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 group ${
                  scrolled
                    ? "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                    : "text-white/80 hover:text-white hover:bg-white/8"
                }`}
              >
                {link.label}
                {/* Yellow underline slide-in on hover */}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-yellow-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-bold rounded-lg transition-all duration-200 shadow-md shadow-yellow-400/25 hover:shadow-yellow-400/40 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
              scrolled
                ? "text-zinc-900 hover:bg-zinc-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-zinc-950 border-t border-white/5 -mx-4 sm:-mx-6 px-4 sm:px-6 pb-6 pt-3 shadow-2xl">

            {/* Links */}
            <div className="flex flex-col gap-0.5 mb-5">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="group flex items-center gap-4 px-3 py-3.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-150"
                >
                  <span className="text-[10px] font-mono text-zinc-700 group-hover:text-yellow-400 transition-colors duration-150 w-5 shrink-0 tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-medium">{link.label}</span>
                  <span className="ml-auto w-1 h-4 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0" />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/5 mb-5" />

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="flex items-center justify-center px-4 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-bold rounded-xl transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
