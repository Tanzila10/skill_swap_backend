import { prisma } from '../../config/dbConnection.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

const getSkillsByUserId = asyncHandler(async (req, res) => {
  const { user_id } = req.params;
  try {
    const skills = await prisma.skill.findMany({
        where: { user_id },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });
    
    if (!skills || skills.length === 0) {
      return res.status(404).json({ message: 'No skills found for this user' });
    }
    
    res.json({
        count: skills.length,
        skills: skills
    });
  }
  catch (error) {
    console.error("Error fetching skills by user ID:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default getSkillsByUserId;