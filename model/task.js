const knex = require("../config/db").knex;
const bookshelf = require("bookshelf")(knex);
const User = require("./user");

const Task = bookshelf.Model.extend({
  tableName: "tasks",
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Task;
