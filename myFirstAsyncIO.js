var fs = require('fs');

var contents;

function readContent (callback) {
  fs.readFile(process.argv[2], 'utf8', function read (err, data) {
    if (err) {
      throw err;
    }

    contents = data;
    callback();
  });
}

function processFile () {
  let lines = contents.split('\n').length - 1;
  console.log(lines);
};

readContent(processFile);
