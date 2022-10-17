const { Model } = require("objection");
const knex = require("../db");

Model.knex(knex);

class TicketsAgentsHelper extends Model {
  static get tableName() {
    return "tickets_agents_helper";
  }

  static get idColumn() {
    return ["ticket_id", "user_custom_id"];
  }
}

module.exports = TicketsAgentsHelper;
