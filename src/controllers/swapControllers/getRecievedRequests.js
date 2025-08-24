import { prisma } from '../../config/dbConnection.js'
import { asyncHandler } from '../../utils/asyncHandler.js'

const getReceivedRequests = asyncHandler(async (req, res) => {
  const user_id = req.user.userId
  const { status = 'all', page = 1, limit = 10 } = req.query

  const skip = (parseInt(page) - 1) * parseInt(limit)

  const whereClause = {
    receiver_id: user_id,
    ...(status !== 'all' && { status })
  }

  const [requests, total] = await Promise.all([
    prisma.swapRequest.findMany({
      where: whereClause,
      include: {
        offered_skill: {
          select: { id: true, title: true, description: true }
        },
        requested_skill: {
          select: { id: true, title: true, description: true }
        },
        sender: {
          select: { id: true, name: true, email: true }
        }
      },
      orderBy: { created_at: 'desc' },
      skip,
      take: parseInt(limit)
    }),
    prisma.swapRequest.count({ where: whereClause })
  ])

  res.json({
    success: true,
    data: {
      requests,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / parseInt(limit))
      }
    }
  })
})

export default getReceivedRequests;