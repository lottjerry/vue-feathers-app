const knex = require("knex");

module.exports = function (app) {
  const db = require("knex")({
    client: "mysql2",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database: "app",
    },
  });

  app.set("knexClient", db);
};
