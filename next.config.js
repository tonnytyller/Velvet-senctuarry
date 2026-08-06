/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'donlfxsipzfxlucaexsp.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig
