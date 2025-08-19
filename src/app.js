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
import { connectWithRetry } from './config/dbConnection.js';
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

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
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