const migration = require('mysql-migrations');
const db = require('./db');

migration.init(db, `${__dirname}/migrations`, () => {
  // eslint-disable-next-line no-console
  console.log('finished running migrations');
});
