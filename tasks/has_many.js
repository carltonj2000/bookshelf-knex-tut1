const knex = require("../config/db").knex;
const User = require("../model/user");

async function doQuery(id) {
  try {
    let val = await User.where({ id }).fetch({
      withRelated: ["tasks"],
      require: true
    });

    console.log(val.toJSON());
  } catch (e) {
    console.log(`Failed to fetch data: ${e}`);
  } finally {
    knex.destroy();
  }
}

doQuery(1);
doQuery(2);
