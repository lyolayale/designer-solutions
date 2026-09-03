import Image from "next/image";

export default function Hero({ cityName }) {
  return (
    <section className="relative min-h-150 flex items-center justify-center overflow-hidden">
      {/* Background Image */}

      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/image.png"
          alt="Designer Solutions movers loading a truck in Tucker GA"
          fill
          className="object-cover brightness-115"
          priority
        />

        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      {/* **** */}
      <div
        className="absolute z-10 w-[95%] h-[85%] rounded-xl 
                      bg-white/10 backdrop-blur-md border border-white/20 
                      shadow-2xl shadow-black/40
                      flex flex-col items-center justify-center p-6
                      transition-all duration-300 hover:bg-white/15 opacity-10"
      ></div>

      {/* Foreground Content */}
      <div className="container mx-auto text-center px-4 relative z-10 text-white py-20">
        <span className="bg-blue-400 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block shadow-lg">
          Trusted for 26 Years
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          {cityName || "Buckhead"}'s Most Trusted Moving Company
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md text-shadow-[5px_5px_10px_#222]">
          Since 2000,{" "}
          <span className="text-blue-400 font-bold text-3xl">
            DSI Moving & Storage
          </span>{" "}
          has made moving stress-free for families and businesses in the Atlanta
          metro area.
        </p>
        <a
          href="#contact"
          className="bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-600 transition shadow-2xl hover:scale-105 transform duration-200"
        >
          Request Your Free Quote
        </a>
      </div>
    </section>
  );
}
