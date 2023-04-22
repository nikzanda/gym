const db = require('../../db');

const findAll = (req, res) => {
  db.query(
    'SELECT * FROM `products`;',
    (err, values) => {
      res.json(values);
    },
    () => res.sendStatus(500),
  );
};

module.exports = {
  findAll,
};
