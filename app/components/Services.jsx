import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <section className="bg-blue-900 flex flex-col gap-10 justify-center items-center p-5 rounded-2xl mt-10 mb-20">
          <Image
            src="/large-logo.avif"
            alt="Designer Solutions moving truck in Tucker GA"
            className="object-cover rounded-[10%]"
            priority
            width={200}
            height={100}
          />
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            DSI Moving & Storage
          </h2>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col gap-5">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Local Moving
            </h3>
            <p className="text-gray-600">
              Expert moving services across Buckhead, GA, and the greater
              Atlanta area. Fast, careful, and reliable.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col gap-5">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Long Distance
            </h3>
            <p className="text-gray-600">
              Moving out of state? We handle your belongings with the utmost
              care for long-distance relocations.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col gap-5">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Packing Services
            </h3>
            <p className="text-gray-600">
              Don't lift a finger. Let our 26-year veteran team pack your items
              safely and securely.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col gap-5">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Designer Services
            </h3>
            <p className="text-gray-600">
              Need design setup? We handle assembly, delivery, showroom staging,
              and professional installations.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col gap-5">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Residental Moving & Storage
            </h3>
            <p className="text-gray-600">
              Reliable home moves. Our expert crews provide premium moving
              services and 24/7 secure, climate-controlled storage.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center flex flex-col gap-5">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Delivery & Shipping/Receiving
            </h3>
            <p className="text-gray-600">
              Seamless shipping. Enjoy flexible scheduling, competitive pricing,
              expert teams, and inspections with client updates within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
