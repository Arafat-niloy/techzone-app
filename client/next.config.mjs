/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // সব ডোমেইন থেকে ইমেজ লোড করার অনুমতি
      },
    ],
  },
};

export default nextConfig;