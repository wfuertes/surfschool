/* browserify task
---------------
Bundle javascripty things with browserify!
This task is set up to generate multiple separate bundles, from
different sources, and to use Watchify when run from the default task.
See browserify.bundleConfigs in gulp/config.js
*/

/* eslint strict: 0 */

'use strict';

const browserify = require('browserify');
const watchify = require('watchify');
const bundleLogger = require('../util/bundleLogger');
const gulp = require('gulp');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const config = require('../config').browserify;
const babelConfig = require('../config').babel;

gulp.task('browserify', (callback) => {
  let bundleQueue = config.bundleConfigs.length;

  const browserifyThis = (bundleConfig) => {
    let bundler = browserify({
      cache: {},
      packageCache: {},
      fullPaths: false,
      entries: bundleConfig.entries,
      extensions: config.extensions,
      debug: config.debug
    });

    const reportFinished = () => {
      bundleLogger.end(bundleConfig.outputName);

      if (bundleQueue) {
        bundleQueue--;
        if (bundleQueue === 0) {
          callback();
        }
      }
    };

    const bundle = () => {
      bundleLogger.start(bundleConfig.outputName);

      return bundler
        .bundle()
        .on('error', (err) => {
          gutil.log(gutil.colors.red('Browserify compile error: '), err.message);
          gutil.beep();
        })
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    bundler.transform('babelify', { presets: babelConfig.presets });

    if (global.isWatching) {
      bundler = watchify(bundler);
      bundler.on('update', bundle);
    }

    return bundle();
  };

  config.bundleConfigs.forEach(browserifyThis);
});
