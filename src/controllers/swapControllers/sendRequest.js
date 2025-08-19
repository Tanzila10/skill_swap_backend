import { prisma } from '../../config/dbConnection.js'
import { asyncHandler } from '../../utils/asyncHandler.js'

const sendSwapRequest = asyncHandler(async (req, res) => {
  const { receiver_id, offered_skill_id, requested_skill_id } = req.body
  const sender_id = req.user.id

  // Verify skills exist and belong to users
  const [offeredSkill, requestedSkill] = await Promise.all([
    prisma.skill.findFirst({
      where: { id: offered_skill_id, user_id: sender_id }
    }),
    prisma.skill.findFirst({
      where: { id: requested_skill_id, user_id: receiver_id }
    })
  ])

  if (!offeredSkill || !requestedSkill) {
    return res.status(404).json({ error: "Skills not found" })
  }

  // Check for existing pending request
  const existingRequest = await prisma.swapRequest.findFirst({
    where: {
      sender_id,
      receiver_id,
      offered_skill_id,
      requested_skill_id,
      status: 'pending'
    }
  })

  if (existingRequest) {
    return res.status(409).json({ error: "Request already sent" })
  }

  const swapRequest = await prisma.swapRequest.create({
    data: {
      sender_id,
      receiver_id,
      offered_skill_id,
      requested_skill_id,
      status: 'pending'
    },
    include: {
      offered_skill: true,
      requested_skill: true,
      receiver: { select: { id: true, name: true } }
    }
  })

  res.status(201).json(swapRequest)
})

export default sendSwapRequest