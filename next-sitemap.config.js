/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://rachid.tech', // your domain
  generateRobotsTxt: true,        // generate robots.txt file
  changefreq: 'daily',            // optional, how often pages change
  priority: 0.7,                  // optional, page priority
  sitemapSize: 5000,               // optional, max urls per sitemap
};
