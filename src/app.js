import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// import { dbConnection } from './config/dbConnection.js';
import routes from './routes/index.js';
import cookieParser from 'cookie-parser';
dotenv.config();
import * as socketService from './services/socket.js';
import { connectWithRetry, prisma } from './config/dbConnection.js';
// import userRoutes from './routes/userRoutes.js';
// import postRoutes from './routes/postRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const server = http.createServer(app);

// Initialize Socket.IO
socketService.init(server);

app.use('/api', routes);

app.get('/health', async (req, res) => {
  try {
    // Check database connection
    await prisma.$runCommandRaw({ ping: 1 });
    
    // Check if replica set has a primary
    const status = await prisma.$runCommandRaw({ isMaster: 1 });
    const hasPrimary = status.ismaster || status.primary;
    
    res.status(200).json({ 
      status: 'OK', 
      database: 'connected',
      replicaSet: hasPrimary ? 'primary-available' : 'no-primary',
      timestamp: new Date() 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'ERROR', 
      error: error.message,
      timestamp: new Date() 
    });
  }
});

app.get('/api/health', (req, res) => {
  res.send('Welcome to the SkillSwap API');
});

connectWithRetry().then(() => {
server.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
  console.log(`WebSocket server available at ws://localhost:${process.env.PORT || 5000}`);
});
})