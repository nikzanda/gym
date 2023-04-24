const { Router } = require('express');
const {
  findAll,
  find,
  create,
  erase,
} = require('../controllers/product.controller');

const router = Router();

router.get('', findAll);
router.get('/:id', find);

router.post('', create);

router.delete('/:id', erase);

module.exports = router;
