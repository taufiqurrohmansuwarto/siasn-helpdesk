const { Model } = require("objection");
const knex = require("../db");
Model.knex(knex);

class Roles extends Model {
  static get tableName() {
    return "roles";
  }
}

module.exports = Roles;
