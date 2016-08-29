var gulp = require('gulp');
var del = require('del');

var config = require('../config').markup;

gulp.task('clean', function () {
  return del([
    config.dest + '/**/*'
  ]);
});
