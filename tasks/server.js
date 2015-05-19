'use strict';

var express = require('express'),
  gutil = require('gulp-util'),
  http = require('http'),
  morgan = require('morgan');

module.exports = function (gulp, config) {
  gulp.task('server', ['build'], function() {
    var app = express();

    app.use(morgan('dev'));
    app.use(express.static(config.dist.root));

    app.all('/*', function(req, res) {
        res.sendFile('index.html', { root: config.dist.root });
    });

    var s = http.createServer(app);
    s.on('error', function(err){
      if(err.code === 'EADDRINUSE'){
        gutil.log('Development server is already started at port ' + config.serverport);
      }
      else {
        throw err;
      }
    });

    s.listen(config.serverport, function () {
      gutil.log('Development server started at http://localhost:' + config.serverport);
    });
  });
};
