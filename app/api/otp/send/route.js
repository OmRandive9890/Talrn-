import { NextResponse } from 'next/server';
import { sendOtp } from '@/lib/otpStore';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
    }

    const { code, expiresAt } = sendOtp(email);

    // Try to send an email if SMTP environment variables are provided.
    // Expected env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, OTP_FROM
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromAddress = process.env.OTP_FROM || `no-reply@${(email && email.split('@')[1]) || 'example.com'}`;

    let mailSent = false;
    let mailError = null;
    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(smtpPort),
          secure: Number(smtpPort) === 465, // true for 465, false for other ports
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const message = {
          from: fromAddress,
          to: email,
          subject: 'Your verification code',
          text: `Your verification code is: ${code}`,
          html: `<p>Your verification code is: <strong>${code}</strong></p><p>It expires in 5 minutes.</p>`,
        };

        await transporter.sendMail(message);
        mailSent = true;
      } catch (e) {
        // log and fall back to console preview
        console.error('Failed to send OTP email:', e);
        mailError = String(e?.message || e);
      }
    }

    // Fallback: log OTP for dev if no mail sent
    if (!mailSent) {
      console.log(`[OTP SEND] email=${email} code=${code} expiresAt=${new Date(expiresAt).toISOString()}`);
    }

    // Build a signed token (stateless) so verification can work even if in-memory store is lost.
    // Token format: base64url(payload).base64url(hmac)
    const secret = process.env.OTP_SECRET || 'dev_otp_secret_change_me';
    const payload = JSON.stringify({ email, code, expiresAt });
    const base = Buffer.from(payload).toString('base64url');
    const sig = crypto.createHmac('sha256', secret).update(base).digest('base64url');
    const token = `${base}.${sig}`;

    // Optionally return the code in development only
    const isDev = process.env.NODE_ENV !== 'production';

    return NextResponse.json({ ok: true, token, preview: isDev ? { code } : undefined, mailSent, mailError });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
