const { Router } = require('express');
const { findAll, find } = require('../controllers/product.controller');

const router = Router();

router.get('', findAll);
router.get('/:id', find);

module.exports = router;
