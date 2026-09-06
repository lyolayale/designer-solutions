import { SERVICE_CITIES } from "../lib/cities";
import { absoluteUrl, cityPagePath } from "../lib/seo";

export default function sitemap() {
  const lastModified = new Date();

  const cityEntries = SERVICE_CITIES.map(({ slug }) => ({
    url: absoluteUrl(cityPagePath(slug)),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cityEntries,
  ];
}
