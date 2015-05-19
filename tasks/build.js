'use strict';

module.exports = function (gulp, config) {
  gulp.task('build', ['browserify', 'sass', 'jade', 'copy', 'inject']);
};
