import gulp from 'gulp';
import rev from 'gulp-rev';
import paths from '../config';

gulp.task('rev', () => gulp.src([paths.scss.dist + '*.css', paths.scripts.dist + '*.js'], {
  base: 'assets/build'
})
  .pipe(gulp.dest(paths.rev.dist))
  .pipe(rev())
  .pipe(gulp.dest(paths.rev.dist))
  .pipe(rev.manifest())
  .pipe(gulp.dest(paths.rev.dist))
);
