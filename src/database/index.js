const orcl = require('oracledb');
const config = require('../config');


async function initialize(){
  await orcl.createPool(config.dbConfig);
}



module.exports = {
  initialize: initialize,
}
