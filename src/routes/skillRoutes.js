import express from 'express';
import { addSkills, getAllSkills, getSkill } from '../controllers/skillsControllers/index.js';
import protectedRoutes from '../middleware/auth.js';
import { AddSkillValidator } from '../validations/skill.validators.js';
import { validateBody } from '../validations/index.js';

const router = express.Router();

router.route('/').get(protectedRoutes(), getAllSkills);
router.route('/add-skill').post(protectedRoutes(), validateBody(AddSkillValidator), addSkills);
router.route('/:skill_id').get(protectedRoutes(), getSkill);

export default router;