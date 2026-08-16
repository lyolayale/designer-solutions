"use client";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    move_date: "",
    orgin_address: "",
    destination_address: "",
    property_type: "",
    num_bedrooms: "",
    details: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          move_date: "",
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
    <footer id="contact" className="bg-gray-900 text-white py-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Ready to Move?
          </h2>
          <p className="mb-4 text-gray-400">
            Call us directly or fill out the form for a free quote.
          </p>
          <a
            href="tel:+14045497025"
            className="bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-600 transition mb-12 inline-block"
          >
            📞 Call (404) 549-7025
          </a>
          <div className="border-t border-gray-700 pt-8 mt-8">
            <Image
              src="/mini-logo.avif"
              alt="Designer Solutions movers loading a truck in Tucker GA"
              width={100}
              height={100}
              className="mt-10 rounded mb-5"
              priority
            />
            <p className="text-xl font-bold mb-2">
              <span className="text-blue-400">DSI</span> Moving & Storage
            </p>
            <p className="text-gray-500">2084 Faulkner Rd NE,</p>
            <p className="text-gray-500">Altanta GA 30324</p>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
          {status === "success" ? (
            <div className="bg-green-600 p-4 rounded-lg text-center">
              <p className="font-bold">Thank you! We received your request.</p>
              <p className="text-sm mt-2">We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-orange-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Moving Date</label>
                <input
                  type="date"
                  name="move_date"
                  value={formData.move_date}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Origin Address</label>
                <input
                  type="text"
                  name="orgin_address"
                  value={formData.orgin_address}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-600 outline-none"
                  placeholder="123 Luxury Lane, Suite 100"
                  autoComplete="street-address"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Destination Address
                </label>
                <input
                  type="text"
                  name="destination_address"
                  value={formData.destination_address}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-600 outline-none"
                  placeholder="456 Waterfall Rd, Suite 101"
                  autoComplete="street-address"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Property Type</label>
                <select
                  name="property_type"
                  value={formData.property_type}
                  onChange={handleChange}
                  className="w-full p-3  rounded bg-gray-700 text-white border
                  border-gray-600 focus:border-blue-600 outline-none cursor-pointer"
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="House">House</option>
                  <option value="Townhouse">TownHouse</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Condo">Condo</option>
                  <option value="Commerical Building">
                    Commerical Building
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Number of Bedrooms</label>
                <input
                  min={0}
                  type="number"
                  name="num_bedrooms"
                  value={formData.num_bedrooms}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Details (From/To, Items)
                </label>
                <textarea
                  name="details"
                  rows="3"
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-orange-500 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-400 text-white py-4 rounded-lg font-bold hover:bg-blue-600 transition disabled:opacity-50 cursor-pointer"
              >
                {status === "loading" ? "Sending..." : "Request Quote"}
              </button>
            </form>
          )}
        </div>
      </div>
      <small className="block text-center mt-20">
        &copy; Copyright {new Date().getFullYear()} | DSI Moving & Storage
      </small>
    </footer>
  );
}
