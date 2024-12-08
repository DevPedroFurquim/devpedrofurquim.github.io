/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'out', // Output directory for the build
  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
  },
};
