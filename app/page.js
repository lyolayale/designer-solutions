import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

export const metadata = {
  title: "Movers Buckhead GA | Designer Solutions Moving Company",
  description:
    "Looking for reliable movers in Buckhead, GA? Designer Solutions has provided top-rated local and long-distance moving services for 26 years. Call for a free quote!",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </main>
  );
}
