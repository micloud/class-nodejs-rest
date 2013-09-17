var mem = require('./memory')
  , server = require('restify').createServer();

server.get('/:type', 
  function (req, res, next) {
    if(req.params.type == 'mem')
      res.send(mem.curr());
    else {
      res.statusCode = 404;
      res.end('Page not found!');
    }
});

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
