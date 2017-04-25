import gulp from 'gulp';
import browserSync from 'browser-sync';
const reload = browserSync.reload;
import paths from '../config';

gulp.task('browser-sync', () => {
  browserSync.init([
    paths.scss.src,
    paths.scripts.src,
    paths.html.src
  ]);
});

gulp.task('bs-reload', () => {
  browserSync.reload();
});
