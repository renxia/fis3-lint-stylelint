var lint = require('./get_node_modules')('stylelint', 'dist/index.js');
var stylelint;
var config = JSON.parse(process.argv[2]);

if (lint) {
  stylelint = lint.lint;
} else {
  stylelint = require('stylelint').lint;
}

function printResult(data) {
  console.log(JSON.stringify(data));
}

stylelint(config)
  .then(function (data) {
    printResult(data);
  })
  .catch(function (err) {
    printResult({
      error: {
        code: err.code,
        message: err.message,
        stack: err.stack
      }
    });
  });
