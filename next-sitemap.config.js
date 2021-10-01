const defaultRegion = 'en';

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  transform: async (config, path) => {
    const defaultLocalePath = `/${defaultRegion}/`;

    if (path.substring(0, defaultLocalePath.length) === defaultLocalePath) {
      const transformedPath = path.substring(defaultLocalePath.length, path.length);
      return {
        loc: transformedPath,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    }

    return null;
  },
}