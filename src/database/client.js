const pg = require("pg");
const { Client } = pg

const { PG_USERNAME, PG_PASSWORD, PG_HOST, PG_PORT, PG_DB } = require("../config");
 
const client = new Client({
  user: PG_USERNAME,
  password: PG_PASSWORD,
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DB
});

client.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(`Successfully connected to ${PG_DB}`);
});

module.exports = client;