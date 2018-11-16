const express = require('express');
const http = require('http');
const config = require('../config');
const logger = require('morgan');
let httpServer;

function initialize(){
  return new Promise((resolve, reject) => {
    const app = express();
    httpServer = http.createServer(app);

    app.use(logger('combined'));
    app.get('/hello', (req,res) => {
      res.end("Hello World!");
    });


    httpServer.listen(config.port)
      .on('listening', () => {
        console.log(`Web server listen on localhost:${config.port}`);

        resolve();})
      .on('error', (err) => {
        reject(err);
      })


  });

}

function close() {
  return new Promise((resolve,reject) => {
    httpServer.close(err => {
      if(err){
        reject(err);
        return;
      }

      resolve();
    })
  })
}


module.exports = {
  initialize: initialize,
  close: close,
};
