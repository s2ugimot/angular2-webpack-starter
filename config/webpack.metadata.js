const helpers = require('./helpers');

module.exports = {
  title: 'Angular2 Webpack Starter by @gdi2290 from @AngularClass',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer(),
  ENV: undefined,
  HMR: helpers.hasProcessFlag('hot'),
}
