"use client";
import React, { useState } from "react";

export default function QuoteGenerator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    movingDate: "",
    originAddress: "",
    destinationAddress: "",
    propertyType: "",
    bedrooms: "1",
    additionalDetails: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const estimateHours = {
    1: "2 - 4 hours",
    2: "4 - 6 hours",
    3: "6 - 8 hours",
    "4+": "8+ hours (Multi-crew)",
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectProperty = type => {
    setFormData(prev => ({ ...prev, propertyType: type }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      // Integration point for your n8n webhook / Supabase client
      console.log("Quote Request Submitted:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto my-10 max-w-[600px] rounded-xl bg-white p-10 text-center shadow-lg border border-gray-100 font-sans">
        <div className="text-6xl mb-5">🚚</div>
        <h2 className="text-[#1e3a8a] mb-3 text-3xl font-bold tracking-tight">
          Thank You, {formData.fullName}!
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Your custom quote request has been received. Our expert team will
          review your details and reach out within 24 hours with your
          competitive pricing.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              movingDate: "",
              originAddress: "",
              destinationAddress: "",
              propertyType: "",
              bedrooms: "1",
              additionalDetails: "",
            });
          }}
          className="mt-6 bg-[#1e3a8a] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors cursor-pointer shadow-md"
        >
          Request Another Quote
        </button>
      </div>
    );
  }
  return (
    <div
      id="pricing"
      className="mx-auto my-10 max-w-[650px] bg-white rounded-xl shadow-xl overflow-hidden font-sans border border-gray-100"
    >
      {/* Header & Progress Indicator */}
      <div className="bg-[#1e3a8a] py-6 px-8 text-white text-center">
        <h2 className="m-0 text-2xl font-bold tracking-wide">
          Get Your Free Moving Quote
        </h2>
        <p className="m-0 mt-1 text-sm opacity-85 font-light">
          Trusted moving services across Buckhead & Atlanta
        </p>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-5">
          {[1, 2, 3].map(num => (
            <div
              key={num}
              className={`h-2 rounded-full transition-all duration-300 ${
                step === num
                  ? "w-6 bg-white"
                  : step >= num
                    ? "w-2 bg-white"
                    : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        {/* STEP 1: Move Details */}
        {step === 1 && (
          <div className="space-y-5">
            <h3 className="text-gray-800 text-lg font-bold mt-0 mb-4">
              1. Tell Us About Your Move
            </h3>
            <div>
              <label className="block font-semibold mb-2 text-gray-600 text-sm">
                Property Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {["House", "Apartment", "Condo", "Townhouse", "Commercial"].map(
                  type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => selectProperty(type)}
                      className={`py-3 px-2 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer ${
                        formData.propertyType === type
                          ? "border-2 border-[#1e3a8a] bg-blue-50 text-[#1e3a8a] font-bold"
                          : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {type}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-600 text-sm">
                Number of Bedrooms
              </label>
              <select
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none text-gray-700 transition-shadow"
              >
                <option value="1">1 Bedroom / Studio</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4+">4+ Bedrooms</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-600 text-sm">
                Preferred Moving Date
              </label>
              <input
                type="date"
                name="movingDate"
                value={formData.movingDate}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none text-gray-700 transition-shadow"
              />
            </div>

            {/* Micro-interaction Value Add */}
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex justify-between items-center mt-3">
              <span className="text-sm text-gray-600">
                ⏱️ Estimated Job Timeline:
              </span>
              <span className="font-bold text-[#1e3a8a]">
                {estimateHours[formData.bedrooms]}
              </span>
            </div>
          </div>
        )}

        {/* STEP 2: Locations */}
        {step === 2 && (
          <div className="space-y-5">
            <h3 className="text-gray-800 text-lg font-bold mt-0 mb-4">
              2. Routing Addresses
            </h3>
            <div>
              <label className="block font-semibold mb-2 text-gray-600 text-sm">
                Moving From (Origin Address)
              </label>
              <input
                type="text"
                name="originAddress"
                placeholder="Street, City, State, Zip"
                value={formData.originAddress}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none text-gray-700 transition-shadow"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-600 text-sm">
                Moving To (Destination Address)
              </label>
              <input
                type="text"
                name="destinationAddress"
                placeholder="Street, City, State, Zip"
                value={formData.destinationAddress}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none text-gray-700 transition-shadow"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-600 text-sm">
                Special Items or Details (Optional)
              </label>
              <textarea
                name="additionalDetails"
                rows="3"
                placeholder="Pianos, heavy safes, strict packing needs, stairs/elevator details..."
                value={formData.additionalDetails}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none text-gray-700 transition-shadow resize-y"
              />
            </div>
          </div>
        )}
        {/* STEP 3: Contact & Submission */}
        {step === 3 && (
          <div className="space-y-5">
            <h3 className="text-gray-800 text-lg font-bold mt-0 mb-4">
              3. Your Contact Details
            </h3>
            <div>
              <label className="block font-semibold mb-2 text-gray-600 text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none text-gray-700 transition-shadow"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-600 text-sm">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none text-gray-700 transition-shadow"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-600 text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="(404) 555-0199"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none text-gray-700 transition-shadow"
              />
            </div>
          </div>
        )}

        {/* Form Controls / Navigation Panel */}
        <div
          className={`flex mt-8 pt-5 border-t border-gray-100 ${step > 1 ? "justify-between" : "justify-end"}`}
        >
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer"
            >
              Back
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-[#1e3a8a] text-white hover:bg-blue-900 font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="bg-[#10b981] text-white hover:bg-emerald-600 font-bold py-3 px-7 rounded-lg transition-all duration-200 cursor-pointer disabled:bg-emerald-400 disabled:cursor-not-allowed shadow-md shadow-emerald-500/20"
            >
              {loading ? "Submitting..." : "Get My Free Quote"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
