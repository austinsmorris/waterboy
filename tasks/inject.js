'use strict';

var fs = require('fs'),
  inject = require('gulp-inject'),
  replace = require('gulp-replace'),
  gutil = require('gulp-util');

module.exports = function (gulp, config) {
  gulp.task('inject', ['clean', 'jade', 'browserify', 'sass'], function() {
    var sources = gulp.src([
      config.dist.root + '/*.js',
      config.dist.root + '/*.css'
    ], {read: false});

    // nutso:
    var env = gutil.env.production ? 'production' : gutil.env.staging ? 'staging' : gutil.env.demo ? 'demo' : 'dev';
    var configFile = process.cwd() + '/gulp/config-newrelic-' + env + '.js';

    return gulp.src(config.dist.root + '/*.html')
      .pipe(inject(sources, config.inject))
      .pipe(env !== 'dev' && fs.existsSync(configFile) ? replace(/<!-- newrelic-->/, function (s) {
        var snippet = fs.readFileSync(configFile, 'utf8');
        return '<script type="text/javascript">\n' + snippet + '</script>';
      }) : gutil.noop())
      .pipe(gulp.dest(config.dist.root));
  });
};
