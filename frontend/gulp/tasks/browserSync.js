const browserSync = require('browser-sync');
const gulp = require('gulp');
const config = require('../config').browserSync;

gulp.task('browserSync', ['build'], () => {
  browserSync(config);
});
