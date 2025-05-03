const {sequelize}  = require('sequelize')
require('dotenv').config

const sequelize = new sequelize(
    process.env.db_name,
    process.env.db_user,
    process.env.db_pass,
    {
        host: process.env.db_host,
        dialect: process.env.db_dialect
    }

);
module.exports = sequelize;