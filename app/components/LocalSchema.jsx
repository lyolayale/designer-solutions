// app/components/LocalSchema.jsx

export default function LocalSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "DSi Moving and Storage", // Ask owner for real name
    image: "https://yourmovingcompany.com/image.png",
    telephone: "+1-404-549-7025", // Ask owner for real phone number
    url: "https://yourmovingcompany.com", // Ask owner for real site link
    address: {
      "@type": "PostalAddress",
      streetAddress: "2084 Faulkner Rd NE", // Ask owner for real address
      addressLocality: "Atlanta",
      addressRegion: "GA",
      postalCode: "30324",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Atlanta" },
      { "@type": "City", name: "Buckhead" },
      { "@type": "City", name: "Decatur" },
    ],
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
    foundingDate: "1998",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
