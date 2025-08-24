import { prisma } from '../../config/dbConnection.js'
import { asyncHandler } from '../../utils/asyncHandler.js'

export const getConversation = asyncHandler(async (req, res) => {
  const userId = req.user.id
  const { receiverId } = req.params
  const { 
    page = 1, 
    limit = 50, 
    before // cursor for pagination
  } = req.query

  const pageNum = parseInt(page)
  const limitNum = Math.min(parseInt(limit), 100) // Max 100 messages per request

  // Build where clause
  const whereClause = {
    OR: [
      { sender_id: userId, receiver_id: receiverId },
      { sender_id: receiverId, receiver_id: userId }
    ]
  }

  // Add cursor-based pagination if before timestamp provided
  if (before) {
    whereClause.timestamp = {
      lt: new Date(before)
    }
  }

  // Get messages
  const messages = await prisma.message.findMany({
    where: whereClause,
    include: {
      sender: {
        select: { id: true, name: true }
      }
    },
    orderBy: { timestamp: 'desc' },
    take: limitNum,
    skip: before ? 0 : (pageNum - 1) * limitNum
  })

  // Mark unread messages as read
  const unreadMessageIds = messages
    .filter(msg => !msg.read && msg.receiver_id === userId)
    .map(msg => msg.id)

  if (unreadMessageIds.length > 0) {
    await prisma.message.updateMany({
      where: { id: { in: unreadMessageIds } },
      data: { read: true }
    })
  }

  // Get total count for pagination info
  const totalMessages = await prisma.message.count({
    where: {
      OR: [
        { sender_id: userId, receiver_id: receiverId },
        { sender_id: receiverId, receiver_id: userId }
      ]
    }
  })

  // Reverse to get chronological order (oldest first)
  const sortedMessages = messages.reverse()

  res.json({
    success: true,
    data: {
      messages: sortedMessages,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total: totalMessages,
        hasMore: totalMessages > pageNum * limitNum,
        oldestTimestamp: messages.length > 0 ? messages[0].timestamp : null
      }
    }
  })
})