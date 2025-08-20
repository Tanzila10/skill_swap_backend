import { prisma } from '../../config/dbConnection.js'
import { asyncHandler } from '../../utils/asyncHandler.js'

const getActiveSwaps = asyncHandler(async (req, res) => {
  const user_id = req.user.userId
//   console.log("fetching user active swaps for user_id:", req.user)

  const activeSwaps = await prisma.activeSwap.findMany({
    where: {
      OR: [
        { user1_id: user_id },
        { user2_id: user_id }
      ],
      status: 'active'
    },
    include: {
      user1: { select: { id: true, name: true, email: true } },
      user2: { select: { id: true, name: true, email: true } },
      skill1: { select: { id: true, title: true, description: true } },
      skill2: { select: { id: true, title: true, description: true } },
      swap_request: {
        select: { message: true, created_at: true }
      }
    },
    orderBy: { created_at: 'desc' }
  })

  res.json({
    success: true,
    data: activeSwaps
  })
})

export default getActiveSwaps;