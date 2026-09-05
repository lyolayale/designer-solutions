"use client";
import React, { useState, useEffect } from "react";

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState("Apartment");
  const [bedrooms, setBedrooms] = useState("1");
  const [isResidential, setIsResidential] = useState(true);
  const [flightsOfStairs, setFlightsOfStairs] = useState("0");
  const [distance, setDistance] = useState(79);
  const [packingOption, setPackingOption] = useState("Standard Assist");

  // Dynamic Rate Calculation Configurations
  const baseRates = {
    1: 280,
    2: 450,
    3: 650,
    "4+": 850,
  };

  const packingFees = {
    "Self Packed": 0,
    "Standard Assist": 120,
    "Full White-Glove": 350,
  };

  const stairFees = {
    0: 0,
    1: 50,
    2: 100,
    3: 150,
    "4+": 200,
  };

  const commercialPremium = 1.3; // 30% premium for commercial moves

  // Live Math Computations
  const currentBaseRate = baseRates[bedrooms] || baseRates["1"];
  const currentPackingFee = packingFees[packingOption];
  const currentStairFee = stairFees[flightsOfStairs] || 0;
  const currentDistanceFee = parseFloat((distance * 3.5).toFixed(1)); // $3.50 per mile

  // Apply commercial premium if not residential
  const baseRateWithPremium = isResidential
    ? currentBaseRate
    : Math.round(currentBaseRate * commercialPremium);
  const packingFeeWithPremium = isResidential
    ? currentPackingFee
    : Math.round(currentPackingFee * commercialPremium);

  const totalEstimate = Math.round(
    baseRateWithPremium +
      currentDistanceFee +
      packingFeeWithPremium +
      currentStairFee,
  );

  // Responsive boundary calculation for truck travel path positioning
  const truckLeftPercentage = Math.min(
    Math.max(((distance - 1) / 149) * 64 + 14, 14),
    78,
  );

  // Broadcast data to footer form
  const broadcastData = () => {
    if (typeof window !== "undefined") {
      const event = new CustomEvent("syncMoveData", {
        detail: {
          property_type: propertyType,
          num_bedrooms: bedrooms,
          is_residential: isResidential,
          flights_of_stairs: flightsOfStairs,
        },
      });
      window.dispatchEvent(event);
    }
  };

  const handlePropertyTypeChange = type => {
    setPropertyType(type);
    broadcastData();
  };

  const handleBedroomsChange = value => {
    setBedrooms(value);
    broadcastData();
  };

  const handleScrollToFooter = () => {
    const footerFormSection = document.getElementById("footer-booking-intake");
    if (footerFormSection) {
      footerFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="estimate"
      className="mx-auto bg-white text-slate-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 font-sans"
    >
      {/* Header Panel */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-6 px-6 text-white text-center">
        <h2 className="m-0 text-xl font-bold tracking-wide">
          Moving Quote Calculator
        </h2>
        <p className="m-0 mt-1 text-xs opacity-80 font-light">
          Get an instant estimate for your move
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
            {/* Property Type Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-5">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-3 gap-5 mb-10">
                {["House", "Apartment", "Condo"].map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handlePropertyTypeChange(type)}
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

            {/* Bedroom Count Selection */}
            <div className="mb-7">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                2. Bedroom Count
              </label>
              <select
                value={bedrooms}
                onChange={e => handleBedroomsChange(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400/20 text-slate-700 cursor-pointer transition-all duration-300"
              >
                <option value="1">1 Bedroom / Studio Apt</option>
                <option value="2">2 Bedroom Space</option>
                <option value="3">3 Bedroom Household</option>
                <option value="4+">4+ Bedrooms Multi-Crew</option>
              </select>
            </div>

            {/* Residential/Commercial Selection */}
            <div className="mb-7">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                3. Move Type
              </label>
              <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsResidential(true);
                    broadcastData();
                  }}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isResidential
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 transform scale-105"
                      : "bg-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                  }`}
                >
                  🏠 Residential
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsResidential(false);
                    broadcastData();
                  }}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                    !isResidential
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 transform scale-105"
                      : "bg-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                  }`}
                >
                  🏢 Commercial
                </button>
              </div>
            </div>

            {/* Flights of Stairs Selection */}
            <div className="mb-7">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                4. Flights of Stairs
              </label>
              <select
                value={flightsOfStairs}
                onChange={e => {
                  setFlightsOfStairs(e.target.value);
                  broadcastData();
                }}
                className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400/20 text-slate-700 cursor-pointer transition-all duration-300"
              >
                <option value="0">No Stairs (Ground Level)</option>
                <option value="1">1 Flight of Stairs (+$50)</option>
                <option value="2">2 Flights of Stairs (+$100)</option>
                <option value="3">3 Flights of Stairs (+$150)</option>
                <option value="4+">4+ Flights of Stairs (+$200)</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-xs uppercase tracking-widest cursor-pointer shadow-lg shadow-blue-500/30 transform hover:scale-[1.02]"
            >
              Next Step: Get Your Estimate →
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Visual Animation Overview Panel */}
            <div className="bg-gradient-to-b from-slate-50 to-white py-7 px-4 sm:px-6 border-b border-slate-200 relative overflow-hidden h-[150px] select-none rounded-xl">
              {/* Background Skyline Silhouettes */}
              <div className="absolute bottom-0 left-[35%] flex gap-1.5 items-end opacity-[0.05] pointer-events-none">
                <div className="w-8 h-[100px] bg-black" />
                <div className="w-[28px] h-[75px] bg-black" />
                <div className="w-10 h-[120px] bg-black" />
                <div className="w-[24px] h-[90px] bg-black" />
              </div>

              {/* Transit Arc Tracking Path */}
              <svg
                className="absolute inset-x-0 top-6 w-full h-24 pointer-events-none px-[12%]"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
              >
                <path
                  d="M 5 45 Q 50 5 95 45"
                  fill="transparent"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                />
              </svg>

              {/* Dynamic Truck Item */}
              <div
                className="absolute bottom-8 flex flex-col items-center text-3xl sm:text-4xl z-10 select-none transform scale-x-[-1] -translate-x-1/2"
                style={{
                  left: `${truckLeftPercentage}%`,
                  transition: "left 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
              >
                🚚
              </div>

              {/* Origin / Destination Markers */}
              <div className="absolute bottom-3 left-[4%] sm:left-[8%] text-center max-w-[100px]">
                <div className="w-3 h-3 rounded-full border-[2.5px] border-blue-500 bg-white mx-auto mb-1" />
                <span className="text-[10px] sm:text-xs font-bold text-slate-700 block truncate">
                  Downtown
                </span>
              </div>

              <div className="absolute bottom-3 right-[4%] sm:right-[8%] text-center max-w-[100px]">
                <div className="w-3 h-3 rounded-full border-[2.5px] border-emerald-500 bg-white mx-auto mb-1" />
                <span className="text-[10px] sm:text-xs font-bold text-slate-700 block truncate">
                  Outside Metro
                </span>
              </div>
            </div>

            {/* Price Breakdown Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100 py-3 sm:py-4.5 border-b border-slate-200 text-center bg-white rounded-xl">
              <div className="py-2 sm:py-0">
                <div className="text-[11px] sm:text-xs text-slate-500 mb-0.5">
                  Base Rate
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-800">
                  ${baseRateWithPremium}
                  {!isResidential && (
                    <span className="text-[10px] text-orange-500 block">
                      *Commercial
                    </span>
                  )}
                </div>
              </div>
              <div className="py-2 sm:py-0">
                <div className="text-[11px] sm:text-xs text-slate-500 mb-0.5">
                  Distance Fee
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-800">
                  ${currentDistanceFee}
                </div>
              </div>
              <div className="py-2 sm:py-0">
                <div className="text-[11px] sm:text-xs text-slate-500 mb-0.5">
                  Stairs Fee
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-800">
                  ${currentStairFee}
                </div>
              </div>
              <div className="py-2 sm:py-0 bg-gradient-to-b from-blue-50/50 to-transparent sm:bg-transparent">
                <div className="text-[11px] sm:text-xs text-slate-600 mb-0.5 font-semibold">
                  Total Estimate
                </div>
                <div className="text-base sm:text-lg font-extrabold text-blue-600">
                  ${totalEstimate}
                </div>
              </div>
            </div>

            {/* Interactive Controls */}
            <div className="space-y-4">
              {/* Distance Slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700">
                    Transit Distance (Atlanta Area)
                  </label>
                  <span className="text-sm sm:text-base font-bold text-slate-800">
                    {distance} mi
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="1"
                    max="150"
                    value={distance}
                    onChange={e => setDistance(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 outline-none focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              </div>

              {/* Packing Options */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                  Packing & Wrapping Services
                </label>
                <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
                  {["Self Packed", "Standard Assist", "Full White-Glove"].map(
                    option => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setPackingOption(option)}
                        className={`flex-1 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                          packingOption === option
                            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 transform scale-105"
                            : "bg-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                        }`}
                      >
                        {option}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
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
                ← Edit Property Details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
