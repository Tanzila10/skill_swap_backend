import { createMessage } from '../../models/message.models.js';
import { getUser } from '../../utils/userManager.js';
import * as socketService from '../../services/socket.js';

const sendMessage = async (req, res) => {
  try {
    const { content, receiverId } = req.body;
    const senderId = req.userId;
    
    if (!content || !receiverId) {
      return res.status(400).json({ error: 'Content and receiver ID are required' });
    }
    
    // Create message
    const message = await createMessage(content, senderId, receiverId);
    
    // Get sockets for users
    const senderSocket = getUser(senderId);
    const receiverSocket = getUser(receiverId);
    
    // Emit to sender
    if (senderSocket) {
      socketService.getIO().to(senderSocket.socketId).emit('newMessage', {
        ...message,
        direction: 'outgoing'
      });
    }
    
    // Emit to receiver
    if (receiverSocket) {
      socketService.getIO().to(receiverSocket.socketId).emit('newMessage', {
        ...message,
        direction: 'incoming'
      });
    }
    
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

export default sendMessage;