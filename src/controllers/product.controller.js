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
    'SELECT * FROM `products` WHERE `id` = ?;',
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

const create = (req, res) => {
  const { name, code, price } = req.body;

  db.query(
    'INSERT INTO `products`(`name`, `code`, `price`) VALUES (?, ?, ?);',
    [name, code, price],
    (err, result) => {
      if (err) {
        res.status(400).json(err);
        return;
      }

      const { insertId } = result;

      db.query(
        'SELECT * FROM `products` WHERE `id` = ?;',
        [insertId],
        (selectErr, selectResult) => {
          if (selectErr) {
            res.status(400).json(selectErr);
            return;
          }

          const [record] = selectResult;

          if (!record) {
            res.sendStatus(404);
            return;
          }

          res.status(201).json(record);
        },
      );
    },
  );
};

const erase = (req, res) => {
  const { id } = req.params;

  db.query(
    'DELETE FROM `products` WHERE `id` = ?',
    [id],
    (err) => {
      if (err) {
        res.status(400).json(err);
        return;
      }

      res.sendStatus(204);
    },
  );
};

module.exports = {
  findAll,
  find,
  create,
  erase,
};
