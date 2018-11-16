const app = require('express');
const server = require('./src/services');
const db = require('./src/database');

async function startup(){
  try{
   await server.initialize();
   await db.initialize();
  }catch(err){
    console.log(err);
    process.exit(1);
  }
}

async function shutdown(e){
  let error = e;
  try{
    console.log("Closing web server module");
    await server.close();
  }catch(err){
    console.log("Encountred err", err);
    error = error || err;
  }

  console.log("Exiting proces");
  if(error){
    process.exit(1);
  } else {
    process.exit(0);
  }
}

process.on('SIGTERM', () => {
  console.log('Recive SIGTERM');
  shutdown();
});

process.on('SIGINT', () => {
  console.log('Recive SIGINT');
  shutdown();
});

process.on('uncaughtException', err => {
  console.log('Uncaught Exception');
  shutdown(err);
});



startup();
