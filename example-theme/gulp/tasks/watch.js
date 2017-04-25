
import gulp from 'gulp';
import sass from 'gulp-sass';
import paths from '../config';

gulp.task('serve', ['sass', 'js', 'browser-sync'], () => {
  gulp.watch([paths.scss.src], ['sass'], ['bs-reload']);
  gulp.watch([paths.scripts.src], ['js'], ['bs-reload']);
  gulp.watch([paths.html.base], ['bs-reload']);
});
