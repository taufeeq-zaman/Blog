const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.sql_database,dbConfig.sql_username,dbConfig.sql_password,
    {
        host: dbConfig.sql_host,
        dialect: dbConfig.sql_dialect,
        operatorsAliases: false
    })
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Blog = require("./schema.model.js")(sequelize, Sequelize);

module.exports = db;