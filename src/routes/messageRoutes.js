import express from 'express';
import {
    sendMessage,
    getConversation,
    getChatList,
    markMessagesAsRead,
    deleteMessage
} from '../controllers/messages/index.js';
import protectedRoutes from '../middleware/auth.js';
import { checkChatPermission } from '../middleware/checkChatPermission.js';

const router = express.Router();
router.use(protectedRoutes())

// Get all chats for current user
router.get('/chats', getChatList)

// Get conversation with specific user
router.get('/conversation/:receiverId', checkChatPermission, getConversation)

// Send message to specific user
router.post('/send', checkChatPermission, sendMessage)

// Mark messages as read
router.put('/mark-read/:senderId', markMessagesAsRead)

// Delete message (soft delete)
router.delete('/message/:messageId', deleteMessage)

export default router;