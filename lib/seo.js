import { BUSINESS } from "./business";

export function getSiteUrl() {
  return BUSINESS.siteUrl.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function cityPagePath(slug) {
  return `/movers/${slug}`;
}

export function cityPageUrl(slug) {
  return absoluteUrl(cityPagePath(slug));
}
