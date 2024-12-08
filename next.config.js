/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    output: 'export', // This is used for static export
    distDir: 'dist',
    reactStrictMode: true,
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
  },
};
