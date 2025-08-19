import { z } from "zod"

export const CategoryValidator = z.object({
  name: z.string().min(2)
})