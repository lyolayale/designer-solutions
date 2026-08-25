"use client";

import Image from "next/image";
import { useState } from "react";

function ServiceCard({ service, index, openCard, toggleCard }) {
  const isOpen = openCard === index;

  return (
    <div className="w-full h-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative w-full h-52 flex-shrink-0">
        <Image
          src={service.image}
          alt={`${service.title} services`}
          fill
          className="object-cover"
          sizes="(max-width: 768px), 100vw, 33vw"
        />
      </div>

      {/* Card Content Wrapper */}
      <div className="p-5 flex flex-col flex-grow">
        {/* FIXED TITLE CONTAINER: Standardizes height regardless of 1-line or 2-line text */}
        <div className="h-16 flex items-center justify-center text-center mb-2">
          <h3 className="text-xl font-bold text-blue-900 line-clamp-2">
            {service.title}
          </h3>
        </div>

        {/* FIXED DESCRIPTION CONTAINER: Aligns the top boundaries of the description blocks */}
        <div className="h-20 flex flex-col justify-start text-center mb-5">
          <p className="text-gray-600 text-sm line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Dropdown Action Button */}
        <div className="text-center mt-auto">
          <button
            type="button"
            onClick={() => toggleCard(index)}
            className="w-full flex items-center justify-center gap-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors cursor-pointer"
          >
            <span>{isOpen ? "Hide Details" : `Learn More`}</span>
            <span
              className={`text-sm transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
        </div>

        {/* Details Dropdown */}
        {isOpen && (
          <div className="mt-5 pt-5 border-t border-gray-200 text-left">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {service.details.map(detail => (
                <li key={detail}>{detail}</li>
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
      image: "/local-moving.jpeg",
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* ============================= */}
        {/* COMPANY HEADER */}
        {/* ============================= */}
        <section className="bg-blue-900 flex flex-col gap-10 justify-center items-center p-5 rounded-2xl mt-10 mb-20">
          <Image
            src="/large-logo.avif"
            alt="Designer Solutions moving truck in Tucker GA"
            width={200}
            height={100}
            priority
            className="object-cover rounded-[10%]"
          />
          <h2 className="text-3xl font-bold text-center text-white">
            DSI Moving & Storage
          </h2>
        </section>

        {/* ============================= */}
        {/* SEPARATED COLUMNS LAYOUT */}
        {/* ============================= */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* COLUMN 1 */}
          <div className="w-full md:w-1/3 flex flex-col gap-8">
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
          <div className="w-full md:w-1/3 flex flex-col gap-8">
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
          <div className="w-full md:w-1/3 flex flex-col gap-8">
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
