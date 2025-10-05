import { NextResponse } from 'next/server';
import { verifyOtp } from '@/lib/otpStore';
import crypto from 'crypto';

export async function POST(req) {
  try {
    const { email, code, token } = await req.json();
    if (!email || typeof email !== 'string' || !code || typeof code !== 'string') {
      return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
    }

    const res = verifyOtp(email, code);
    if (res.ok) return NextResponse.json({ ok: true });

    // If in-memory verification failed, try stateless token verification (HMAC)
    if (token && typeof token === 'string') {
      try {
        const secret = process.env.OTP_SECRET || 'dev_otp_secret_change_me';
        const [base, sig] = token.split('.');
        if (!base || !sig) return NextResponse.json({ ok: false, reason: 'invalid_token' }, { status: 400 });
        const expected = crypto.createHmac('sha256', secret).update(base).digest('base64url');
        if (sig !== expected) return NextResponse.json({ ok: false, reason: 'invalid_token' }, { status: 400 });
        const payload = JSON.parse(Buffer.from(base, 'base64url').toString('utf8'));
        if (payload.email !== email) return NextResponse.json({ ok: false, reason: 'email_mismatch' }, { status: 400 });
        if (payload.code !== code) return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 400 });
        if (Date.now() > payload.expiresAt) return NextResponse.json({ ok: false, reason: 'expired' }, { status: 400 });
        return NextResponse.json({ ok: true });
      } catch (e) {
        console.error('token verify error', e);
        return NextResponse.json({ ok: false, reason: 'invalid_token' }, { status: 400 });
      }
    }

    return NextResponse.json({ ok: false, reason: res.reason }, { status: 400 });
  } catch (err) {
  console.error(err);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
