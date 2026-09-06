import { BUSINESS } from "../../lib/business";
import { SERVICE_CITIES } from "../../lib/cities";

export default function LocalSchema() {
  const areaServed = [
    { "@type": "City", name: BUSINESS.primaryServiceArea },
    ...SERVICE_CITIES.map(({ name }) => ({ "@type": "City", name })),
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: BUSINESS.brandName,
    alternateName: BUSINESS.legalName,
    image: `${BUSINESS.siteUrl}/image.png`,
    telephone: BUSINESS.phone,
    url: BUSINESS.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    areaServed,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    foundingDate: String(BUSINESS.foundingYear),
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
