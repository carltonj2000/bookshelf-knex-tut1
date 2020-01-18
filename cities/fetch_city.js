const knex = require("./config/db").knex;
const City = require("./model/city");
const winston = require("winston");

const consoleTransport = new winston.transports.Console();
const options = {
  transports: [consoleTransport]
};
const logger = new winston.createLogger(options);

async function fetch_city() {
  try {
    let val = await City.where({ name: "Bratislava" }).fetch({ require: true });
    console.log(val.toJSON());
    logger.info(val);
  } catch (e) {
    logger.info(`No data found ${e}`);
  } finally {
    knex.destroy();
  }
}

fetch_city();
