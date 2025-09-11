/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ko', 'ja'], // Add all your supported locales here
    defaultLocale: 'en', // Set the default locale
  },
  images: {
    remotePatterns: [
      {
        hostname: 'www.google.com',
      },
      {
        hostname: 'www.google-analytics.com',
      }
    ],
  },
};

export default nextConfig;
