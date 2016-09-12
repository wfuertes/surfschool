const gulp = require('gulp');

const config = require('../config').markup;

gulp.task('imgs', () =>
  gulp.src(`${config.imgs}`)
    .pipe(gulp.dest(`${config.dest}/img`))
);
