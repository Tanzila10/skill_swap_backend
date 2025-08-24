import { prisma } from "../../config/dbConnection.js"
import { asyncHandler } from "../../utils/asyncHandler.js"

export const markMessagesAsRead = asyncHandler(async (req, res) => {
  const userId = req.user.id
  const { senderId } = req.params

  const updatedMessages = await prisma.message.updateMany({
    where: {
      sender_id: senderId,
      receiver_id: userId,
      read: false
    },
    data: {
      read: true
    }
  })

  res.json({
    success: true,
    data: {
      markedCount: updatedMessages.count
    },
    message: 'Messages marked as read'
  })
})