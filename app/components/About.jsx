import Image from "next/image";

export default function About({ cityName }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 relative w-full h-96">
          <Image
            src="/image.png"
            alt="Designer Solutions moving truck in Tucker GA"
            fill
            className="object-cover rounded-lg shadow-2xl brightness-125"
            priority
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            26 Years of Excellence in Buckhead
          </h2>
          <p className="text-gray-600 mb-4">
            For over two decades,{" "}
            <span className="text-blue-500">DSI Moving & Storage</span> has been
            the go-to moving company for residents and businesses in{" "}
            {cityName || "Buckhead"}, Georgia.
          </p>
          <p className="text-gray-600 mb-4">
            We aren't a faceless corporation. We are your neighbors. Our team
            treats your furniture like it's our own, ensuring a smooth
            transition to your new home or office.
          </p>
          <p className="text-gray-800 font-bold">
            📍 Located right here in Buckhead, GA.
          </p>
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 shadow-xl bg-white/10 backdrop-blur-md p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.0179521056034!2d-84.35769839999999!3d33.81184979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f505d76eee2af5%3A0xce60852e059d5f4f!2s2084%20Faulkner%20Rd%20NE%2C%20Atlanta%2C%20GA%2030324!5e0!3m2!1sen!2sus!4v1786287165701!5m2!1sen!2sus"
              className="w-full h-96 rounded-xl"
              allowFullScreen={true}
              loading="lazy" // Optimizes performance by only loading the map when visible
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
