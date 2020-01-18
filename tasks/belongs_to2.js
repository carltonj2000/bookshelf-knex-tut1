const knex = require("../config/db").knex;
const Task = require("../model/task");

async function doQuery() {
  try {
    let val = await Task.where({ id: 4 }).fetch({
      withRelated: ["user"],
      require: true
    });

    console.log(val.toJSON());
  } catch (e) {
    console.log(`Failed to fetch data: ${e}`);
  } finally {
    knex.destroy();
  }
}

doQuery();
