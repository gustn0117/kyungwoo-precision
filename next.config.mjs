/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
};

export default nextConfig;
