/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          // Appliquer des règles de cache aux fichiers générés par Next.js (comme JS et CSS)
          source: '/_next/static/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // Cache de 1 an
            },
          ],
        },
        {
          // Appliquer des règles de cache aux images et autres fichiers sous /assets
          source: '/assets/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // Cache de 1 an
            },
          ],
        },
        {
          // Exemple pour les fichiers Calendly hébergés localement (si tu choisis de le faire)
          source: '/calendly/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // Cache de 1 an
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  
