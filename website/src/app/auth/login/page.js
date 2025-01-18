'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { useNavigation } from '@/contexts/navigation';
import { useAuth } from '@/contexts/auth';
import toast from 'react-hot-toast';
import { validateEmail, validatePassword } from '@/lib/validation';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login } = useAuth();
  const { navigate } = useNavigation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    
    console.log('Validation Results:', {
      emailError,
      passwordError,
      email: formData.email,
      passwordLength: formData.password.length
    });

    const newErrors = {
      email: emailError,
      password: passwordError,
    };

    setErrors(newErrors);
    return !emailError && !passwordError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1a103c] to-[#2d0808] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#ff4d4d] mix-blend-color opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-12">
          <div className="w-24 h-24 mx-auto relative mb-8">
            <Image
              src="/assets/logos/logo.png"
              alt="PixieKat Store Logo"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Welcome Back!</h2>
          <p className="text-gray-200 text-lg">
            To keep connected with us please login with your email-id and password
          </p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-20"></div>
        <div className="absolute -top-32 -right-40 w-80 h-80 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-20"></div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#0a0b1a]">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-white mb-8">Login to Account</h1>
          
          {/* Social Login */}
          <div className="flex justify-center space-x-4 mb-8">
            <button className="w-10 h-10 rounded-full bg-[#3b5998] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
              <FaFacebookF />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#db4437] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
              <FaGoogle />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
              <FaLinkedinIn />
            </button>
          </div>

          <div className="text-center mb-8">
            <span className="text-gray-400">or use your email for login</span>
          </div>

          <form onSubmit={async (e) => {
            e.preventDefault();
            console.log('Form submission started');
            
            if (!validateForm()) {
              console.log('Form validation failed');
              return;
            }
            
            console.log('Form data:', formData);
            setLoading(true);
            
            try {
              console.log('Making API request...');
              const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include',
              });

              console.log('API Response status:', res.status);
              const data = await res.json();
              console.log('API Response data:', data);

              if (!res.ok) {
                throw new Error(data.error || 'Invalid email or password');
              }

              console.log('Login successful, storing user data');
              await login(data.user);
              toast.success('Login successful!');

              // Verify the login worked
              const verifyResponse = await fetch('/api/auth/verify', {
                credentials: 'include'
              });
              const verifyData = await verifyResponse.json();
              console.log('Verify response:', verifyData);

              if (verifyResponse.ok) {
                // Navigate to home page
                router.push('/');
                router.refresh();
              } else {
                toast.error('Login succeeded but verification failed. Please try again.');
              }
            } catch (error) {
              console.error('Login error:', error);
              toast.error(error.message);
            } finally {
              setLoading(false);
            }
          }} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full px-4 py-3 bg-[#151632] border ${errors.email ? 'border-red-500' : 'border-[#2a284d]'} rounded-lg focus:ring-2 focus:ring-[#ff4d4d] focus:border-[#ff4d4d] text-white placeholder-gray-400`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={`w-full px-4 py-3 bg-[#151632] border ${errors.password ? 'border-red-500' : 'border-[#2a284d]'} rounded-lg focus:ring-2 focus:ring-[#ff4d4d] focus:border-[#ff4d4d] text-white placeholder-gray-400`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-400">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link href="/auth/forgot-password" className="text-[#ff4d4d] hover:text-[#ff6b6b]">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-lg font-semibold ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'} transition-opacity shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
            >
              {loading ? 'LOGGING IN...' : 'LOGIN'}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-[#ff4d4d] hover:text-[#ff6b6b] font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
