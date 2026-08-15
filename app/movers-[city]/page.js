// app/movers-[city]/page.js

// 1. IMPORT YOUR DESIGN COMPONENTS
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";

// 2. THE CORRECT METADATA PATTERN FOR NEXT.JS 16
export async function generateMetadata(props) {
  // We accept "props" as a plain object, then await the internal params promise
  const params = await props.params;
  const city = params.city;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return {
    title: `Movers ${cityName} GA | Designer Solutions Moving Company`,
    description: `Looking for reliable movers in ${cityName}, GA? Designer Solutions has provided top-rated local and long-distance moving services for 26 years. Call for a free quote!`,
    alternates: {
      canonical: `https://swiftmoves.com{city}`,
    },
  };
}

// 3. THE CORRECT PAGE RENDER PATTERN FOR NEXT.JS 16
export default async function CityPage(props) {
  // Safely resolve the dynamic params object using the same server promise pattern
  const params = await props.params;
  const city = params.city;
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
