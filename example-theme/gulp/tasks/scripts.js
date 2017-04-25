import gulp from 'gulp';
import size from 'gulp-size';
import plumber from 'gulp-plumber';
import paths from '../config';
import browserSync from 'browser-sync';
const reload = browserSync.reload;
import util from 'gulp-util';
import gulpif from 'gulp-if';

import rollup from 'gulp-rollup';
import rollupIncludePaths from 'rollup-plugin-includepaths';

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

const includePathOptions = {
  paths: ['./assets/js/modules']
};

require('dotenv').config();
const isProduction = process.env.WP_ENV === 'production';

gulp.task("js", () => {
  gulp.src([
    paths.scripts.base + "app.js"
  ])
    .pipe(plumber())
    .on("error", (err) => {
      console.log(err.message);
    })
    .pipe(rollup({
      entry: paths.scripts.base + "app.js",
      impliedExtensions: ['.js'],
      allowRealFiles: true,
      sourceMap: false,
      format: 'umd',
      plugins: [
        babel({
          exclude: 'node_modules/**',
          presets: ['es2015-rollup'],
          babelrc: false
        }),
        resolve({
          jsnext: true,
          main: true,
          browser: true,
        }),
        commonjs(),
        rollupIncludePaths(includePathOptions),
        gulpif(isProduction, uglify())
      ]
    }))
    .pipe(gulp.dest(paths.scripts.dist))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});
