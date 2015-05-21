'use strict';

module.exports = function (gulp, config) {
  gulp.task('copy-fonts', ['clean'], function () {
    return gulp.src([
      'node_modules/bootstrap-sass/assets/fonts/bootstrap/*.{ttf,woff,woff2,svg,eot}',
      'node_modules/uniform/assets/fonts/*'
    ]).pipe(gulp.dest(config.dist.root + '/fonts'));
  });

  gulp.task('copy-images', ['clean'], function () {
    return gulp.src(config.src.root + '/img/*.{png,gif,jpg}')
      .pipe(gulp.dest(config.dist.root + '/img'));
  });

  gulp.task('copy', ['copy-fonts', 'copy-images']);
};
