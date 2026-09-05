import Image from "next/image";

export default function About({ cityName }) {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 relative w-full h-96 group">
          <div className="absolute inset-0 bg-blue-400 dark:bg-blue-600 rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <Image
            src="/image.png"
            alt="Designer Solutions moving truck in Tucker GA"
            fill
            className="object-cover rounded-2xl shadow-2xl brightness-110 dark:brightness-100 relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 dark:text-blue-200 tracking-tight transition-colors duration-300">
            26 Years of Excellence in Buckhead
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
            For over two decades,{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold transition-colors duration-300">
              DSI Moving & Storage
            </span>{" "}
            has been the go-to moving company for residents and businesses in{" "}
            {cityName || "Buckhead"}, Georgia.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
            We aren&apos;t a faceless corporation. We are your neighbors. Our
            team treats your furniture like it&apos;s our own, ensuring a smooth
            transition to your new home or office.
          </p>
          <p className="text-gray-800 dark:text-gray-100 font-bold mb-6 transition-colors duration-300">
            📍 Located right here in {cityName || "Buckhead"}, GA.
          </p>
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-600 shadow-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-2 transition-colors duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.0179521056034!2d-84.35769839999999!3d33.81184979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f505d76eee2af5%3A0xce60852e059d5f4f!2s2084%20Faulkner%20Rd%20NE%2C%20Atlanta%2C%20GA%2030324!5e0!3m2!1sen!2sus!4v1786287165701!5m2!1sen!2sus"
              className="w-full h-96 rounded-xl"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
