const { Model } = require("objection");
const knex = require("../db");
Model.knex(knex);

class Status extends Model {
  static get tableName() {
    return "status";
  }
}

module.exports = Status;
