var dbm = require('./dbmanager')
  , server = require('restify').createServer();

server.get('/doc', function(req, res){
  dbm.getById('test', function(e,d) {
    if(e) console.log(e);
    res.end(JSON.stringify(d));
  });
});

server.post('/doc/:data', function(req, res){
  dbm.addData('test-' + new Date().getTime(), {data: req.params.data, date: new Date()}, function(e,d) {
    if(e) console.log(e);
    res.end(JSON.stringify(d));
  });
});

server.del('/doc/:data', function(req, res){
  //Implement Here
  res.end('delete ok');
});

server.put('/doc/:data', function(req, res){
  //Implement Here
  res.end('put ok');
});

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
