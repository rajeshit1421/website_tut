const winston = require("winston");
const { createLogger, transports,combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [ new winston.transports.File({
      filename: "logs/example.log",
    }),],
    
});

module.exports = logger;