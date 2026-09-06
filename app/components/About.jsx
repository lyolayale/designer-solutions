import Image from "next/image";
import { BUSINESS } from "../../lib/business";

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
            alt={BUSINESS.imageAlt}
            fill
            className="object-cover rounded-2xl shadow-2xl brightness-110 dark:brightness-100 relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 dark:text-blue-200 tracking-tight transition-colors duration-300">
            {BUSINESS.yearsInBusiness} Years of Excellence in{" "}
            {cityName || BUSINESS.primaryServiceArea}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
            For over two decades,{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold transition-colors duration-300">
              {BUSINESS.brandName}
            </span>{" "}
            has been the go-to moving company for residents and businesses in{" "}
            {cityName || BUSINESS.primaryServiceArea}, Georgia.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
            We aren&apos;t a faceless corporation. We are your neighbors. Our
            team treats your furniture like it&apos;s our own, ensuring a smooth
            transition to your new home or office.
          </p>
          <p className="text-gray-800 dark:text-gray-100 font-bold mb-6 transition-colors duration-300">
            📍 Located right here in {cityName || BUSINESS.primaryServiceArea},{" "}
            GA.
          </p>
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-600 shadow-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-2 transition-colors duration-300">
            <iframe
              src={BUSINESS.mapEmbedUrl}
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
