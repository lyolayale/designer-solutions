export const BUSINESS = {
  legalName: "Designer Solutions, LLC",
  brandName: "DSI Moving & Storage",
  phone: "+14045497025",
  phoneDisplay: "(404) 549-7025",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@designersolutions.com",
  address: {
    street: "2152 Faulkner Rd NE",
    city: "Atlanta",
    region: "GA",
    postalCode: "30324",
    country: "US",
  },
  primaryServiceArea: "Buckhead",
  foundingYear: 2000,
  yearsInBusiness: 26,
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://designersolutions.com",
  mapEmbedUrl:
    "https://www.google.com/maps?q=2152%20Faulkner%20Rd%20NE%2C%20Atlanta%2C%20GA%2030324&output=embed",
  imageAlt:
    "Designer Solutions movers loading a truck in Buckhead and Atlanta, GA",
  social: {
    // Fall back to brand-name profile URLs so icons always render in the footer.
    // Override with real profile URLs via NEXT_PUBLIC_*_URL env vars (.env.local).
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ||
      "https://www.facebook.com/designersolutions",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://www.instagram.com/designersolutions",
    tiktok:
      process.env.NEXT_PUBLIC_TIKTOK_URL ||
      "https://www.tiktok.com/@designersolutions",
  },
};

export const formattedAddress = `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postalCode}`;
