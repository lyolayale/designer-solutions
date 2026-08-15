// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,

  // 1. Paste this block directly under devIndicators
  async redirects() {
    return [
      {
        // Change this to the exact link of their old website's about page
        source: "/about-us.html",
        // This is where it goes on your brand new Next.js site
        destination: "/about",
        // This tells Google the change is permanent so you keep your search rankings
        permanent: true,
      },
      {
        // Change this to the exact link of their old website's contact page
        source: "/contact-us.html",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
