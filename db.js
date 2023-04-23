const mysql = require('mysql2');
const path = require('path');
const dotenv = require('dotenv-safe');

dotenv.config({
  allowEmptyValues: true,
  path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
});

const connection = mysql.createPool({
  connectionLimit: 10,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
});

module.exports = connection;
