/**
 * @type {import('next').NextConfig}
 */

const withTM = require('next-transpile-modules')(['react-markdown']); // pass the modules you would like to see transpiled

const nextConfig = {
  // Set locales so we have appropriate lang attributes without a custom _document
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Needed to expose in clientside.
  env: {
    GTM_ID: process.env.GTM_ID,
    GTM_AUTH: process.env.GTM_AUTH,
    GTM_ENVIRONMENT: process.env.GTM_ENVIRONMENT,
    SITE_URL: process.env.SITE_URL
  },
  images: {
    domains: ['sitecorecdn.azureedge.net', 'i.ytimg.com', 'mss-p-006-delivery.sitecorecontenthub.cloud'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

module.exports = withTM(nextConfig);
