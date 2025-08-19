import { z } from "zod"

export const AddSkillValidator = z.object({
  title: z.string().min(2),
  description: z.string().optional(),
  level: z.enum(["beginner", "intermediate", "advanced", "expert"]),
  achievement: z.string().optional(),
  category: z.string(),
  user_id: z.string()
})
