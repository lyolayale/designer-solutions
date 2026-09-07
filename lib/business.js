export const BUSINESS = {
  legalName: "Designer Solutions, LLC",
  brandName: "DSI Moving & Storage",
  phone: "+14045497025",
  phoneDisplay: "(404) 549-7025",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@designersolutions.com",
  address: {
    street: "2084 Faulkner Rd NE",
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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.0179521056034!2d-84.35769839999999!3d33.81184979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f505d76eee2af5%3A0xce60852e059d5f4f!2s2084%20Faulkner%20Rd%20NE%2C%20Atlanta%2C%20GA%2030324!5e0!3m2!1sen!2sus!4v1786287165701!5m2!1sen!2sus",
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
