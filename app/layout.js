import "./globals.css";
import { Inter } from "next/font/google";
import LocalSchema from "./components/LocalSchema";
import SmoothScroll from "./components/SmoothScroll";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Designer Solutions | Premier Movers in Buckhead, GA",
  description:
    "Designer Solutions has been providing reliable, professional moving services in Buckhead, GA and the Atlanta metro area for 26 years. Get a free quote today!",
  keywords: [
    "Movers Buckhead GA",
    "Atlanta Moving Company",
    "Local Movers",
    "Designer Solutions",
  ],
  openGraph: {
    title: "Designer Solutions | Premier Movers in Buckhead, GA",
    description: "26 years of expert moving services in Tukcer, GA",
    type: "website",
  },
};

// Google Local Business Schema (The Index Card) ** components/LocalSchema.jsx

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-slate-100 antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          <LocalSchema />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
