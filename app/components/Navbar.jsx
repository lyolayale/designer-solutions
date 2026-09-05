"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-xl sticky top-0 z-50 p-5 backdrop-blur-xl bg-opacity-95">
      {/* Changed flex-row to flex-col on mobile to stack the menu nicely under the top bar */}
      <section className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Top Bar Wrapper */}
        <div className="flex justify-between items-center w-full md:w-auto">
          {/* Logo & Brand Info */}
          <div className="flex gap-5 items-center group cursor-pointer">
            <a href="#" className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <Image
                src="/mini-logo.avif"
                alt="Designer Solutions movers loading a truck in Tucker GA"
                className="object-contain rounded brightness-125 relative z-10 transition-transform duration-300 group-hover:scale-110"
                priority
                width={50}
                height={50}
              />
            </a>
            <a href="#" className="group">
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300 tracking-tight">
                Designer Solutions, LLC
              </h2>
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                DSI Moving & Storage
              </p>
            </a>
          </div>

          {/* Hamburger Menu Button (visible on mobile only) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 height-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://w3.org"
            >
              {isMenuOpen ? (
                // "X" Close Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <article className="hidden md:flex space-x-8 items-center">
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="relative font-medium hover:text-blue-300 transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="relative font-medium hover:text-blue-300 transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="relative font-medium hover:text-blue-300 transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="#estimate"
            onClick={() => setIsMenuOpen(false)}
            className="relative font-medium hover:text-blue-300 transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Estimate
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2.5 rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 font-bold shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
          >
            Contact
          </a>
        </article>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <article className="md:hidden flex flex-col space-y-4 mt-4 pb-4 border-t border-blue-700/50 pt-4 w-full">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#estimate"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              Estimate
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2.5 rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 font-bold text-center shadow-lg"
            >
              Get a Quote
            </a>
          </article>
        )}
      </section>
    </nav>
  );
}
