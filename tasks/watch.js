'use strict';

module.exports = function (gulp, config) {
  gulp.task('watch', ['build', 'lint', 'browser-sync'], function() {
    return gulp.watch(config.watch.paths, ['lint', 'build', 'browser-reload', 'sass', 'copy']);
  });
};
