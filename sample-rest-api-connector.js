var api = require('rest-api-connector').api;

//Setup and compile the api node module
api.buildFromJson(
  { //define the api connection info
    API_CFG: {
      USERNAME: "demo", //api password
      PASSWORD: "demo", //api username
      BASE_URL: "http://odf.my.micloud.tw" //api url
    }
  },
  { //define the api definition
    listDatasets: {
      url:"/odf/datasets",
      method: "GET"
    }
  }
);

module.exports = api;
