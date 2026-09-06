/** Metro Atlanta cities served — used for landing pages, sitemap, and schema. */
export const SERVICE_CITIES = [
  { slug: "atlanta", name: "Atlanta" },
  { slug: "decatur", name: "Decatur" },
  { slug: "sandy-springs", name: "Sandy Springs" },
  { slug: "brookhaven", name: "Brookhaven" },
  { slug: "dunwoody", name: "Dunwoody" },
  { slug: "marietta", name: "Marietta" },
  { slug: "roswell", name: "Roswell" },
];

export function getCityBySlug(slug) {
  return SERVICE_CITIES.find(city => city.slug === slug);
}

export function formatCityName(slug) {
  return getCityBySlug(slug)?.name ?? slug.charAt(0).toUpperCase() + slug.slice(1);
}
