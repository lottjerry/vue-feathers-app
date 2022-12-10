const knex = require("knex");

module.exports = function (app) {
  const db = require("knex")({
    client: "mysql2",
    connection: {
      host: "localhost",
      port: 3306,
      user: "mysql-username",
      password: "mysql-password",
      database: "database-name",
    },
  });

  app.set("knexClient", db);
};
