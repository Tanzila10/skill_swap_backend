import express from 'express';
import { getConversationController, sendMessage } from '../controllers/messages/index.js';

const router = express.Router();

router.post('/', sendMessage);
router.get('/:receiverId', getConversationController);

export default router;