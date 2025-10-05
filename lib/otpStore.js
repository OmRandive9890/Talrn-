// Simple in-memory OTP store. Not for production use.
const otps = new Map();

// ttl in milliseconds
const DEFAULT_TTL = 1000 * 60 * 5; // 5 minutes

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function sendOtp(email, ttl = DEFAULT_TTL) {
  const code = generateOtp();
  const expiresAt = Date.now() + ttl;
  otps.set(email, { code, expiresAt });
  return { code, expiresAt };
}

export function verifyOtp(email, code) {
  const entry = otps.get(email);
  if (!entry) return { ok: false, reason: 'no_otp' };
  if (Date.now() > entry.expiresAt) {
    otps.delete(email);
    return { ok: false, reason: 'expired' };
  }
  if (entry.code !== code) return { ok: false, reason: 'invalid' };
  otps.delete(email);
  return { ok: true };
}

// Basic cleanup function to remove expired OTPs. Call occasionally.
export function cleanupExpired() {
  const now = Date.now();
  for (const [email, entry] of otps.entries()) {
    if (entry.expiresAt < now) otps.delete(email);
  }
}

export function _debug_getStore() {
  // For development only
  return Array.from(otps.entries());
}
