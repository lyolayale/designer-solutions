import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import QuoteGenerator from "./components/QuoteGenerator";
import InteractiveQuoteCalculator from "./components/InteractiveQuoteCalculator";

export const metadata = {
  title: "Movers Buckhead GA | Designer Solutions Moving Company",
  description:
    "Looking for reliable movers in Buckhead, GA? Designer Solutions has provided top-rated local and long-distance moving services for 26 years. Call for a free quote!",
};

export default function Home() {
  return (
    <main className="w-full min-h-screen block relative">
      <Navbar />

      <Reveal>
        <Hero />
      </Reveal>

      <Services />

      <section className="flex md:flex-row flex-col justify-around my-20 gap-5 md:max-w-[80%] max-w-full mx-auto">
        <Reveal>
          <QuoteGenerator />
        </Reveal>

        <Reveal>
          <InteractiveQuoteCalculator />
        </Reveal>
      </section>

      <Reveal delay={100}>
        <About />
      </Reveal>

      <Footer />
    </main>
  );
}
