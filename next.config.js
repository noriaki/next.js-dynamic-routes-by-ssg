const { name } = require('./package.json');

module.exports = {
  assetPrefix: process.env.GITHUB_PAGES ? `/${name}` : '',
};
