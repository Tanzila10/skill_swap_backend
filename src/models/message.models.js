import { prisma } from "../config/dbConnection.js";

export const createMessage = async (content, senderId, receiverId) => {
  return prisma.message.create({
    data: { content, senderId, receiverId },
    include: {
      sender: { select: { id: true, username: true } },
      receiver: { select: { id: true, username: true } }
    }
  });
};

export const getConversation = async (senderId, receiverId) => {
  return prisma.message.findMany({
    where: {
      OR: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId }
      ]
    },
    orderBy: { timestamp: 'asc' },
    include: {
      sender: { select: { id: true, username: true } },
      receiver: { select: { id: true, username: true } }
    }
  });
};

export const markAsRead = async (messageId) => {
  return prisma.message.update({
    where: { id: messageId },
    data: { read: true }
  });
};