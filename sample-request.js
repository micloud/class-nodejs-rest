var request = require('request');
var account = process.argv[2], password = process.argv[3];
request({
  method: 'GET',
  url: 'https://api.micloud.tw/'+account+'/datasets',
  auth: {
    username: account,
    password: password
  }
}, function(e,r,d){
  if(e) console.log(e);
  console.log(d);
});
