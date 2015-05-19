'use strict';

var requireDir = require('require-dir');

module.exports = function (gulp, config) {
  var tasks = requireDir('./tasks');

  for (var task in tasks) {
    tasks[task](gulp, config);
  }
};
