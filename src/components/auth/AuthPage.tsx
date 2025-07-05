import React, { useState } from 'react';
import { BookOpen, Mail, Lock, User, GraduationCap, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: '',
    role: 'teacher'
  });

  const { login, signup, loginWithGoogle } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    
    if (!formData.password.trim()) {
      setError('Password is required');
      return false;
    }
    
    if (!isLogin && !formData.displayName.trim()) {
      setError('Full name is required');
      return false;
    }
    
    if (!isLogin && formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await signup(formData.email, formData.password, formData.displayName, formData.role);
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      setError(error.message || 'An unexpected error occurred');
    }
    
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    
    try {
      await loginWithGoogle();
    } catch (error: any) {
      console.error('Google auth error:', error);
      setError(error.message || 'Google sign-in failed');
    }
    
    setLoading(false);
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setFormData({
      email: '',
      password: '',
      displayName: '',
      role: 'teacher'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-nunito flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f59e0b%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 pointer-events-none"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-amber-900 mb-2">Sahayak</h1>
          <p className="text-amber-700/80 text-lg">AI Teaching Assistant</p>
          <p className="text-amber-600/70 text-sm mt-2">
            {isLogin ? 'Welcome back! Sign in to continue' : 'Join us to revolutionize education'}
          </p>
        </div>

        {/* Auth Form */}
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
          <div className="flex mb-6">
            <button
              onClick={() => !loading && setIsLogin(true)}
              disabled={loading}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                isLogin
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg'
                  : 'text-amber-700 hover:bg-white/20'
              } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Sign In
            </button>
            <button
              onClick={() => !loading && setIsLogin(false)}
              disabled={loading}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg'
                  : 'text-amber-700 hover:bg-white/20'
              } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Sign Up
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-100/50 border border-red-300/50 rounded-xl">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-amber-900 font-medium mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600/70" />
                  <input
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required={!isLogin}
                    disabled={loading}
                    className="w-full pl-12 pr-4 py-4 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-amber-900 placeholder-amber-700/50 transition-all disabled:opacity-50"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-amber-900 font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600/70" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-4 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-amber-900 placeholder-amber-700/50 transition-all disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600/70" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                  disabled={loading}
                  className="w-full pl-12 pr-12 py-4 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-amber-900 placeholder-amber-700/50 transition-all disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-600/70 hover:text-amber-700 transition-colors disabled:opacity-50"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-amber-900 font-medium mb-2">Role</label>
                <div className="relative">
                  <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600/70" />
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    disabled={loading}
                    className="w-full pl-12 pr-4 py-4 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-amber-900 transition-all appearance-none disabled:opacity-50"
                  >
                    <option value="teacher">Teacher</option>
                    <option value="administrator">Administrator</option>
                    <option value="student">Student</option>
                    <option value="parent">Parent</option>
                  </select>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold py-4 rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>{isLogin ? 'Signing In...' : 'Creating Account...'}</span>
                </>
              ) : (
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              )}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-amber-300/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/20 text-amber-700 rounded-lg">Or continue with</span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full mt-4 bg-white/30 hover:bg-white/40 text-amber-900 font-semibold py-4 rounded-xl transition-all duration-300 border border-white/40 hover:border-white/60 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google</span>
            </button>
          </div>

          {isLogin && (
            <div className="mt-6 text-center">
              <button 
                className="text-amber-700 hover:text-amber-800 text-sm font-medium transition-colors"
                disabled={loading}
              >
                Forgot your password?
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <p className="text-amber-600/70 text-sm">
            By continuing, you agree to our{' '}
            <button className="text-amber-700 hover:text-amber-800 font-medium">Terms of Service</button>
            {' '}and{' '}
            <button className="text-amber-700 hover:text-amber-800 font-medium">Privacy Policy</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;