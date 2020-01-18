const knex = require("./config/db").knex;
const City = require("./model/city");

async function fetch_all() {
  try {
    let vals = await City.fetchAll();
    console.log(vals.toJSON());
  } catch (e) {
    console.log(`Failed to fetch data: ${e}`);
  } finally {
    knex.destroy();
  }
}

fetch_all();
