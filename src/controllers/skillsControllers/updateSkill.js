const Skill = require('../../models/Skill');
import { prisma } from '../../config/dbConnection.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

const updateSkill = asyncHandler(async (req, res) => {
    try {
        const skillId = req.params.id;
        const { name, description, category } = req.body;

        const updatedSkill = await Skill.findByIdAndUpdate(
            skillId,
            { name, description, category },
            { new: true, runValidators: true }
        );

        if (!updatedSkill) {
            return res.status(404).json({ message: 'Skill not found' });
        }

        res.status(200).json(updatedSkill);

    } catch (error) {
        console.error("Error in update Skill:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default updateSkill;