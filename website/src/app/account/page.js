'use client';

import { useAuth } from '@/contexts/auth';

export default function AccountPage() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="bg-[#151632]/50 backdrop-blur-md border border-[#2a284d] rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400">Name</label>
            <p className="mt-1 text-lg">{user?.name || 'N/A'}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <p className="mt-1 text-lg">{user?.email}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#151632]/50 backdrop-blur-md border border-[#2a284d] rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <div className="space-y-4">
          <button 
            className="w-full sm:w-auto px-6 py-2 bg-[#ff4d4d] text-white rounded-md hover:bg-[#ff3333] transition-colors"
            onClick={() => alert('Change Password functionality coming soon!')}
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
