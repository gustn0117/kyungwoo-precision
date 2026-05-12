/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'api.hsweb.pics' },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
