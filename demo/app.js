var http = require('http');
var fs = require('fs');

function contentServer(req, res) {
  var filename = __dirname + '/public' + req.url;
  fs.exists(filename, exists => {
    if (exists) {
      fs.readFile(filename, (err, content) => {
        if (err) {
          res.statusCode = 500;
          res.end('500 Error');
        } else {
          res.end(content);
        }
      });
    } else {
      res.statusCode = 404;
      res.end('404 Error');
    }
  });
}

http.createServer(contentServer).listen(8080);
