/* eslint import/no-unresolved: 0, global-require: 0 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prod');
} else {
  module.exports = require('./Root.dev');
}
