"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaShieldHalved,
} from "react-icons/fa6";
import { BUSINESS, formattedAddress } from "../../lib/business";

export default function Footer() {
  const [status, setStatus] = useState("idle");

  const [localContact, setLocalContact] = useState({
    name: "",
    email: "",
    phone: "",
    move_date: "",
    orgin_address: "",
    destination_address: "",
    property_type: "Apartment", // Dynamic default
    num_bedrooms: "1", // Dynamic default
    details: "",
  });

  // Listen for the custom event sent out by the top generator component file
  useEffect(() => {
    const handleSync = e => {
      if (e.detail) {
        setLocalContact(prev => ({
          ...prev,
          property_type: e.detail.property_type || prev.property_type,
          num_bedrooms: e.detail.num_bedrooms || prev.num_bedrooms,
        }));
      }
    };

    window.addEventListener("syncMoveData", handleSync);
    return () => window.removeEventListener("syncMoveData", handleSync);
  }, []);

  const socials = [
    {
      id: 1,
      icon: <FaFacebook />,
      url: BUSINESS.social.facebook,
      label: "Facebook",
    },
    {
      id: 2,
      icon: <FaTiktok />,
      url: BUSINESS.social.tiktok,
      label: "TikTok",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      url: BUSINESS.social.instagram,
      label: "Instagram",
    },
  ].filter(social => social.url);

  const handleLocalChange = e =>
    setLocalContact({ ...localContact, [e.target.name]: e.target.value });

  const handleFinalBookingSubmit = async e => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(localContact),
      });
      if (response.ok) {
        setStatus("success");
        setLocalContact({
          name: "",
          email: "",
          phone: "",
          move_date: "",
          orgin_address: "",
          destination_address: "",
          property_type: "Apartment",
          num_bedrooms: "1",
          details: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <footer
      id="footer-booking-intake"
      className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white py-16 pb-8 border-t border-gray-800 dark:border-slate-800"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[20%] w-full">
        {/* Left Aspect Side Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-blue-400 dark:text-blue-300 tracking-tight">
            Ready to Book Your Move?
          </h2>
          <p className="mb-4 text-gray-400 dark:text-gray-300 leading-relaxed">
            Fill in your details below and our team will contact you with a
            personalized quote — usually within 24 hours.
          </p>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-400 hover:to-blue-500 dark:hover:from-blue-500 dark:hover:to-blue-600 transition-all duration-300 mb-12 inline-block shadow-lg shadow-blue-500/30 dark:shadow-blue-600/40 transform hover:scale-105"
          >
            📞 Call {BUSINESS.phoneDisplay}
          </a>
          <div
            id="contact"
            className="border-t border-gray-700 dark:border-slate-700 pt-8 mt-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-20"></div>
              <Image
                src="/mini-logo.avif"
                alt={BUSINESS.imageAlt}
                width={100}
                height={100}
                className="mt-10 rounded mb-5 relative z-10 transition-transform duration-300 hover:scale-110"
                priority
              />
            </div>
            <p className="text-xl font-bold mb-2 tracking-tight">
              <span className="text-blue-400 dark:text-blue-300">DSI</span>{" "}
              Moving & Storage
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              {formattedAddress}
            </p>
          </div>
          <div className="flex gap-5 mt-4 w-1/4">
            {socials.map(social => (
              <Link
                key={social.id}
                href={social.url}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 text-2xl transform hover:scale-110"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Aspect Side Column: Linked Intake Form */}
        <div className="bg-gray-800/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700 dark:border-slate-600 w-100 m-auto">
          <h3 className="text-xl font-bold mb-5 border-b border-gray-700 dark:border-slate-600 pb-2.5 tracking-tight">
            Request Your Free Quote
          </h3>

          {status === "success" ? (
            <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 p-4 rounded-xl text-center text-sm font-bold shadow-lg">
              Thank you! We&apos;ve received your request and will be in touch
              shortly.
            </div>
          ) : (
            <form onSubmit={handleFinalBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1 text-gray-300 dark:text-gray-400 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={localContact.name}
                    onChange={handleLocalChange}
                    className="w-full p-2.5 rounded-lg bg-gray-700/80 dark:bg-slate-700/80 text-white border border-gray-600 dark:border-slate-600 text-xs focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-gray-300 dark:text-gray-400 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={localContact.email}
                    onChange={handleLocalChange}
                    className="w-full p-2.5 rounded-lg bg-gray-700/80 dark:bg-slate-700/80 text-white border border-gray-600 dark:border-slate-600 text-xs focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1 text-gray-300 dark:text-gray-400 font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={localContact.phone}
                    onChange={handleLocalChange}
                    className="w-full p-2.5 rounded-lg bg-gray-700/80 dark:bg-slate-700/80 text-white border border-gray-600 dark:border-slate-600 text-xs focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-gray-300 dark:text-gray-400 font-medium">
                    Moving Date
                  </label>
                  <input
                    type="date"
                    name="move_date"
                    value={localContact.move_date}
                    onChange={handleLocalChange}
                    className="w-full p-2.5 rounded-lg bg-gray-700/80 dark:bg-slate-700/80 text-white border border-gray-600 dark:border-slate-600 text-xs focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1 text-gray-300 dark:text-gray-400 font-medium">
                    Origin Street
                  </label>
                  <input
                    type="text"
                    name="orgin_address"
                    value={localContact.orgin_address}
                    onChange={handleLocalChange}
                    placeholder="From Address"
                    className="w-full p-2.5 rounded-lg bg-gray-700/80 dark:bg-slate-700/80 text-white border border-gray-600 dark:border-slate-600 text-xs focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-gray-300 dark:text-gray-400 font-medium">
                    Destination Street
                  </label>
                  <input
                    type="text"
                    name="destination_address"
                    value={localContact.destination_address}
                    onChange={handleLocalChange}
                    placeholder="To Address"
                    className="w-full p-2.5 rounded-lg bg-gray-700/80 dark:bg-slate-700/80 text-white border border-gray-600 dark:border-slate-600 text-xs focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1 text-blue-400 dark:text-blue-300 font-semibold">
                    Property Type
                  </label>
                  <select
                    name="property_type"
                    value={localContact.property_type}
                    onChange={handleLocalChange}
                    className="w-full p-2.5 rounded-lg bg-gray-700/80 dark:bg-slate-700/80 text-white border border-blue-500/40 dark:border-blue-400/40 text-xs focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none cursor-pointer transition-all duration-300"
                  >
                    {[
                      "House",
                      "Townhouse",
                      "Apartment",
                      "Condo",
                      "Commercial Building",
                      "Other",
                    ].map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs mb-1 text-blue-400 dark:text-blue-300 font-semibold">
                    Number of Bedrooms
                  </label>
                  <select
                    name="num_bedrooms"
                    value={localContact.num_bedrooms}
                    onChange={handleLocalChange}
                    className="w-full p-2.5 rounded-lg bg-gray-700/80 dark:bg-slate-700/80 text-white border border-blue-500/40 dark:border-blue-400/40 text-xs focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none cursor-pointer transition-all duration-300"
                  >
                    <option value="1">1 Bedroom / Studio</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4+">4+ Bedrooms</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs mb-1 text-gray-300 dark:text-gray-400 font-medium">
                  Special Items or Details (Optional)
                </label>
                <textarea
                  name="details"
                  rows="2"
                  value={localContact.details}
                  onChange={handleLocalChange}
                  className="w-full p-2.5 rounded-lg bg-gray-700/80 dark:bg-slate-700/80 text-white border border-gray-600 dark:border-slate-600 text-xs focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none resize-none transition-all duration-300"
                  placeholder="Pianos, stairs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white font-bold py-3 rounded-xl hover:from-blue-400 hover:to-blue-500 dark:hover:from-blue-500 dark:hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/30 dark:shadow-blue-600/40 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === "loading" ? "Processing..." : "Submit Request"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Company Info & Copyright Bar */}
      <div className="mt-16 pt-10 border-t border-gray-800 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
            {/* Company Identity */}
            <div className="text-center md:text-left">
              <p className="text-xl font-bold tracking-tight text-white">
                <span className="text-blue-400 dark:text-blue-300">DSI</span>{" "}
                Moving &amp; Storage
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-1 mb-5">
                {BUSINESS.legalName}
              </p>
              {socials.length > 0 && (
                <div className="flex justify-center md:justify-start gap-3">
                  {socials.map(social => (
                    <Link
                      key={social.id}
                      href={social.url}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 dark:bg-slate-800 border border-gray-700 dark:border-slate-600 text-gray-400 dark:text-gray-300 hover:text-white hover:bg-blue-500 hover:border-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all duration-300 transform hover:scale-110"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Details */}
            <div className="text-center md:text-left">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-400 dark:text-blue-300 mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3 text-gray-400 dark:text-gray-300">
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <FaLocationDot
                    className="mt-1 text-blue-400 dark:text-blue-300 shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formattedAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    {formattedAddress}
                  </a>
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <FaPhone
                    className="mt-1 text-blue-400 dark:text-blue-300 shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <FaEnvelope
                    className="mt-1 text-blue-400 dark:text-blue-300 shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    {BUSINESS.email}
                  </a>
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <FaGlobe
                    className="mt-1 text-blue-400 dark:text-blue-300 shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href={BUSINESS.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    {BUSINESS.siteUrl.replace(/^https?:\/\//, "")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Service Area & Credentials */}
            <div className="text-center md:text-left">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-400 dark:text-blue-300 mb-4">
                Service Area
              </h3>
              <div className="space-y-3 text-gray-400 dark:text-gray-300">
                <p className="flex items-start justify-center md:justify-start gap-3">
                  <FaLocationDot
                    className="mt-1 text-blue-400 dark:text-blue-300 shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    Proudly serving {BUSINESS.primaryServiceArea}, GA and the
                    Atlanta Metro Area since {BUSINESS.foundingYear}.
                  </span>
                </p>
                <p className="flex items-start justify-center md:justify-start gap-3">
                  <FaShieldHalved
                    className="mt-1 text-blue-400 dark:text-blue-300 shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    Licensed &amp; Insured — {BUSINESS.yearsInBusiness} years
                    in business.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright Strip */}
          <div className="mt-10 pt-6 border-t border-gray-800 dark:border-slate-700 text-center text-xs text-gray-500 dark:text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} {BUSINESS.legalName}. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
