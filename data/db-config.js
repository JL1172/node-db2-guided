const knex = require("knex");

const configs = require("../knexfile");

const accessKey = "development";

module.exports = knex(configs[accessKey]); 