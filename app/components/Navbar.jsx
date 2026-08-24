"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50 p-5">
      <section className="container mx-auto flex justify-between items-center">
        <div className="flex gap-5 md:mx-0 mx-auto items-center ">
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
            <p>DSI Moving & Storage</p>
          </a>
        </div>

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
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600 transition font-bold"
          >
            Contact
          </a>
        </article>
        {isMenuOpen && (
          <article className="md:hidden flex flex-col space-y-4 mt-4 pb-4 border-t border-blue-800 pt-4">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600 transition"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600 transition"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-600 transition"
            >
              About
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
