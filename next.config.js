const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({
  i18n: {
    locales: ['en-US', 'pl'],
    defaultLocale: 'en-US'
  },
  images: {
    domains: ['picsum.photos']
  }
});
