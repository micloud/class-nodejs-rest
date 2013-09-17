var api = require('./sample-rest-api-connector');

api.listDatasets(function(e,r,d){
  if(e) console.log(e);
  console.log(d);
});
