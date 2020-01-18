const knex = require("../config/db").knex;
const Project = require("../model/project");

async function doQuery() {
  try {
    let val = await Project.where({ id: 2 }).fetch({
      withRelated: ["employee"]
    });

    console.log(val.toJSON());
  } catch (e) {
    console.log(`Failed to fetch data: ${e}`);
  } finally {
    knex.destroy();
  }
}

doQuery();
