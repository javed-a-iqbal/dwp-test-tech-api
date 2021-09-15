const express = require("express");
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || '3000'
const usersRoutes = require('./routers/routes');
app.use('/users', usersRoutes);
const helmet = require('helmet')
const a=require('./logger/logger')
const successLog = require('./logger/logger').successLog;
const errorLog = require('./logger/logger').errorLog;
app.use(helmet());


app.listen(process.env.PORT || 3000, process.env.IP, function (error) {
    if (error) {
      errorLog.error("Unable to listen for connections ", error);
      process.exit(10);
    } else {
      
      successLog.info(`DWP Tech test  App listening at process.env.PORT`, { host: 'localhost', port: process.env.PORT });
     
    }
  });

  module.exports.app = app;
