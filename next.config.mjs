/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Tells Next.js to generate static HTML files during the build
  trailingSlash: true, // Ensures paths end with a slash, which is needed for GitHub Pages
};

export default nextConfig;
