var api = require('rest-api-connector').api;

//Setup and compile the api node module
api.buildFromJson(
  { //define the api connection info
    API_CFG: {
      BASE_URL: "http://localhost:3000" //api url
    }
  },
  { //define the api definition
    getData: {
      url:"/doc",
      method: "GET"
    },
    addData: {
      url:"/doc/:data",
      method: "POST",
      input: [
        { name:"data", value:'', type:"string", max:40, nullable:false }
      ]
    }
  }
);

module.exports = api;

/* Executing get data
api.getData(function(e,r,d){
  if(e) console.log(e);
  console.log(d);
});
*/

/** Executing post data **/
api.addData('abc', function(e,r,d){
  if(e) console.log(e);
  console.log(d);
});
