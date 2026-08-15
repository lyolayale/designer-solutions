// app/movers-[city]/page.js

// 1. IMPORT: Notice the extra dot (../) so Next.js can find your components folder
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";

// 2. METADATA: This tells Google exactly what this specific city page is about
export async function generateMetadata({ params }) {
  const { city } = await params;

  // This capitalizes the first letter (e.g., "decatur" becomes "Decatur")
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return {
    title: `Movers ${cityName} GA | Designer Solutions Moving Company`,
    description: `Looking for reliable movers in ${cityName}, GA? Designer Solutions has provided top-rated local and long-distance moving services for 26 years. Call for a free quote!`,
    alternates: {
      canonical: `https://swiftmoves.com{city}`,
    },
  };
}

// 3. VISUAL CONTENT: This renders your exact homepage layout uniformly
export default async function CityPage({ params }) {
  const { city } = await params;
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
