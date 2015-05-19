'use strict';


module.exports = function (gulp, config) {
  gulp.task('dev', ['watch', 'browser-sync']);
};
