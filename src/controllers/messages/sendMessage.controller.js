import { prisma } from '../../config/dbConnection.js'
import { asyncHandler } from '../../utils/asyncHandler.js'
import * as socketService from '../../services/socket.js'

export const sendMessage = asyncHandler(async (req, res) => {
  const { content, receiverId } = req.body
  const senderId = req.user.userId
  console.log("first", receiverId, req.body)
  if (!content?.trim()) {
    return res.status(400).json({ error: 'Message content cannot be empty' })
  }

  if (content.length > 1000) {
    return res.status(400).json({ error: 'Message too long. Maximum 1000 characters.' })
  }

  // Create message
  const message = await prisma.message.create({
    data: {
      content: content.trim(),
      sender_id: senderId,
      receiver_id: receiverId
    },
    include: {
      sender: {
        select: { id: true, name: true }
      },
      receiver: {
        select: { id: true, name: true }
      }
    }
  })

  // Emit via socket if available
  try {
    const io = socketService.getIO()
    if (io) {
      // Emit to receiver
      io.to(`user_${receiverId}`).emit('newMessage', {
        ...message,
        direction: 'incoming'
      })
      
      // Emit to sender for confirmation
      io.to(`user_${senderId}`).emit('messageSent', {
        ...message,
        direction: 'outgoing'
      })
    }
  } catch (socketError) {
    console.error('Socket emission error:', socketError)
    // Continue even if socket fails
  }

  res.status(201).json({
    success: true,
    data: message,
    message: 'Message sent successfully'
  })
})