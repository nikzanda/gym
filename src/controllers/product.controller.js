const db = require('../../db');

const findAll = (req, res) => {
  db.query(
    'SELECT * FROM `products`;',
    (err, result) => {
      if (err) {
        res.status(400).json(err);
        return;
      }
      res.json(result);
    },
  );
};

const find = (req, res) => {
  const { id } = req.params;

  db.query(
    'SELECT * FROM `products` WHERE `id` = ?',
    [id],
    (err, result) => {
      if (err) {
        res.status(400).json(err);
        return;
      }

      const [record] = result;

      if (!record) {
        res.sendStatus(404);
        return;
      }

      res.json(record);
    },
  );
};

module.exports = {
  findAll,
  find,
};
