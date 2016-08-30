const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('eslint', () =>
  gulp.src(['**/*.js', '**/*.jsx', '!node_modules/**', '!dest/**'])
    .pipe(eslint())
    .pipe(eslint.format())
  // .pipe(eslint.failAfterError());
);
