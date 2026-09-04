"use client";
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

  // Dynamic visual positioning for the moving truck graphic based on distance slider percentage
  const truckLeftPercentage = Math.min(
    Math.max(((distance - 1) / 149) * 80, 5),
    80,
  );

  return (
    <div
      id="estimate"
      className="mx-auto my-30 max-w-162.5 bg-white rounded-2xl shadow-xl overflow-hidden font-sans border border-gray-100"
    >
      {/* 1. VISUAL ANIMATION OVERVIEW PANEL */}
      <div className="bg-slate-50 py-7 px-6 border-b border-slate-200 relative overflow-hidden h-[140px]">
        {/* Background Skyline Silhouettes */}
        <div className="absolute bottom-0 left-[10%] flex gap-2 items-end opacity-[0.08] pointer-events-none">
          <div className="w-10 h-[120px] bg-black" />
          <div className="w-[35px] h-[90px] bg-black" />
          <div className="w-12 h-[140px] bg-black" />
          <div className="w-[30px] h-[110px] bg-black" />
          <div className="w-[45px] h-20 bg-black" />
        </div>

        {/* Transit Arc Tracking Path */}
        <svg className="absolute top-10 left-[20%] w-[80%] h-20 pointer-events-none">
          <path
            d="M 10 70 Q 170 -20 340 70"
            fill="transparent"
            stroke="#10b981"
            strokeWidth="3"
            strokeDasharray="6,6"
          />
        </svg>

        {/* Dynamic Truck Item */}
        <div
          className="absolute bottom-6 flex flex-col items-center text-4xl z-10 select-none scale-x-[-1]"
          style={{
            left: `${truckLeftPercentage}%`,
            transition: "left 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          🚚
        </div>

        {/* Origin / Destination Markers */}
        <div className="absolute bottom-4 left-[8%] text-center">
          <div className="w-3.5 h-3.5 rounded-full border-[3px] border-blue-500 bg-white mx-auto" />
          <span className="text-xs font-semibold text-slate-800">
            Downtown Origin
          </span>
        </div>

        <div className="absolute bottom-4 right-[8%] text-center">
          <div className="w-3.5 h-3.5 rounded-full border-[3px] border-emerald-500 bg-white mx-auto" />
          <span className="text-xs font-semibold text-slate-800">
            Outside Atlanta Metro
          </span>
        </div>
      </div>
      {/* 2. LIVE PRICE BREAKDOWN METRICS BAR */}
      <div className="grid grid-cols-4 py-4.5 px-2.5 border-b border-slate-200 text-center bg-white">
        <div>
          <div className="text-xs text-slate-500 mb-1">Base Rate</div>
          <div className="text-base font-bold text-slate-800">
            ${currentBaseRate}
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-500 mb-1">Distance Fee</div>
          <div className="text-base font-bold text-slate-800">
            ${currentDistanceFee}
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-500 mb-1">Packing Option</div>
          <div className="text-base font-bold text-slate-800">
            ${currentPackingFee}
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-500 mb-1 font-semibold">
            Total Estimate
          </div>
          <div className="text-lg font-extrabold text-blue-600">
            ${totalEstimate}
          </div>
        </div>
      </div>

      {/* 3. INTERACTIVE CONTROL INTERFACE */}
      <div className="py-7 px-6 space-y-7">
        {/* Control Row A: Home Size Cards */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2.5">
            Home Size / Inventory Volume
          </label>
          <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
            {["1 Bed Apt", "2 Bed Home", "3+ Bed House"].map(size => (
              <button
                key={size}
                type="button"
                onClick={() => setHomeSize(size)}
                className={`flex-1 py-2.5 border-none rounded-lg cursor-pointer text-sm font-semibold transition-all duration-200 ${
                  homeSize === size
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
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
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-slate-700">
              Transit Distance (Atlanta Area)
            </label>
            <span className="text-base font-bold text-slate-800">
              {distance} mi
            </span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="150"
              value={distance}
              onChange={e => setDistance(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 outline-none"
            />
          </div>
        </div>

        {/* Control Row C: Packing Support Cards */}
        <div className="pb-4">
          <label className="block text-sm font-semibold text-slate-700 mb-2.5">
            Packing & Wrapping Services
          </label>
          <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
            {["Self Packed", "Standard Assist", "Full White-Glove"].map(
              option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPackingOption(option)}
                  className={`flex-1 py-2.5 border-none rounded-lg cursor-pointer text-sm font-semibold transition-all duration-200 ${
                    packingOption === option
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
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
  );
}
