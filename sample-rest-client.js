var rc = require('rest-client');

// default value is 'GET'
// Send by URL object
rc.send(
  {
    url: 'http://odf.my.micloud.tw/odf/datasets',
    method: 'GET'
  }, function (res) {
    console.log(res.body);
});
