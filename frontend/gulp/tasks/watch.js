/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/
const gulp = require('gulp');
const config = require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], () => {
  gulp.watch(config.markup.src, ['markup']);
  gulp.watch(config.markup.less, ['less']);
});
