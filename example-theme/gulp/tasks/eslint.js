import gulp from 'gulp';
import paths from '../config';
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
  return gulp.src([paths.scripts.base + 'app.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});