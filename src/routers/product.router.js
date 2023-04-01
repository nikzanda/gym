import { Router } from 'express';
import { findAll } from '../controllers/product.controller.js';

const router = Router();

router.get('', findAll)

export default router;