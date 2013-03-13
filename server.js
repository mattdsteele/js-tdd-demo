var express = require('express');
var app = express();
app.get('/hello', function(req, res) {
  var body = JSON.stringify({
    name: "Hi there!",
    quest: "To seek the grail!"
  });
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});
app.listen(3000);
console.log('Listening on port 3000');
