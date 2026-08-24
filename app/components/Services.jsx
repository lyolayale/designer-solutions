// import Image from "next/image";

// export default function Services() {
//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <section className="bg-blue-900 flex flex-col gap-10 justify-center items-center p-5 rounded-2xl mt-10 mb-20">
//           <Image
//             src="/large-logo.avif"
//             alt="Designer Solutions moving truck in Tucker GA"
//             className="object-cover rounded-[10%]"
//             priority
//             width={200}
//             height={100}
//           />
//           <h2 className="text-3xl font-bold text-center mb-12 text-white">
//             DSI Moving & Storage
//           </h2>
//         </section>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col gap-5">
//             <h3 className="text-xl font-bold mb-4 text-blue-900">
//               Local Moving
//             </h3>
//             <p className="text-gray-600">
//               Expert moving services across Buckhead, GA, and the greater
//               Atlanta area. Fast, careful, and reliable.
//             </p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col gap-5">
//             <h3 className="text-xl font-bold mb-4 text-blue-900">
//               Long Distance
//             </h3>
//             <p className="text-gray-600">
//               Moving out of state? We handle your belongings with the utmost
//               care for long-distance relocations.
//             </p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col gap-5">
//             <h3 className="text-xl font-bold mb-4 text-blue-900">
//               Packing Services
//             </h3>
//             <p className="text-gray-600">
//               Don't lift a finger. Let our 26-year veteran team pack your items
//               safely and securely.
//             </p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col gap-5">
//             <h3 className="text-xl font-bold mb-4 text-blue-900">
//               Designer Services
//             </h3>
//             <p className="text-gray-600">
//               Need design setup? We handle assembly, delivery, showroom staging,
//               and professional installations.
//             </p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col gap-5">
//             <h3 className="text-xl font-bold mb-4 text-blue-900">
//               Residental Moving & Storage
//             </h3>
//             <p className="text-gray-600">
//               Reliable home moves. Our expert crews provide premium moving
//               services and 24/7 secure, climate-controlled storage.
//             </p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col gap-5">
//             <h3 className="text-xl font-bold mb-4 text-blue-900">
//               Delivery & Shipping/Receiving
//             </h3>
//             <p className="text-gray-600">
//               Seamless shipping. Enjoy flexible scheduling, competitive pricing,
//               expert teams, and inspections with client updates within 24 hours.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function Services() {
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

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Company Header */}
        <section className="bg-blue-900 flex flex-col gap-10 justify-center items-center p-5 rounded-2xl mt-10 mb-20">
          <Image
            src="/large-logo.avif"
            alt="Designer Solutions moving truck in Tucker GA"
            className="object-cover rounded-[10%]"
            priority
            width={200}
            height={100}
          />

          <h2 className="text-3xl font-bold text-center text-white">
            DSI Moving & Storage
          </h2>
        </section>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center flex flex-col"
            >
              {/* Service Image */}
              <div className="relative w-full h-52">
                <Image
                  src={service.image}
                  alt={`${service.title} services`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col gap-5 flex-1">
                <h3 className="text-xl font-bold text-blue-900">
                  {service.title}
                </h3>

                <p className="text-gray-600">{service.description}</p>

                {/* Dropdown */}
                <details className="text-left mt-auto">
                  <summary className="cursor-pointer font-semibold text-blue-900 hover:text-blue-700">
                    More about {service.title}
                  </summary>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {service.details.map(detail => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
