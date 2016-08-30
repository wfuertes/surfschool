const gulp = require('gulp');
const del = require('del');

const config = require('../config').markup;

gulp.task('clean', () =>
  del([
    `${config.dest}/**/*`
  ])
);
