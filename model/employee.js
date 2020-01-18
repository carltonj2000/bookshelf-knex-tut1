const knex = require("../config/db").knex;
const bookshelf = require("bookshelf")(knex);
const Project = require("./project");

const Employee = bookshelf.Model.extend({
  tableName: "employees",
  project: function() {
    return this.belongsTo(Project);
  }
});

module.exports = Employee;
