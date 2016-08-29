/* browserify task
---------------
Bundle javascripty things with browserify!
This task is set up to generate multiple separate bundles, from
different sources, and to use Watchify when run from the default task.
See browserify.bundleConfigs in gulp/config.js
*/
var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');
var config = require('../config').browserify;
var babelConfig = require('../config').babel;
var babelify = require('babelify');

gulp.task('browserify', (callback) => {

  var bundleQueue = config.bundleConfigs.length;

  var browserifyThis = (bundleConfig) => {
    var bundler = browserify({
      cache: {}, packageCache: {}, fullPaths: false,
      entries: bundleConfig.entries,
      extensions: config.extensions,
      debug: config.debug
    });

    var bundle = () => {
      bundleLogger.start(bundleConfig.outputName);

      return bundler
        .bundle()
        .on('error', handleErrors)
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    bundler.transform("babelify", { presets: babelConfig.presets });

    if (global.isWatching) {
      bundler = watchify(bundler);
      bundler.on('update', bundle);
    }

    var reportFinished = () => {
      bundleLogger.end(bundleConfig.outputName);

      if (bundleQueue) {
        bundleQueue--;
        if (bundleQueue === 0) {
          callback();
        }
      }
    };

    return bundle();
  };

  config.bundleConfigs.forEach(browserifyThis);
});
