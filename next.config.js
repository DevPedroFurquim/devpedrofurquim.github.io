/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export', // This is used for static export
  distDir: 'dist',
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
  },
};
