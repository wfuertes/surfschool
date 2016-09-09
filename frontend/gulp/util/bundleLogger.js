/* eslint strict: 0 */
'use strict';

const gutil = require('gulp-util');
const prettyHrtime = require('pretty-hrtime');

let startTime;

module.exports = {
  start: (filepath) => {
    startTime = process.hrtime();
    gutil.log('Bundling', `${gutil.colors.green(filepath)}...`);
  },

  end: (filepath) => {
    const taskTime = process.hrtime(startTime);
    const prettyTime = prettyHrtime(taskTime);
    gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
  }
};
