const { Router } = require('express');
const { findAll } = require('../controllers/product.controller');

const router = Router();

router.get('', findAll);

module.exports = router;
