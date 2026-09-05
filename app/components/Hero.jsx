import Image from "next/image";

export default function Hero({ cityName }) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/image.png"
          alt="Designer Solutions movers loading a truck in Tucker GA"
          fill
          className="object-cover brightness-110 dark:brightness-75 transition-all duration-500"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 dark:from-black/80 dark:via-black/70 dark:to-black/90 transition-all duration-500"></div>
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto text-center px-4 relative z-10 text-white py-20">
        <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 inline-block shadow-2xl shadow-blue-500/30 dark:shadow-blue-700/40 backdrop-blur-sm border border-blue-400/30 dark:border-blue-600/50 transition-all duration-300">
          Trusted for 26 Years
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl tracking-tight leading-tight">
          {cityName || "Buckhead"}&apos;s Most Trusted{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 dark:from-blue-300 dark:to-blue-200 transition-all duration-300">
            Moving Company
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-lg leading-relaxed font-light transition-colors duration-300">
          Since 2000,{" "}
          <span className="text-blue-400 dark:text-blue-300 font-bold text-3xl drop-shadow-lg transition-colors duration-300">
            DSI Moving & Storage
          </span>{" "}
          has made moving stress-free for families and businesses in the Atlanta
          metro area.
        </p>
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-bold hover:from-blue-400 hover:to-blue-500 dark:hover:from-blue-500 dark:hover:to-blue-600 transition-all duration-300 shadow-2xl shadow-blue-500/40 dark:shadow-blue-700/50 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm border border-blue-400/30 dark:border-blue-600/50"
        >
          Request Your Free Quote
        </a>
      </div>
    </section>
  );
}
