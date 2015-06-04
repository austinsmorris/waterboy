'use strict';

var concat = require('gulp-concat'),
  gutil = require('gulp-util'),
  minify = require('gulp-minify-css'),
  notify = require('gulp-notify'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass');

module.exports = function (gulp, config) {
  var output = 'main.css';

  // add revision number to output file for staging and production
  if (gutil.env.production || gutil.env.staging) {
    var rev = Math.random().toString(36).substring(3);
    output = 'main' + rev + '.css';
  }

  gulp.task('sass', ['clean'], function() {
    return gulp.src(config.sass.files))
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass(config.sass))
    .pipe(concat(output))
    .pipe(gulp.dest(config.dist.root))
    .pipe(gutil.env.production ? minify({keepBreaks:true}) : gutil.noop())
    .pipe(gulp.dest(config.dist.root));
  });
};
