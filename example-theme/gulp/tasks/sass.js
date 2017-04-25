import gulp from 'gulp';
import sass from 'gulp-sass';
import cssmin from 'gulp-cssmin';
import size from 'gulp-size';
import plumber from 'gulp-plumber';
import prefix from 'gulp-autoprefixer';
import gulpif from 'gulp-if';
import browserSync from 'browser-sync';
const reload = browserSync.reload;
import paths from '../config';

require('dotenv').config();
const isProduction = process.env.WP_ENV === 'production';

gulp.task('sass', () => {
  gulp.src(paths.scss.src)
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(paths.scss.dist))
    .pipe(prefix({
      browsers: ['last 2 versions']
    }))
    .pipe(size())
    .pipe(gulpif(isProduction, cssmin()))
    .pipe(gulp.dest(paths.scss.dist))
    .pipe(reload({
      stream: true,
      once: true
    }))
});
