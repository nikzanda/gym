const { Router } = require('express');
const { findAll, find, create } = require('../controllers/product.controller');

const router = Router();

router.get('', findAll);
router.get('/:id', find);

router.post('', create);

module.exports = router;
