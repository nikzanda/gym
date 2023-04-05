const db = require('../../db.js')

const findAll = (req, res) => {
  db.query(
    'SELECT * FROM `products`;',
    (err, values) => {
      res.json(values)
    },
    (err) => res.sendStatus(500)
  );
}

module.exports = {
  findAll
}