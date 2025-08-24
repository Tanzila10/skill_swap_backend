import { prisma } from '../config/dbConnection.js'

export const checkChatPermission = async (req, res, next) => {
  try {
    const userId = req.user.userId
    const { receiverId } = req.body || req.params
    console.log("first", receiverId, req.params || req.body)

    if (!receiverId) {
      return res.status(400).json({ error: 'Receiver ID is required' })
    }

    if (userId === receiverId) {
      return res.status(400).json({ error: 'Cannot message yourself' })
    }

    // Check if users have any accepted swap requests between them
    const hasActiveSwap = await prisma.activeSwap.findFirst({
      where: {
        OR: [
          { user1_id: userId, user2_id: receiverId },
          { user1_id: receiverId, user2_id: userId }
        ],
        status: 'active'
      }
    })

    if (!hasActiveSwap) {
      return res.status(403).json({ 
        error: 'Chat not allowed. You need an active swap to message this user.' 
      })
    }

    req.activeSwap = hasActiveSwap
    next()
  } catch (error) {
    console.error('Chat permission check error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}