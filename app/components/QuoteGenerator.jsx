"use client";
import React, { useState, useEffect } from "react";

export default function QuoteGenerator() {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState("Apartment");
  const [bedrooms, setBedrooms] = useState("1");

  // Listen for sync events from InteractiveQuoteCalculator
  useEffect(() => {
    const handleSync = e => {
      if (e.detail) {
        setPropertyType(e.detail.property_type || propertyType);
        setBedrooms(e.detail.num_bedrooms || bedrooms);
      }
    };

    window.addEventListener("syncMoveData", handleSync);
    return () => window.removeEventListener("syncMoveData", handleSync);
  }, [propertyType, bedrooms]);

  const handleStepSelection = type => {
    setPropertyType(type);

    if (typeof window !== "undefined") {
      const event = new CustomEvent("syncMoveData", {
        detail: {
          property_type: type,
          num_bedrooms: bedrooms,
        },
      });
      window.dispatchEvent(event);
    }
  };

  const handleBedroomSelection = e => {
    const value = e.target.value;
    setBedrooms(value);

    // Broadcast the selection with matching variable keys
    if (typeof window !== "undefined") {
      const event = new CustomEvent("syncMoveData", {
        detail: {
          property_type: propertyType,
          num_bedrooms: value, // Secure mapping key matching your local contact fields
        },
      });
      window.dispatchEvent(event);
    }
  };

  const handleScrollToFooter = () => {
    const footerFormSection = document.getElementById("footer-booking-intake");
    if (footerFormSection) {
      footerFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto max-w-[550px] w-11/12 bg-white text-slate-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 font-sans">
      {/* Header Panel */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-6 px-6 text-white text-center">
        <h2 className="m-0 text-xl font-bold tracking-wide">
          Moving Request Setup
        </h2>
        <p className="m-0 mt-1 text-xs opacity-80 font-light">
          Tell us about your home to configure your routing profile
        </p>

        <div className="flex justify-center gap-2 mt-4">
          <div
            className={`h-1.5 rounded-full transition-all duration-300 ${step === 1 ? "w-6 bg-white" : "w-2 bg-white/40"}`}
          />
          <div
            className={`h-1.5 rounded-full transition-all duration-300 ${step === 2 ? "w-6 bg-white" : "w-2 bg-white/40"}`}
          />
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {step === 1 ? (
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["House", "Apartment", "Condo"].map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleStepSelection(type)}
                    className={`py-3 px-1 rounded-xl text-xs font-bold transition-all cursor-pointer text-center block w-full ${
                      propertyType === type
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 transform scale-105"
                        : "bg-slate-50 border border-gray-200 text-slate-600 hover:bg-slate-100 hover:border-blue-300"
                    }`}
                  >
                    {type === "House"
                      ? "🏡 "
                      : type === "Apartment"
                        ? "🏢 "
                        : "🏙️ "}
                    <span className="block mt-1">{type}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                2. Home Layout Size
              </label>
              <select
                value={bedrooms}
                onChange={handleBedroomSelection}
                className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400/20 text-slate-700 cursor-pointer transition-all duration-300"
              >
                <option value="1">1 Bedroom / Studio Apt</option>
                <option value="2">2 Bedroom Space</option>
                <option value="3">3 Bedroom Household</option>
                <option value="4+">4+ Bedrooms Multi-Crew</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-xs uppercase tracking-widest cursor-pointer shadow-lg shadow-blue-500/30 transform hover:scale-[1.02]"
            >
              Next Step: Routing Details →
            </button>
          </div>
        ) : (
          <div className="space-y-4 text-center py-4">
            <div className="text-5xl mb-2">📍</div>
            <h3 className="text-lg font-bold text-slate-800">
              Ready for Contact & Addresses!
            </h3>
            <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
              Your choices for a{" "}
              <span className="font-bold text-blue-600">
                {bedrooms} Bed {propertyType}
              </span>{" "}
              have been dynamically synced to our footer fields below.
            </p>

            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={handleScrollToFooter}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-xs uppercase tracking-widest cursor-pointer shadow-lg shadow-emerald-500/30 transform hover:scale-[1.02]"
              >
                Let&apos;s Finalize My Quote ↓
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors block mx-auto underline cursor-pointer"
              >
                ← Edit Choices
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
