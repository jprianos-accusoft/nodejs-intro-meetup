var http = require('http');

function contentServer(req, res) {
  if (req.url === '/index.html') {
    res.end('Hello, I am index.html');
  } else {
    res.statusCode = 404;
    res.end('404 Error');
  }
}

http.createServer(contentServer).listen(8080);
