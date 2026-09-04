"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa6";

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
      url: "https://facebook.com",
      label: "Facebook",
    },
    { id: 2, icon: <FaTiktok />, url: "https://tiktok.com", label: "TikTok" },
    {
      id: 3,
      icon: <FaInstagram />,
      url: "https://instagram.com",
      label: "Instagram",
    },
  ];

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
      className="bg-gray-900 text-white py-16 pb-8 border-t border-gray-800"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[20%] w-full">
        {/* Left Aspect Side Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Ready to Finalize?
          </h2>
          <p className="mb-4 text-gray-400">
            Complete your routing details below to securely transfer your
            parameters straight to our team.
          </p>
          <a
            href="tel:+14045497025"
            className="bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-600 transition mb-12 inline-block"
          >
            📞 Call (404) 549-7025
          </a>
          <div id="contact" className="border-t border-gray-700 pt-8 mt-8">
            <Image
              src="/mini-logo.avif"
              alt="Movers loading truck in Tucker GA"
              width={100}
              height={100}
              className="mt-10 rounded mb-5"
              priority
            />
            <p className="text-xl font-bold mb-2">
              <span className="text-blue-400">DSI</span> Moving & Storage
            </p>
            <p className="text-gray-500">2152 Faulkner Rd NE,</p>
            <p className="text-gray-500">Atlanta GA 30324</p>
          </div>
          <div className="flex gap-5 mt-4 w-1/4">
            {socials.map(social => (
              <Link
                key={social.id}
                href={social.url}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors text-2xl"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Aspect Side Column: Linked Intake Form */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-700 w-100 m-auto">
          <h3 className="text-xl font-bold mb-5 border-b border-gray-700 pb-2.5">
            📝 Secured Routing Profile
          </h3>

          {status === "success" ? (
            <div className="bg-green-600 p-4 rounded text-center text-sm font-bold">
              Thank you! Your integrated itinerary route values have been
              received.
            </div>
          ) : (
            <form onSubmit={handleFinalBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1 text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={localContact.name}
                    onChange={handleLocalChange}
                    className="w-full p-2.5 rounded bg-gray-700 text-white border border-gray-600 text-xs focus:border-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={localContact.email}
                    onChange={handleLocalChange}
                    className="w-full p-2.5 rounded bg-gray-700 text-white border border-gray-600 text-xs focus:border-blue-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1 text-gray-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={localContact.phone}
                    onChange={handleLocalChange}
                    className="w-full p-2.5 rounded bg-gray-700 text-white border border-gray-600 text-xs focus:border-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-gray-300">
                    Moving Date
                  </label>
                  <input
                    type="date"
                    name="move_date"
                    value={localContact.move_date}
                    onChange={handleLocalChange}
                    className="w-full p-2.5 rounded bg-gray-700 text-white border border-gray-600 text-xs focus:border-blue-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1 text-gray-300">
                    Origin Street
                  </label>
                  <input
                    type="text"
                    name="orgin_address"
                    value={localContact.orgin_address}
                    onChange={handleLocalChange}
                    placeholder="From Address"
                    className="w-full p-2.5 rounded bg-gray-700 text-white border border-gray-600 text-xs focus:border-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-gray-300">
                    Destination Street
                  </label>
                  <input
                    type="text"
                    name="destination_address"
                    value={localContact.destination_address}
                    onChange={handleLocalChange}
                    placeholder="To Address"
                    className="w-full p-2.5 rounded bg-gray-700 text-white border border-gray-600 text-xs focus:border-blue-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1 text-blue-400 font-semibold">
                    Active Property (Linked)
                  </label>
                  <select
                    name="property_type"
                    value={localContact.property_type}
                    onChange={handleLocalChange}
                    className="w-full p-2.5 rounded bg-gray-700 text-white border border-blue-500/40 text-xs outline-none cursor-pointer"
                  >
                    {[
                      "House",
                      "Townhouse",
                      "Apartment",
                      "Condo",
                      "Commerical Building",
                      "Other",
                    ].map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs mb-1 text-blue-400 font-semibold">
                    Bedrooms (Linked)
                  </label>
                  <select
                    name="num_bedrooms"
                    value={localContact.num_bedrooms}
                    onChange={handleLocalChange}
                    className="w-full p-2.5 rounded bg-gray-700 text-white border border-blue-500/40 text-xs outline-none cursor-pointer"
                  >
                    <option value="1">1 Bedroom / Studio</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4+">4+ Bedrooms</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs mb-1 text-gray-300">
                  Special Items or Details (Optional)
                </label>
                <textarea
                  name="details"
                  rows="2"
                  value={localContact.details}
                  onChange={handleLocalChange}
                  className="w-full p-2.5 rounded bg-gray-700 text-white border border-gray-600 text-xs focus:border-blue-400 outline-none resize-none"
                  placeholder="Pianos, stairs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-400 text-white py-3.5 rounded-lg font-bold hover:bg-blue-600 transition disabled:opacity-50 text-xs cursor-pointer shadow-md"
              >
                {status === "loading"
                  ? "Submitting Request..."
                  : "Finalize Free Moving Quote"}
              </button>
            </form>
          )}
        </div>
      </div>
      <small className="block text-center mt-20 text-gray-600">
        &copy; Copyright {new Date().getFullYear()} | DSI Moving & Storage
      </small>
    </footer>
  );
}
