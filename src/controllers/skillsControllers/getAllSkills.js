import { prisma } from '../../config/dbConnection.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

const getAllSkills = asyncHandler(async (req, res) => {
  try {
    // Parse query parameters with defaults
    const limit = parseInt(req.query.limit) || 10;
    const cursor = req.query.cursor || null;
    
    const skills = await prisma.skill.findMany({
      take: limit + 1,  // Fetch one extra to check next page
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,  // Skip cursor itself
      orderBy: { id: 'asc' },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    // Filter out skills with null users and log the orphaned skills
    const validSkills = skills.filter(skill => {
      if (!skill.user) {
        console.warn(`Orphaned skill found: ${skill.id} - user_id: ${skill.user_id} does not exist`);
        return false;
      }
      return true;
    });

    // Determine next cursor from valid skills
    let nextCursor = null;
    if (validSkills.length > limit) {
      nextCursor = validSkills[limit - 1].id;  // Last item in current page
      validSkills.pop();  // Remove extra item
    }

    res.json({
      skills: validSkills,
      nextCursor,
    });
  } catch (error) {
    console.error("Error fetching skills:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default getAllSkills;