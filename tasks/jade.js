'use strict';

var jade = require('gulp-jade'),
 notify = require('gulp-notify'),
 plumber = require('gulp-plumber');

module.exports = function (gulp, config) {
  gulp.task('jade', ['clean'], function() {
    return gulp.src(config.src.jade)
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(jade(config.jade))
      .pipe(gulp.dest(config.dist.root));
  });
};
