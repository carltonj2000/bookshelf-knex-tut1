const knex = require("./config/db").knex;
const City = require("./model/city");

async function save_city() {
  try {
    let val = await City.forge({ name: "Kyiv", population: 2884000 }).save();
    console.log(val.toJSON());
  } catch (e) {
    console.log(`Failed to save data: ${e}`);
  } finally {
    knex.destroy();
  }
}

save_city();
