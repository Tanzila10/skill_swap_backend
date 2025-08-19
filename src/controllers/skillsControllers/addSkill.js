import { prisma } from '../../config/dbConnection.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

const addSkills = asyncHandler(async (req, res) => {
    const { user_id, title, description, level, category, achievement } = req.body;

    console.log("Body data", req.body);

    // Validate required fields
    // if (!userId || !title || !category) {
    //     return res.status(400).json({ error: 'Missing required fields: userId, title, or category' });
    // }

    try {
        // Create category if it doesn't exist (using unique constraint)
        const categoryRecord = await prisma.skillCategory.upsert({
            where: { name: category },
            update: {}, // Do nothing if exists
            create: { name: category }
        });

        // Check if user already has this skill in this category
        const existingSkill = await prisma.skill.findFirst({
            where: {
                user_id: user_id,
                title: title,
                category_id: categoryRecord.id
            }
        });

        if (existingSkill) {
            return res.status(409).json({
                error: "You already have this skill in this category",
                existingSkill
            });
        }

        // Create new skill
        const newSkill = await prisma.skill.create({
            data: {
                title,
                description: description || null,
                level: level || 'beginner',
                achievement: achievement || null,
                user_id: user_id,
                category_id: categoryRecord.id
            }
        });

        res.status(201).json(newSkill);

    } catch (error) {
        console.error("Error in addSkills:", error);
        
        // Handle specific Prisma errors
        if (error.code === 'P2002') {
            if (error.meta?.target?.includes('SkillCategory_name_key')) {
                return res.status(409).json({ error: "Category name already exists" });
            }
            return res.status(409).json({ error: "Duplicate skill detected" });
        }
        
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default addSkills;