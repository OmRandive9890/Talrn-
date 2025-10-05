"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function RegistrationPage() {
  const [accountType, setAccountType] = useState('organisation');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('form'); // form | otp | success
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otpToken, setOtpToken] = useState(null);

  const handleSubmit = async () => {
    setError('');
    if (!email) return setError('Please provide a work email');
    try {
      setLoading(true);
      const res = await fetch('/api/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.error || 'Failed to send OTP');
        setLoading(false);
        return;
      }
      // store the stateless token if provided
      if (data.token) setOtpToken(data.token);
      setStep('otp');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setError('Server error');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    setError('');
    if (!otp) return setError('Enter the OTP sent to your email');
    try {
      setLoading(true);
      const res = await fetch('/api/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: otp }),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.reason || data.error || 'Invalid OTP');
        setLoading(false);
        return;
      }
      setStep('success');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setError('Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 pt-10">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-semibold font-['Nunito'] leading-tight text-gray-900 mb-6">
              Create your Talrn Account
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Talrn is an exclusive network of the world&apos;s top talent.
            </p>
            <p className="text-lg text-gray-600">
              We provide access to top companies and resources that can help accelerate your growth.
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="accountType"
                  value="organisation"
                  checked={accountType === 'organisation'}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  accountType === 'organisation' 
                    ? 'border-blue-600 bg-blue-600' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {accountType === 'organisation' && (
                    <div className="w-3 h-3 bg-white rounded-full" />
                  )}
                </div>
              </div>
              <span className="text-lg text-gray-700 font-medium">Organisation</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="accountType"
                  value="individual"
                  checked={accountType === 'individual'}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  accountType === 'individual' 
                    ? 'border-blue-600 bg-blue-600' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {accountType === 'individual' && (
                    <div className="w-3 h-3 bg-white rounded-full" />
                  )}
                </div>
              </div>
              <span className="text-lg text-gray-700 font-medium">Individual</span>
            </label>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            {accountType === 'organisation' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  placeholder="First Name *" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <Input 
                  type="text" 
                  placeholder="Last Name *" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <Input 
                  type="text" 
                  placeholder="Job title *" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <Input 
                  type="text" 
                  placeholder="Organization *" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <Input 
                  type="text" 
                  placeholder="Website *" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="Work email *" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-gray-50 border-gray-200 pr-32"
                  />
                </div>
                <Input 
                  type="tel" 
                  placeholder="Phone number *" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <Input 
                  type="text" 
                  placeholder="City *" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <Input 
                  type="text" 
                  placeholder="Corporate Registration Number *" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <Input 
                  type="text" 
                  placeholder="Referral code" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  placeholder="First Name *" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <Input 
                  type="text" 
                  placeholder="Last Name *" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <Input 
                  type="email" 
                  placeholder="Work email *" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <Input 
                  type="tel" 
                  placeholder="Phone number *" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <Input 
                  type="text" 
                  placeholder="City *" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
                <Input 
                  type="text" 
                  placeholder="Referral code" 
                  className="h-12 bg-gray-50 border-gray-200"
                />
              </div>
            )}

            <div className="flex justify-center mt-8">
              {step === 'form' && (
                <Button 
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-full text-lg font-medium"
                >
                  {loading ? 'Sending...' : 'Register'}
                </Button>
              )}

              {step === 'otp' && (
                <div className="w-full max-w-md">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="h-12 bg-gray-50 border-gray-200"
                    />
                    <Button type="button" onClick={handleVerify} disabled={loading} className="px-6">
                      {loading ? 'Verifying...' : 'Verify'}
                    </Button>
                  </div>
                  {error && (
                    <div className="text-center mt-3">
                      <div className="text-sm text-red-600">{error}</div>
                    </div>
                  )}
                  <div className="text-center mt-3">
                    <button
                      className="text-sm text-blue-600 underline"
                      onClick={() => setStep('form')}
                    >
                      Edit email
                    </button>
                  </div>
                </div>
              )}

              {step === 'success' && (
                <div className="text-center">
                  <div className="text-2xl text-green-600 font-bold">Verification successful</div>
                  <div className="text-sm text-gray-600">You may now proceed.</div>
                </div>
              )}
              {/* error shown next to OTP input above */}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Talrn</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">View iOS Profiles</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Vendor</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Apply As Vendor</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </div>
  );
}