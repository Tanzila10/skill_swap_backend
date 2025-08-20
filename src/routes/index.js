import express from 'express';
import authRoutes from './authRoutes.js';
import skillRoutes from './skillRoutes.js';
import messageRoutes from './messageRoutes.js'
import swapRequestRoutes from './swapRequestsRoutes.js'
// import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use('/auth', authRoutes);

router.use('/skills', skillRoutes);

router.use('/messages', messageRoutes);

router.use('/request', swapRequestRoutes);

export default router;
