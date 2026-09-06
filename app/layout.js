import "./globals.css";
import { Inter } from "next/font/google";
import LocalSchema from "./components/LocalSchema";
import SmoothScroll from "./components/SmoothScroll";
import { ThemeProvider } from "./components/ThemeProvider";
import { BUSINESS } from "../lib/business";
import { absoluteUrl } from "../lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `Designer Solutions | Premier Movers in ${BUSINESS.primaryServiceArea}, GA`,
    template: `%s | ${BUSINESS.legalName}`,
  },
  description: `${BUSINESS.legalName} has been providing reliable, professional moving services in ${BUSINESS.primaryServiceArea}, GA and the Atlanta metro area for ${BUSINESS.yearsInBusiness} years. Get a free quote today!`,
  openGraph: {
    title: `Designer Solutions | Premier Movers in ${BUSINESS.primaryServiceArea}, GA`,
    description: `${BUSINESS.yearsInBusiness} years of expert moving services in ${BUSINESS.primaryServiceArea}, GA and the Atlanta metro area.`,
    type: "website",
    url: absoluteUrl("/"),
    siteName: BUSINESS.legalName,
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
