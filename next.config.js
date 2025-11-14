/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Active l'export statique pour Cloudflare Pages
  images: {
    unoptimized: true, // Nécessaire pour l'export statique
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
