import { getConversation, markAsRead } from '../../models/message.models.js';

const getConversationController = async (req, res) => {
  try {
    const senderId = req.userId;
    const { receiverId } = req.params;
    
    // Get conversation
    const messages = await getConversation(senderId, receiverId);
    
    // Mark unread messages as read
    const unreadMessages = messages.filter(
      msg => !msg.read && msg.receiverId === senderId
    );
    
    await Promise.all(
      unreadMessages.map(msg => markAsRead(msg.id))
    );
    
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch conversation' });
  }
};

export default getConversationController;