import { prisma } from '../../config/dbConnection.js'
import { asyncHandler } from '../../utils/asyncHandler.js'

const sendSwapRequest = asyncHandler(async (req, res) => {
  const { receiver_id, offered_skill_id, requested_skill_id, message } = req.body
  const sender_id = req.user.userId
  console.log("user", req.user)
  console.log("body data", req.body);

  // Prevent self-request
  if (sender_id === receiver_id) {
    return res.status(400).json({ error: "Cannot send request to yourself" })
  }

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

  // Check for existing pending request (both directions)
  const existingRequest = await prisma.swapRequest.findFirst({
    where: {
      OR: [
        {
          sender_id,
          receiver_id,
          offered_skill_id,
          requested_skill_id,
          status: 'pending'
        },
        {
          sender_id: receiver_id,
          receiver_id: sender_id,
          offered_skill_id: requested_skill_id,
          requested_skill_id: offered_skill_id,
          status: 'pending'
        }
      ]
    }
  })

  if (existingRequest) {
    return res.status(409).json({ error: "Request already exists" })
  }

  const swapRequest = await prisma.swapRequest.create({
    data: {
      sender_id,
      receiver_id,
      offered_skill_id,
      requested_skill_id,
      message: message || null,
      status: 'pending'
    },
    include: {
      offered_skill: {
        select: { id: true, title: true, description: true }
      },
      requested_skill: {
        select: { id: true, title: true, description: true }
      },
      sender: {
        select: { id: true, name: true, email: true }
      },
      receiver: {
        select: { id: true, name: true, email: true }
      }
    }
  })

  res.status(201).json({
    success: true,
    data: swapRequest,
    message: "Swap request sent successfully"
  })
})

export default sendSwapRequest