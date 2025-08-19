import { Server } from 'socket.io';
import { addUser, removeUser } from '../utils/userManager.js';
import { verifyToken } from '../utils/tokens.js';

let io = null;

// Initialize Socket.IO
export const init = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN,
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    
    // Handle authentication
    socket.on('authenticate', (token) => {
      const decoded = verifyToken(token);
      if (!decoded) {
        socket.emit('authenticationError', 'Invalid token');
        return;
      }
      
      // Add user to active users
      addUser(socket.id, decoded.userId);
      console.log(`User ${decoded.userId} authenticated with socket ${socket.id}`);
      
      // Send confirmation
      socket.emit('authenticated', { userId: decoded.userId });
    });
    
    // Handle disconnections
    socket.on('disconnect', () => {
      const user = removeUser(socket.id);
      if (user) {
        console.log(`User ${user.userId} disconnected`);
      }
    });
  });
  
  return io;
};

// Get Socket.IO instance
export const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
};

