import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { VendorType } from '../../types';

interface VenueAuthProps {
  onNavigate: (view: string) => void;
  onSuccess: () => void;
}

export default function VenueAuth({ onNavigate, onSuccess }: VenueAuthProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isSignUp) {
        // For sign up, we need to create a vendor account with venue type
        await signUp(email, password, 'vendor', 'venue');
        // Set vendor type in localStorage for the app to recognize
        localStorage.setItem('zinnia_vendorType', 'venue');
      } else {
        // For sign in, just authenticate normally
        await signIn(email, password);
        // Set vendor type in localStorage for the app to recognize
        localStorage.setItem('zinnia_vendorType', 'venue');
      }
      
      // Small delay to ensure auth state is updated
      setTimeout(() => {
        onSuccess();
      }, 100);
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f5fa] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-[#47567b] mb-2" style={{ fontFamily: 'Literata, serif' }}>
            Venue Portal
          </h1>
          <p className="text-[#47567b] text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Sign in to manage your venue listing
          </p>
          
          {/* Quick Test Button */}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => {
                setEmail('venue@test.com');
                setPassword('password123');
                setError('');
              }}
              className="text-xs text-blue-600 hover:text-blue-800 underline"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Use test credentials
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Literata, serif' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Literata, serif' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#667493] text-white py-3 rounded-lg hover:bg-[#5a6785] transition-colors disabled:opacity-50"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {loading ? 'Loading...' : (isSignUp ? 'Create Account' : 'Sign In')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-[#47567b] text-sm hover:underline"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </button>
        </div>

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => onNavigate('landing')}
            className="text-[#47567b] text-sm hover:underline"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
