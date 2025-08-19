import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../../config/dbConnection.js';
import { generateOTP, isOTPExpired } from '../../utils/otp.js';
import { sendEmail } from '../../utils/mailer.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
import { generateAccessToken, verifyToken } from '../../utils/tokens.js';

export const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  console.log('Extracted email:', email);

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    res.status(400);
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const otp = generateOTP();

  const otp_expiry = new Date(Date.now() + 10 * 60 * 1000);
console.log('otp_expiry being saved:', otp_expiry.toISOString());

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      otp,
      otp_expiry: otp_expiry
    }
  });

  await sendEmail({
    to: email,
    subject: 'Verify your email',
    text: `Your OTP is ${otp}`
  });

  res.status(201).json({
    id: user.id,
    name: user.name,
    email: user.email,
    message: 'OTP sent to email'
  });
});

// @desc    Authenticate user
// @route   POST /api/auth/login
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (user && (await bcrypt.compare(password, user.password))) {
    if (!user.is_verified) {
      res.status(401);
      throw new Error('Email not verified');
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: 30 * 60 * 1000 // 30 minutes
    });

    // Create refresh token
    const refreshToken = jwt.sign(
      { userId: user.id }, 
      process.env.REFRESH_SECRET,
      { expiresIn: 10 * 60 * 1000 } // 10 minutes
    );

    // Save refresh token to DB
    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        user_id: user.id,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000)
      }
    });

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 10 * 60 * 1000 // 10 minutes
    });

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      is_admin: user.is_admin,
      token: refreshToken
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

export const refreshToken = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;
  
  if (!refreshToken) {
    res.status(400);
    throw new Error('Refresh token is required');
  }

  // Verify refresh token
  const decoded = verifyToken(refreshToken, process.env.REFRESH_SECRET);

  // Check if token exists in DB
  const tokenRecord = await prisma.refreshToken.findUnique({
    where: { token: refreshToken },
  });

  if (!tokenRecord) {
    res.status(401);
    throw new Error('Invalid refresh token');
  }

  // Generate new access token
  const accessToken = generateAccessToken(decoded.userId);

  res.json({ accessToken });
});

// @desc    Logout user
// @route   POST /api/auth/logout
export const logout = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;

  // Delete the refresh token
  await prisma.refreshToken.deleteMany({
    where: { token: refreshToken },
  });

  // Clear JWT cookie
  res.clearCookie('jwt', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
  });

  res.status(200).json({ message: 'Logged out successfully' });
});

// @desc    Verify OTP
// @route   POST /api/auth/verify-otp
export const verifyOTP = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;
  
  const user = await prisma.user.findUnique({ where: { email } });
  
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  
  if (!user.otp || user.otp !== otp) {
    res.status(400);
    throw new Error('Invalid OTP');
  }
  
  if (isOTPExpired(user.otp_expiry)) {
    res.status(400);
    throw new Error('OTP has expired');
  }
  
  // Update user verification status
  await prisma.user.update({
    where: { id: user.id },
    data: { 
      is_verified: true,
      otp: null,
      otp_expiry: null 
    }
  });
  
  res.status(200).json({ message: 'Email verified successfully' });
});

// @desc    Resend OTP
// @route   POST /api/auth/resend-otp
export const resendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log("first", email)
  
  const user = await prisma.user.findUnique({ where: { email } });
  console.log("second", user)
  console.log("third", user?.is_verified)
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  
  if (user.is_verified) {
    res.status(400);
    throw new Error('Email is already verified');
  }
  
  const otp = generateOTP();
  const otp_expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
  
  await prisma.user.update({
    where: { id: user.id },
    data: { otp, otp_expiry }
  });

  // sendEmail({
  //   to: email,
  //   subject: 'Verify your email',
  //   text: `Your OTP is ${otp}`
  // });
  
  await sendEmail({
    to: email,
    subject: 'New Verification Code',
    text: `Your OTP is ${otp}`
  });
  
  res.status(200).json({ message: 'New OTP sent successfully' });
});

export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  
  const user = await prisma.user.findUnique({ where: { email } });
  
  if (user) {
    const resetToken = jwt.sign(
      { userId: user.id },
      process.env.RESET_SECRET,
      { expiresIn: '10m' }
    );
    
    await prisma.user.update({
      where: { id: user.id },
      data: { reset_token: resetToken }
    });
    
    const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${resetToken}`;
    
    await sendEmail({
      to: email,
      subject: 'Password Reset Request',
      html: `
        <p>You requested a password reset. Click the link below to reset your password:</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>This link will expire in 10 minutes.</p>
      `
    });
  }
  
  res.json({ message: 'If an account exists, a password reset email has been sent' });
});

// @desc    Reset password
// @route   POST /api/auth/reset-password
export const resetPassword = asyncHandler(async (req, res) => {
  const { token, password } = req.body;
  
  try {
    const decoded = jwt.verify(token, process.env.RESET_SECRET);
    const user = await prisma.user.findUnique({ 
      where: { id: decoded.userId, reset_token: token } 
    });
    
    if (!user) {
      res.status(400);
      throw new Error('Invalid or expired token');
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    await prisma.user.update({
      where: { id: user.id },
      data: { 
        password: hashedPassword,
        reset_token: null
      }
    });
    
    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(400);
    throw new Error('Invalid or expired token');
  }
});

// export { signup, login, refreshToken, logout, verifyOTP, resendOTP, forgotPassword, resetPassword };