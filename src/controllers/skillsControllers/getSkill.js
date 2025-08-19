import { prisma } from '../../config/dbConnection.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

const getSkill = asyncHandler(async (req, res) => {
  const { skill_id } = req.params;
  try {
    const skill = await prisma.skill.findUnique({
        where: { id: skill_id },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json(skill);
  }
  catch (error) {
    console.error("Error fetching skill:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
    
});

export default getSkill;