import express from 'express';
import { sendSwapRequest } from '../controllers/swapControllers/index.js';
import protectedRoutes from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(protectedRoutes(), sendSwapRequest);

export default router;