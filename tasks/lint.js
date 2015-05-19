'use strict';

var jshint = require('gulp-jshint');

module.exports = function (gulp, config) {
  gulp.task('lint', function() {
    return gulp.src([
      config.src.root + '/*.js',
      config.src.root + '/**/*.js',
      '!' + config.src.root + '/*_test.js',
      '!' + config.src.root + '/**/*_test.js'
    ])
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
  });
};
