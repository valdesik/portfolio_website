/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  i18n: {
    locales: ['en', 'ua', 'pl'],
    defaultLocale: 'ua',
    localeDetection: false,
  },
}

module.exports = nextConfig
