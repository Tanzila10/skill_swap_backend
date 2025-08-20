import { prisma } from '../../config/dbConnection.js'
import { asyncHandler } from '../../utils/asyncHandler.js'

const acceptSwapRequest = asyncHandler(async (req, res) => {
  const { id } = req.params
  const user_id = req.user.id

  const swapRequest = await prisma.swapRequest.findFirst({
    where: {
      id,
      receiver_id: user_id,
      status: 'pending'
    },
    include: {
      sender: { select: { id: true, name: true } },
      offered_skill: { select: { title: true } },
      requested_skill: { select: { title: true } }
    }
  })

  if (!swapRequest) {
    return res.status(404).json({ error: "Request not found or already processed" })
  }

  // Use transaction to ensure data consistency
  const result = await prisma.$transaction(async (tx) => {
    // Update request status
    const updatedRequest = await tx.swapRequest.update({
      where: { id },
      data: { 
        status: 'accepted',
        updated_at: new Date()
      },
      include: {
        sender: { select: { id: true, name: true } },
        receiver: { select: { id: true, name: true } },
        offered_skill: { select: { id: true, title: true } },
        requested_skill: { select: { id: true, title: true } }
      }
    })

    // Create active swap
    const activeSwap = await tx.activeSwap.create({
      data: {
        swap_request_id: id,
        user1_id: swapRequest.sender_id,
        user2_id: swapRequest.receiver_id,
        skill1_id: swapRequest.offered_skill_id,
        skill2_id: swapRequest.requested_skill_id,
        status: 'active'
      }
    })

    return { updatedRequest, activeSwap }
  })

  res.json({
    success: true,
    data: result.updatedRequest,
    message: "Swap request accepted successfully"
  })
})

export default acceptSwapRequest;