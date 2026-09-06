// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,

  // 1. Paste this block directly under devIndicators
  async redirects() {
    return [
      {
        source: "/about-us.html",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/contact-us.html",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/movers-[city]",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
