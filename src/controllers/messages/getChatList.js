import { prisma } from "../../config/dbConnection.js"
import { asyncHandler } from "../../utils/asyncHandler.js"

export const getChatList = asyncHandler(async (req, res) => {
  const userId = req.user.userId
  console.log("user", req.user)

  // Get all active swaps for this user
  const activeSwaps = await prisma.activeSwap.findMany({
    where: {
      OR: [
        { user1_id: userId },
        { user2_id: userId }
      ],
      status: 'active'
    },
    include: {
      user1: {
        select: { id: true, name: true }
      },
      user2: {
        select: { id: true, name: true }
      },
      skill1: {
        select: { title: true }
      },
      skill2: {
        select: { title: true }
      }
    }
  })

  // Get latest message for each chat
  const chatsWithMessages = await Promise.all(
    activeSwaps.map(async (swap) => {
      const otherUser = swap.user1_id === userId ? swap.user2 : swap.user1
      const userSkill = swap.user1_id === userId ? swap.skill1 : swap.skill2
      const otherUserSkill = swap.user1_id === userId ? swap.skill2 : swap.skill1

      // Get latest message
      const latestMessage = await prisma.message.findFirst({
        where: {
          OR: [
            { sender_id: userId, receiver_id: otherUser.id },
            { sender_id: otherUser.id, receiver_id: userId }
          ]
        },
        orderBy: { timestamp: 'desc' },
        include: {
          sender: {
            select: { id: true, name: true }
          }
        }
      })

      // Count unread messages
      const unreadCount = await prisma.message.count({
        where: {
          sender_id: otherUser.id,
          receiver_id: userId,
          read: false
        }
      })

      return {
        swapId: swap.id,
        user: otherUser,
        yourSkill: userSkill.title,
        theirSkill: otherUserSkill.title,
        latestMessage,
        unreadCount,
        lastActivity: latestMessage?.timestamp || swap.created_at
      }
    })
  )

  // Sort by last activity
  chatsWithMessages.sort((a, b) => 
    new Date(b.lastActivity) - new Date(a.lastActivity)
  )

  res.json({
    success: true,
    data: chatsWithMessages
  })
})