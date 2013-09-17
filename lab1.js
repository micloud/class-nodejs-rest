var connect = require('connect')
  , http = require('http')
  , mem = require('./memory');
var app = connect();
app.use(connect.bodyParser())
app.use(function(req, res){
  if(req.url == '/mem' && req.method == 'GET')
    res.end(JSON.stringify(mem.curr()));
  else{
    res.statusCode = 404;
    res.end('Page not found!');
  }
});
http.createServer(app).listen(3000);


