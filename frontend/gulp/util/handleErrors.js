/* eslint strict: 0 */
'use strict';

const notify = require('gulp-notify');

module.exports = () => {
  const args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: 'Compilation errors',
    message: 'Error: <%= error.message %>'
  }).apply(this, args);

  this.emit('end');
};
