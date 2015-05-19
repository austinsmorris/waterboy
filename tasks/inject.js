'use strict';

var inject = require('gulp-inject');

module.exports = function (gulp, config) {
  gulp.task('inject', ['clean', 'jade', 'browserify', 'sass'], function() {
    var sources = gulp.src([
      config.dist.root + '/*.js',
      config.dist.root + '/*.css'
    ], {read: false});
    return gulp.src(config.dist.root + '/index.html')
       .pipe(inject(sources, config.inject))
       .pipe(gulp.dest(config.dist.root));
  });
};
