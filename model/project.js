const knex = require("../config/db").knex;
const bookshelf = require("bookshelf")(knex);
const Employee = require("./employee");

const Project = bookshelf.Model.extend({
  tableName: "projects",
  employee: function() {
    return this.hasOne(Employee);
  }
});

module.exports = Project;
