import { prisma } from '../../config/dbConnection.js'
import { asyncHandler } from '../../utils/asyncHandler.js'

const rejectSwapRequest = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { reason } = req.body
  const user_id = req.user.id

  const swapRequest = await prisma.swapRequest.findFirst({
    where: {
      id,
      receiver_id: user_id,
      status: 'pending'
    }
  })

  if (!swapRequest) {
    return res.status(404).json({ error: "Request not found or already processed" })
  }

  const updatedRequest = await prisma.swapRequest.update({
    where: { id },
    data: { 
      status: 'rejected',
      rejection_reason: reason || null,
      updated_at: new Date()
    },
    include: {
      sender: { select: { id: true, name: true } },
      offered_skill: { select: { title: true } },
      requested_skill: { select: { title: true } }
    }
  })

  res.json({
    success: true,
    data: updatedRequest,
    message: "Swap request rejected"
  })
})

export default rejectSwapRequest;