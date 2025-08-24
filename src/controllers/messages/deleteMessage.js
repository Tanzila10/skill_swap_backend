import { prisma } from "../../config/dbConnection.js"
import { asyncHandler } from "../../utils/asyncHandler.js"

export const deleteMessage = asyncHandler(async (req, res) => {
  const userId = req.user.id
  const { messageId } = req.params

  // Only sender can delete their message
  const message = await prisma.message.findFirst({
    where: {
      id: messageId,
      sender_id: userId
    }
  })

  if (!message) {
    return res.status(404).json({ error: 'Message not found or unauthorized' })
  }

  // Soft delete by updating content
  await prisma.message.update({
    where: { id: messageId },
    data: {
      content: '[Message deleted]',
      updated_at: new Date()
    }
  })

  res.json({
    success: true,
    message: 'Message deleted successfully'
  })
})