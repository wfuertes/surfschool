const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

const config = require('../config').markup;

gulp.task('less', () => {
  const lessConf = {
    paths: [path.join(__dirname, 'less', 'includes')],
    compress: true
  };

  return gulp.src(`${config.less}/*.less`)
    .pipe(less(lessConf))
    .pipe(gulp.dest(config.dest));
});
