'use strict';

var del = require('del');

module.exports = function (gulp, config) {
  gulp.task('clean', function (cb) {
    del([config.dist.root], cb);
  });
};
