import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import QuoteCalculator from "./components/QuoteCalculator";
import { BUSINESS } from "../lib/business";

export const metadata = {
  title: `Movers ${BUSINESS.primaryServiceArea} GA | Designer Solutions Moving Company`,
  description: `Looking for reliable movers in ${BUSINESS.primaryServiceArea}, GA? ${BUSINESS.brandName} has provided top-rated local and long-distance moving services for ${BUSINESS.yearsInBusiness} years. Call for a free quote!`,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="w-full min-h-screen block relative">
      <Navbar />

      <Reveal>
        <Hero />
      </Reveal>

      <TrustBar />

      <Services />

      <HowItWorks />

      <section className="w-[80%] mx-auto mb-10">
        <Reveal>
          <QuoteCalculator />
        </Reveal>
      </section>

      <Testimonials />

      <Reveal delay={100}>
        <About />
      </Reveal>

      <CtaBand />

      <Footer />
    </main>
  );
}
