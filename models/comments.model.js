const { Model } = require("objection");
const knex = require("../db");
Model.knex(knex);

class Comments extends Model {
  static get tableName() {
    return "comments";
  }
}

module.exports = Comments;
