"use client";
import { section } from "framer-motion/client";
import React, { useState } from "react";

export default function InteractiveQuoteCalculator() {
  // Interactive Controls State
  const [homeSize, setHomeSize] = useState("1 Bed Apt");
  const [distance, setDistance] = useState(79);
  const [packingOption, setPackingOption] = useState("Standard Assist");

  // Dynamic Rate Calculation Configurations
  const baseRates = {
    "1 Bed Apt": 280,
    "2 Bed Home": 450,
    "3+ Bed House": 650,
  };

  const packingFees = {
    "Self Packed": 0,
    "Standard Assist": 120,
    "Full White-Glove": 350,
  };

  // Live Math Computations
  const currentBaseRate = baseRates[homeSize];
  const currentPackingFee = packingFees[packingOption];
  const currentDistanceFee = parseFloat((distance * 3.5).toFixed(1)); // $3.50 per mile
  const totalEstimate = Math.round(
    currentBaseRate + currentDistanceFee + currentPackingFee,
  );

  // Responsive boundary calculation for truck travel path positioning
  const truckLeftPercentage = Math.min(
    Math.max(((distance - 1) / 149) * 64 + 14, 14),
    78,
  );

  return (
    <div
      id="estimate"
      className="max-w-[550px] w-11/12 mx-auto md:my-0 my-30 text-slate-800 rounded-2xl overflow-hidden font-sans"
    >
      <div className="bg-[#1e3a8a] py-6 px-6 text-white text-center">
        <h2 className="m-0 text-xl font-bold tracking-wide">Price Estimator</h2>
      </div>
      <div className="mx-auto my-10 max-w-full bg-white rounded-2xl overflow-hidden font-sans border border-gray-100 shadow-[3px_5px_10px_lightgray]">
        {/* 1. MOBILE-FRIENDLY VISUAL ANIMATION OVERVIEW PANEL */}
        <div className="bg-slate-50 py-7 px-4 sm:px-6 border-b border-slate-200 relative overflow-hidden h-[150px] select-none">
          {/* Background Skyline Silhouettes */}
          <div className="absolute bottom-0 left-[35%] flex gap-1.5 items-end opacity-[0.05] pointer-events-none">
            <div className="w-8 h-[100px] bg-black" />
            <div className="w-[28px] h-[75px] bg-black" />
            <div className="w-10 h-[120px] bg-black" />
            <div className="w-[24px] h-[90px] bg-black" />
          </div>

          {/* Transit Arc Tracking Path - Upgraded to a Fully Responsive viewBox Layout */}
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

          {/* Dynamic Truck Item - Flipped Right with Mobile-Safe Bounds */}
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
        {/* 2. RESPONSIVE BREAKDOWN METRICS BAR - 2x2 Grid on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100 py-3 sm:py-4.5 border-b border-slate-200 text-center bg-white">
          <div className="py-2 sm:py-0">
            <div className="text-[11px] sm:text-xs text-slate-500 mb-0.5">
              Base Rate
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-800">
              ${currentBaseRate}
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
              Packing Option
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-800">
              ${currentPackingFee}
            </div>
          </div>
          <div className="py-2 sm:py-0 bg-blue-50/50 sm:bg-transparent">
            <div className="text-[11px] sm:text-xs text-slate-600 mb-0.5 font-semibold">
              Total Estimate
            </div>
            <div className="text-base sm:text-lg font-extrabold text-blue-600">
              ${totalEstimate}
            </div>
          </div>
        </div>

        {/* 3. INTERACTIVE CONTROL INTERFACE */}
        <div className="py-6 px-4 sm:px-6 space-y-6">
          {/* Control Row A: Home Size Cards */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
              Home Size / Inventory Volume
            </label>
            <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
              {["1 Bed Apt", "2 Bed Home", "3+ Bed House"].map(size => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setHomeSize(size)}
                  className={`flex-1 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    homeSize === size
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-transparent text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Control Row B: Range Slider */}
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
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 outline-none"
              />
            </div>
          </div>

          {/* Control Row C: Packing Support Cards */}
          <div className="pb-2">
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
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-transparent text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {option}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
