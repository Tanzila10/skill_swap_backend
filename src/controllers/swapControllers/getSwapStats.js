import { prisma } from '../../config/dbConnection.js'
import { asyncHandler } from '../../utils/asyncHandler.js'

const getSwapStats = asyncHandler(async (req, res) => {
  const user_id = req.user.userId

  const stats = await Promise.all([
    // Sent requests count
    prisma.swapRequest.count({
      where: { sender_id: user_id }
    }),
    // Received requests count  
    prisma.swapRequest.count({
      where: { receiver_id: user_id }
    }),
    // Active swaps count
    prisma.activeSwap.count({
      where: {
        OR: [
          { user1_id: user_id },
          { user2_id: user_id }
        ],
        status: 'active'
      }
    }),
    // Completed swaps count
    prisma.activeSwap.count({
      where: {
        OR: [
          { user1_id: user_id },
          { user2_id: user_id }
        ],
        status: 'completed'
      }
    }),
    // Pending received requests
    prisma.swapRequest.count({
      where: {
        receiver_id: user_id,
        status: 'pending'
      }
    })
  ])

  res.json({
    success: true,
    data: {
      totalSent: stats[0],
      totalReceived: stats[1],
      activeSwaps: stats[2],
      completedSwaps: stats[3],
      pendingReceived: stats[4]
    }
  })
})

export default getSwapStats;