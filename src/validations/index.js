import { ZodError } from 'zod';

export const validateBody = (schema) => {
  return async (req, res, next) => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log("error", error.message)
        // const errors = error.message.map(err => ({
        //   field: err.path.join(','),
        //   message: err.message,
        // }));
        return res.status(400).json({ error: error.message });
      }

      return next(error); // Forward other unexpected errors
    }
  };
};