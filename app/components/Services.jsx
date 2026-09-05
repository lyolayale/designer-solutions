"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

function ServiceCard({ service, index, openCard, toggleCard }) {
  const isOpen = openCard === index;

  return (
    <div className="w-full h-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      {/* Image */}
      <Reveal delay={100}>
        <div className="relative w-full h-52 shrink-0 overflow-hidden group">
          <Image
            src={service.image}
            alt={`${service.title} services`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px), 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Reveal>

      {/* Card Content Wrapper */}
      <div className="p-6 flex flex-col grow">
        {/* FIXED TITLE CONTAINER: Standardizes height regardless of 1-line or 2-line text */}
        <div className="h-16 flex items-center justify-center text-center mb-3">
          <h3 className="text-xl font-bold text-blue-900 line-clamp-2 tracking-tight">
            {service.title}
          </h3>
        </div>

        {/* FIXED DESCRIPTION CONTAINER: Aligns the top boundaries of the description blocks */}
        <div className="h-20 flex flex-col justify-start text-center mb-6">
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Dropdown Action Button */}
        <div className="text-center mt-auto">
          <button
            type="button"
            onClick={() => toggleCard(index)}
            className="w-full flex items-center justify-center gap-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors cursor-pointer group"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              {isOpen ? "Hide Details" : `Learn More`}
            </span>
            <span
              className={`text-sm transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
        </div>

        {/* Details Dropdown */}
        {isOpen && (
          <div className="mt-6 pt-6 border-t border-gray-200 text-left animate-in slide-in-from-top-2 duration-300">
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
              {service.details.map(detail => (
                <li
                  key={detail}
                  className="hover:text-blue-900 transition-colors duration-200"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  const [openCard, setOpenCard] = useState(null);

  const services = [
    {
      title: "Local Moving",
      image: "/local-moving.webp",
      description:
        "Expert moving services across Buckhead, GA, and the greater Atlanta area. Fast, careful, and reliable.",
      details: [
        "Apartment and condominium moves",
        "House-to-house moves",
        "Office and small business moves",
        "Furniture moving",
        "Loading and unloading",
        "Same-day and scheduled moves",
      ],
    },
    {
      title: "Long Distance",
      image: "/long-distance.jpeg",
      description:
        "Moving out of state? We handle your belongings with the utmost care for long-distance relocations.",
      details: [
        "Interstate moving",
        "Out-of-state relocations",
        "Professional loading and unloading",
        "Furniture protection",
        "Packing and unpacking options",
        "Flexible scheduling",
      ],
    },
    {
      title: "Packing Services",
      image: "/packing.jpeg",
      description:
        "Don't lift a finger. Let our 26-year veteran team pack your items safely and securely.",
      details: [
        "Full-home packing",
        "Room-by-room packing",
        "Fragile item packing",
        "Furniture protection",
        "Boxes and packing materials",
        "Unpacking services",
      ],
    },
    {
      title: "Designer Services",
      image: "/designer-services.jpeg",
      description:
        "Need design setup? We handle assembly, delivery, showroom staging, and professional installations.",
      details: [
        "Furniture assembly",
        "Designer furniture delivery",
        "Showroom staging",
        "Professional installations",
        "White-glove service",
        "Commercial and residential projects",
      ],
    },
    {
      title: "Residential Moving & Storage",
      image: "/residential-moving.jpeg",
      description:
        "Reliable home moves. Our expert crews provide premium moving services and 24/7 secure, climate-controlled storage.",
      details: [
        "Residential moves",
        "Short-term storage",
        "Long-term storage",
        "Climate-controlled storage",
        "Furniture protection",
        "Secure storage solutions",
      ],
    },
    {
      title: "Delivery & Shipping/Receiving",
      image: "/delivery-shipping.jpeg",
      description:
        "Seamless shipping. Enjoy flexible scheduling, competitive pricing, expert teams, and inspections with client updates within 24 hours.",
      details: [
        "Local delivery",
        "Shipping and receiving",
        "Furniture delivery",
        "Inspection services",
        "Client delivery updates",
        "Flexible scheduling",
      ],
    },
  ];

  const toggleCard = index => {
    setOpenCard(current => (current === index ? null : index));
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col gap-10 justify-center items-center p-8 rounded-3xl mt-10 mb-20 shadow-2xl shadow-blue-900/20 border border-blue-700/30">
          {/* Container explicitly forced to your exact image dimensions */}

          <div className="relative w-75 h-50 rounded-[10%] overflow-hidden group">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <Image
              src="/large-logo.avif"
              alt="Designer Solutions moving truck in Tucker GA"
              width={200}
              height={200}
              priority
              className="object-cover w-full h-full brightness-125 relative z-10 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Always-visible absolute overlay */}
            <div className="absolute inset-0 bg-black/20 flex justify-center items-center"></div>
          </div>

          <h2 className="text-3xl font-bold text-center text-white tracking-tight">
            DSI Moving & Storage
          </h2>
        </section>

        {/* ============================= */}
        {/* SEPARATED COLUMNS LAYOUT */}
        {/* ============================= */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* COLUMN 1 */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <ServiceCard
              service={services[0]}
              index={0}
              openCard={openCard}
              toggleCard={toggleCard}
            />
            <ServiceCard
              service={services[3]}
              index={3}
              openCard={openCard}
              toggleCard={toggleCard}
            />
          </div>

          {/* COLUMN 2 */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <ServiceCard
              service={services[1]}
              index={1}
              openCard={openCard}
              toggleCard={toggleCard}
            />
            <ServiceCard
              service={services[4]}
              index={4}
              openCard={openCard}
              toggleCard={toggleCard}
            />
          </div>

          {/* COLUMN 3 */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <ServiceCard
              service={services[2]}
              index={2}
              openCard={openCard}
              toggleCard={toggleCard}
            />
            <ServiceCard
              service={services[5]}
              index={5}
              openCard={openCard}
              toggleCard={toggleCard}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
