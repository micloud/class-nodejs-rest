/** memory.js **/
var os = require('os');
function curr(){
  return {
    free: os.freemem(),
    total: os.totalmem(),
    usage: os.freemem()/os.totalmem()
  }
}
exports.curr = curr;


