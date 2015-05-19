'use strict';

var browserSync = require('browser-sync');

module.exports = function (gulp, config) {
  gulp.task('browser-sync', ['build'], function() {
    browserSync(config.browserSync);
  });

  gulp.task('browser-reload', ['build', 'inject', 'copy', 'sass'], function() {
    browserSync.reload();
  });
};
