const knex = require("./config/db").knex;
const City = require("./model/city");

async function fetch_city() {
  try {
    let vals = await City.forge()
      .orderBy("name", "DESC")
      .fetchAll({ require: true });
    console.log(vals.toJSON());
  } catch (e) {
    console.log(`Failed to fetch data: ${e}`);
  } finally {
    knex.destroy();
  }
}

fetch_city();
