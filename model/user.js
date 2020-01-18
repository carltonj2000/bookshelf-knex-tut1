const knex = require("../config/db").knex;
const bookshelf = require("bookshelf")(knex);
const Task = require("./task");

const User = bookshelf.Model.extend({
  tableName: "users",
  tasks: function() {
    return this.hasMany(Task);
  }
});

module.exports = User;
