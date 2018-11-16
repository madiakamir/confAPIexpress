require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  dbConfig: {
    user: process.env.dbScheme,
    password: process.env.dbPwd,
    connectString: process.env.dbUrl + '/' + process.env.dbName,
    minPool: process.env.minPool,
    maxPool: process.env.maxPool,
    incPool: process.env.incPool
  },
}
