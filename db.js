const mysql = require('mysql2');

const connection = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  port: 3308,
  database: 'gym',
});

module.exports = connection;
