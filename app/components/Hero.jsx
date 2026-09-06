import Image from "next/image";
import { BUSINESS } from "../../lib/business";

export default function Hero({ cityName }) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/image.png"
          alt={BUSINESS.imageAlt}
          fill
          className="object-cover brightness-110 dark:brightness-90 transition-all duration-500"
          priority
        />

        {/* Dedicated scrim class — kept out of the global dark gradient
            overrides so the background image stays visible in dark mode */}
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto text-center px-4 relative z-10 text-white py-20">
        <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 inline-block shadow-2xl shadow-blue-500/30 dark:shadow-blue-700/40 backdrop-blur-sm border border-blue-400/30 dark:border-blue-600/50 transition-all duration-300">
          Trusted for {BUSINESS.yearsInBusiness} Years
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl tracking-tight leading-tight">
          {cityName || BUSINESS.primaryServiceArea}&apos;s Most Trusted{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 dark:from-blue-300 dark:to-blue-200 transition-all duration-300">
            Moving Company
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-lg leading-relaxed font-light transition-colors duration-300">
          Since {BUSINESS.foundingYear},{" "}
          <span className="text-blue-400 dark:text-blue-300 font-bold text-3xl drop-shadow-lg transition-colors duration-300">
            {BUSINESS.brandName}
          </span>{" "}
          has made moving stress-free for families and businesses in the Atlanta
          metro area.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#estimate"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-bold hover:from-blue-400 hover:to-blue-500 dark:hover:from-blue-500 dark:hover:to-blue-600 transition-all duration-300 shadow-2xl shadow-blue-500/40 dark:shadow-blue-700/50 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm border border-blue-400/30 dark:border-blue-600/50"
          >
            Request Your Free Quote
          </a>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-200">
          <span className="flex gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.217-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
              </svg>
            ))}
          </span>
          <span className="font-medium">
            Rated 5 stars by Atlanta homeowners & businesses
          </span>
        </div>
      </div>
    </section>
  );
}
