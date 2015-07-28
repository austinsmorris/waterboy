'use strict';

var browserify = require('browserify'),
  buffer = require('vinyl-buffer'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  source = require('vinyl-source-stream'),
  uglify = require('gulp-uglify');

module.exports = function (gulp, config) {
  gulp.task('browserify', function () {
    var options = {};

    if (config.hasOwnProperty('browserify') && config.browserify.hasOwnProperty('noParse')) {
      options.noParse = config.browserify.noParse;
    }

    return browserify('./' + config.src.root + '/main.js', options)
      .bundle()
      .pipe(source(config.src.root + '/main.js'))
      .pipe(buffer())
      .pipe(rename(function (path) {
        path.dirname = ''; //strip the src path

        if (gutil.env.production || gutil.env.staging || gutil.env.demo) {
          var rev = Math.random().toString(36).substring(3);
          path.basename += rev;
        }
      }))
      .pipe(gutil.env.production ? uglify() : gutil.noop())
      .pipe(gulp.dest(config.dist.root));
  });
}
