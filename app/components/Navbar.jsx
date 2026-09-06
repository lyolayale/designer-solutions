"use client";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { BUSINESS } from "../../lib/business";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <nav className="bg-gradient-to-r from-blue-950/95 via-blue-900/95 to-blue-950/95 text-white shadow-lg shadow-blue-950/20 sticky top-0 z-50 py-3 backdrop-blur-xl border-b border-white/10 pl-5">
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
                alt={BUSINESS.imageAlt}
                className="object-contain rounded brightness-125 relative z-10 transition-transform duration-300 group-hover:scale-110"
                priority
                width={50}
                height={50}
              />
            </a>
            <a href="#" className="group">
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300 tracking-tight">
                {BUSINESS.legalName}
              </h2>
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                {BUSINESS.brandName}
              </p>
            </a>
          </div>

          {/* Hamburger Menu Button (visible on mobile only) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
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
          {mounted && (
            <button
              onClick={toggleTheme}
              className="text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <svg
                  className="w-5 h-5 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          )}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="hidden lg:flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            {BUSINESS.phoneDisplay}
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
            {mounted && (
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <>
                    <svg
                      className="w-5 h-5 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="font-medium">Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                    <span className="font-medium">Dark Mode</span>
                  </>
                )}
              </button>
            )}
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
