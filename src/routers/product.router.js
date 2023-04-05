const { Router } = require('express')
const { findAll } = require('../controllers/product.controller.js')

const router = Router();

router.get('', findAll)

module.exports = router