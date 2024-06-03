/** @type {import('next').NextConfig} */
const nextConfig = {

  
      images: {
        remotePatterns: [
          {
            hostname: "download.logo.wine",
          },
          {
            hostname: "starwars.wikia.com",
          },
          {
            hostname: "vignette.wikia.nocookie.net"
          }
        ],
  
      }
};

export default nextConfig;
