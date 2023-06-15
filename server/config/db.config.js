require('dotenv').config()

module.exports = {
     sql_host : process.env.SQLHOST || "",
     sql_database : process.env.SQLDATABASE || "",
     sql_username : process.env.SQLUSERNAME || "",
     sql_password : process.env.SQLPASSWORD || "",
     sql_dialect : process.env.DIALECT || ""
};