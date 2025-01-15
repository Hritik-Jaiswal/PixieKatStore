'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#2d0808] to-[#1a103c] relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-white mb-4">Create Account!</h2>
          <p className="text-gray-200 text-lg">
            Join our gaming community and start your journey with us
          </p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-20"></div>
        <div className="absolute -top-32 -right-40 w-80 h-80 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-20"></div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#0a0b1a]">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-white mb-8">Create Account</h1>
          
          {/* Social Signup */}
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
            <span className="text-gray-400">or use your email for registration</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full px-4 py-3 bg-[#151632] border border-[#2a284d] rounded-lg focus:ring-2 focus:ring-[#ff4d4d] focus:border-[#ff4d4d] text-white placeholder-gray-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 bg-[#151632] border border-[#2a284d] rounded-lg focus:ring-2 focus:ring-[#ff4d4d] focus:border-[#ff4d4d] text-white placeholder-gray-400"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 bg-[#151632] border border-[#2a284d] rounded-lg focus:ring-2 focus:ring-[#ff4d4d] focus:border-[#ff4d4d] text-white placeholder-gray-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              SIGN UP
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[#ff4d4d] hover:text-[#ff6b6b] font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
