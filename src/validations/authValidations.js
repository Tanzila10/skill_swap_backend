import { z } from 'zod';
import { prisma } from '../config/dbConnection.js';

// Base email schema
const emailSchema = z
  .string()
  .trim()
  .min(1, 'Email is required')
  .email('Invalid email format')
  .transform(email => email.toLowerCase()); // Similar to normalizeEmail

// Base password schema
const passwordSchema = z
  .string()
  .trim()
  .min(1, 'Password is required')
  .min(8, 'Password must be at least 8 characters')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/\d/, 'Password must contain at least one number')
  .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character');

// Auth validation schemas
export const signupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .min(2, 'Name must be between 2-50 characters')
    .max(50, 'Name must be between 2-50 characters'),
  
  email: emailSchema.refine(async (email) => {
    const user = await prisma.user.findUnique({ where: { email } });
    return !user;
  }, 'Email already in use'),
  
  password: passwordSchema
});

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().trim().min(1, 'Password is required')
});

export const verifyOTPSchema = z.object({
  email: emailSchema,
  otp: z
    .string()
    .trim()
    .min(1, 'OTP is required')
    .length(6, 'OTP must be 6 digits')
    .regex(/^\d+$/, 'OTP must contain only numbers')
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().trim().min(1, 'Refresh token is required')
});

export const forgotPasswordSchema = z.object({
  email: emailSchema
});

export const resetPasswordSchema = z.object({
  token: z.string().trim().min(1, 'Token is required'),
  password: passwordSchema
});