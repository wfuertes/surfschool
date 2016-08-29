var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

var config = require('../config').markup;

gulp.task('less', () => {
  var lessConf = {
    paths: [path.join(__dirname, 'less', 'includes')],
    compress: true
  };

  return gulp.src(config.less + '/*.less')
    .pipe(less(lessConf))
    .pipe(gulp.dest(config.dest));
});