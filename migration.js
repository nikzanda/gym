// import mysql from 'mysql2'
// import migration from 'mysql-migrations'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename)
const mysql = require('mysql2')
const migration = require('mysql-migrations')

const connection = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  port: 3308,
  database: 'gym'
})

migration.init(connection, `${__dirname}/migrations`, () => {
  console.log('finished running migrations')
})