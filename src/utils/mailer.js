import nodemailer from 'nodemailer';

// Create reusable transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: true, // true for 465, false for other ports
  pool: true,
  maxConnections: 5, // optional – defaults to 5
  maxMessages: 100, // optional – defaults to 100
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify connection configuration
transporter.verify((error) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
  }
});

// Email sending function
export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Skill-swap" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email send error:', error);
    throw new Error('Failed to send email');
  }
};

// OTP Email Template
export const otpEmailTemplate = (otp) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #333;">Email Verification</h2>
    <p>Your verification code is:</p>
    <div style="background: #f4f4f4; padding: 20px; text-align: center; margin: 20px 0;">
      <h1 style="margin: 0; letter-spacing: 3px;">${otp}</h1>
    </div>
    <p>This code will expire in 10 minutes.</p>
    <p>If you didn't request this, please ignore this email.</p>
  </div>
`;

export const careerTemplates = {
  applicationReceived: (name, jobTitle) => ({
    subject: `Application Received: ${jobTitle}`,
    html: `
      <p>Dear ${name},</p>
      <p>Thank you for applying for the ${jobTitle} position.</p>
      <p>We've received your application and will review it carefully.</p>
      <p>Best regards,<br>Hiring Team</p>
    `
  }),
  statusUpdate: (name, status) => {
    const templates = {
      REJECTED: {
        subject: 'Update on Your Application',
        html: `<p>After careful consideration, we regret to inform you that we have decided not to move forward with your application at this time.</p>`
      },
      HIRED: {
        subject: 'Congratulations!',
        html: `<p>We are pleased to offer you the position! Our hiring manager will contact you shortly with details.</p>`
      }
    };
    return templates[status] || null;
  }
};

export const sendBulkEmail = async (recipients, mailOptions) => {
  try {
    const results = [];
    const chunkSize = 50; // Send 50 emails at a time
    const delay = 2000; // Delay between chunks in ms
    
    for (let i = 0; i < recipients.length; i += chunkSize) {
      const chunk = recipients.slice(i, i + chunkSize);
      const chunkPromises = chunk.map(recipient => 
        sendEmail({
          ...mailOptions,
          to: recipient
        })
      );
      
      // Send current chunk
      const chunkResults = await Promise.allSettled(chunkPromises);
      results.push(...chunkResults);
      
      // Wait before sending next chunk
      if (i + chunkSize < recipients.length) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    // Process results
    const successful = results.filter(r => r.status === 'fulfilled' && r.value.success);
    const failed = results.filter(r => r.status === 'rejected' || !r.value?.success);
    
    return {
      total: recipients.length,
      successful: successful.length,
      failed: failed.length,
      failedRecipients: failed.map((f, i) => recipients[i]),
      details: results
    };
  } catch (error) {
    console.error('Bulk email sending error:', error);
    throw new Error('Failed to send bulk emails');
  }
};