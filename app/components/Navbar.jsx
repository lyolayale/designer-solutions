"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50 p-5">
      {/* Changed flex-row to flex-col on mobile to stack the menu nicely under the top bar */}
      <section className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Top Bar Wrapper */}
        <div className="flex justify-between items-center w-full md:w-auto">
          {/* Logo & Brand Info */}
          <div className="flex gap-5 items-center">
            <a href="#">
              <Image
                src="/mini-logo.avif"
                alt="Designer Solutions movers loading a truck in Tucker GA"
                className="object-contain rounded brightness-125"
                priority
                width={50}
                height={50}
              />
            </a>
            <a href="#">
              <h2 className="text-xl md:text-2xl font-bold text-blue-400">
                Designer Solutions, LLC
              </h2>
              <p className="text-sm">DSI Moving & Storage</p>
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
        <article className="hidden md:flex space-x-6 items-center">
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#pricing"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600 transition font-bold"
          >
            Contact
          </a>
        </article>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <article className="md:hidden flex flex-col space-y-4 mt-4 pb-4 border-t border-blue-800 pt-4 w-full">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              About
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600 transition font-bold text-center"
            >
              Get a Quote
            </a>
          </article>
        )}
      </section>
    </nav>
  );
}
