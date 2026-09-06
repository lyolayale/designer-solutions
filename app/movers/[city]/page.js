import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import QuoteCalculator from "../../components/QuoteCalculator";
import { BUSINESS } from "../../../lib/business";
import { getCityBySlug, SERVICE_CITIES } from "../../../lib/cities";
import { cityPagePath, cityPageUrl } from "../../../lib/seo";

export async function generateStaticParams() {
  return SERVICE_CITIES.map(({ slug }) => ({ city: slug }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);

  if (!cityData) {
    return {};
  }

  const { name: cityName } = cityData;

  return {
    title: `Movers ${cityName} GA | ${BUSINESS.legalName}`,
    description: `Looking for reliable movers in ${cityName}, GA? ${BUSINESS.brandName} has provided top-rated local and long-distance moving services for ${BUSINESS.yearsInBusiness} years. Call for a free quote!`,
    alternates: {
      canonical: cityPagePath(city),
    },
    openGraph: {
      title: `Movers ${cityName} GA | ${BUSINESS.legalName}`,
      description: `Professional moving services in ${cityName}, GA and the Atlanta metro area.`,
      url: cityPageUrl(city),
      type: "website",
    },
  };
}

export default async function CityPage({ params }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);

  if (!cityData) {
    notFound();
  }

  const { name: cityName } = cityData;

  return (
    <main className="w-full min-h-screen block relative">
      <Navbar />

      <Reveal>
        <Hero cityName={cityName} />
      </Reveal>

      <Services />

      <section className="w-[80%] mx-auto mb-10">
        <Reveal>
          <QuoteCalculator />
        </Reveal>
      </section>

      <Reveal delay={100}>
        <About cityName={cityName} />
      </Reveal>

      <Footer />
    </main>
  );
}
