/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "m.media-amazon.com" }], // Allow images from this domain
  },
};

export default nextConfig;
