import { prisma } from '../../config/dbConnection.js'
import { asyncHandler } from '../../utils/asyncHandler.js'

const cancelSwapRequest = asyncHandler(async (req, res) => {
  const { id } = req.params
  const user_id = req.user.id

  const swapRequest = await prisma.swapRequest.findFirst({
    where: {
      id,
      sender_id: user_id,
      status: 'pending'
    }
  })

  if (!swapRequest) {
    return res.status(404).json({ error: "Request not found or cannot be cancelled" })
  }

  const updatedRequest = await prisma.swapRequest.update({
    where: { id },
    data: { 
      status: 'cancelled',
      updated_at: new Date()
    }
  })

  res.json({
    success: true,
    data: updatedRequest,
    message: "Swap request cancelled"
  })
})

export default cancelSwapRequest;