import express from 'express';
import {
  signup,
  login,
  refreshToken,
  logout,
  verifyOTP,
  resendOTP,
  forgotPassword,
  resetPassword
} from '../controllers/authControllers/controller.js';
import {
  signupSchema,
  loginSchema,
  verifyOTPSchema,
  refreshTokenSchema,
  forgotPasswordSchema,
  resetPasswordSchema
} from '../validations/authValidations.js';
import { validateBody } from '../validations/index.js';
// import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/Signup', validateBody(signupSchema), signup); // verified
router.post('/verify-otp', validateBody(verifyOTPSchema), verifyOTP); // verified
router.post('/resend-otp', resendOTP); // verified
router.post('/Login', validateBody(loginSchema), login); // verified
router.post('/refresh-token', validateBody(refreshTokenSchema), refreshToken); // verified
router.post('/logout', logout); // verified
router.post('/forgot-password', validateBody(forgotPasswordSchema), forgotPassword); // verified
router.post('/reset-password', validateBody(resetPasswordSchema), resetPassword); // verified

export default router;