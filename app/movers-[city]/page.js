// app/movers-[city]/page.js

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";

// 1. SAFE METADATA FUNCTION
export async function generateMetadata(props) {
  const params = await props.params;

  // FIX: Add "|| 'buckhead'" safety net so it never returns undefined
  const city = params?.city || "buckhead";
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return {
    title: `Movers ${cityName} GA | Designer Solutions Moving Company`,
    description: `Looking for reliable movers in ${cityName}, GA? Designer Solutions has provided top-rated local and long-distance moving services. Call for a free quote!`,
    alternates: {
      canonical: `https://swiftmoves.com{city}`,
    },
  };
}

// 2. SAFE RENDERING FUNCTION
export default async function CityPage(props) {
  const params = await props.params;

  // FIX: Add "|| 'buckhead'" safety net here too
  const city = params?.city || "buckhead";
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <main>
      <Navbar />
      <Hero cityName={cityName} />
      <Services />
      <About cityName={cityName} />
      <Footer />
    </main>
  );
}
