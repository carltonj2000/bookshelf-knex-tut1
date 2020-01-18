const knex = require("./config/db").knex;
const City = require("./model/city");

City.count()
  .then(count => {
    console.log(`There are ${count} cities`);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
