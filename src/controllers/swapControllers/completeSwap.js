import { prisma } from '../../config/dbConnection.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

const completeSwap = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { rating, feedback } = req.body
  const user_id = req.user.id

  const activeSwap = await prisma.activeSwap.findFirst({
    where: {
      id,
      OR: [
        { user1_id: user_id },
        { user2_id: user_id }
      ],
      status: 'active'
    }
  })

  if (!activeSwap) {
    return res.status(404).json({ error: "Active swap not found" })
  }

  // Check if other user has already completed
  const existingCompletion = await prisma.swapCompletion.findFirst({
    where: {
      active_swap_id: id,
      completed_by: user_id
    }
  })

  if (existingCompletion) {
    return res.status(400).json({ error: "You have already marked this swap as complete" })
  }

  const completion = await prisma.swapCompletion.create({
    data: {
      active_swap_id: id,
      completed_by: user_id,
      rating: rating || null,
      feedback: feedback || null
    }
  })

  // Check if both users have completed
  const completions = await prisma.swapCompletion.findMany({
    where: { active_swap_id: id }
  })

  if (completions.length === 2) {
    // Both completed - mark swap as finished
    await prisma.activeSwap.update({
      where: { id },
      data: { 
        status: 'completed',
        completed_at: new Date()
      }
    })
  }

  res.json({
    success: true,
    data: completion,
    message: completions.length === 2 ? "Swap completed by both users" : "Swap completion recorded"
  })
})

export default completeSwap;