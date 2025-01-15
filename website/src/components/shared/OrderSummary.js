'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OrderSummary({ 
  gameType, 
  gameId, 
  serverId, 
  serverName, 
  selectedPack,
  userInfo,
  onProceed,
  onEdit
}) {
  const [isLoading, setIsLoading] = useState(false);

  const getGameTitle = () => {
    switch(gameType) {
      case 'mlbb':
        return 'Mobile Legends';
      case 'hok':
        return 'Honor of Kings';
      default:
        return '';
    }
  };

  const handleProceedToPayment = async () => {
    setIsLoading(true);
    try {
      await onProceed();
    } catch (error) {
      console.error('Error proceeding to payment:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mt-8 mx-auto">
        {/* Order Summary Card */}
        <div className="bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-2xl overflow-hidden border border-[#4d2020] shadow-lg">
          {/* Header */}
          <div className="p-6 border-b border-[#4d2020]">
            <h2 className="text-2xl font-bold text-white">Order Summary</h2>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Game Info */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                <Image
                  src={gameType === 'mlbb' ? '/assets/images/mobile-legends.webp' : '/assets/images/honor-of-kings.jpg'}
                  alt={getGameTitle()}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{getGameTitle()}</h3>
                <p className="text-gray-400">Top Up</p>
              </div>
            </div>

            {/* Account Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-lg bg-[#1a103c]/50">
                <span className="text-gray-300">Game ID</span>
                <span className="text-white font-medium">{gameId}</span>
              </div>
              
              {gameType === 'mlbb' && (
                <>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-[#1a103c]/50">
                    <span className="text-gray-300">Server ID</span>
                    <span className="text-white font-medium">{serverId}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-[#1a103c]/50">
                    <span className="text-gray-300">Server Name</span>
                    <span className="text-white font-medium">{serverName}</span>
                  </div>
                </>
              )}
            </div>

            {/* Selected Pack */}
            <div className="p-4 rounded-lg bg-gradient-to-r from-[#ff4d4d]/10 to-[#ff1a1a]/10 border border-[#ff4d4d]/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">Selected Pack</span>
                <span className="text-[#ff4d4d] font-semibold">{selectedPack.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Price</span>
                <span className="text-white font-bold">${selectedPack.price}</span>
              </div>
            </div>

            {/* User Info */}
            {userInfo && (
              <div className="space-y-2">
                <h4 className="text-white font-medium">Customer Information</h4>
                <div className="p-4 rounded-lg bg-[#1a103c]/50">
                  <p className="text-gray-300">{userInfo.email}</p>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="p-6 border-t border-[#4d2020] space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white font-medium">Total Amount</span>
              <span className="text-2xl font-bold text-white">${selectedPack.price}</span>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={onEdit}
                className="flex-1 px-6 py-3 bg-[#1a103c] text-white rounded-full font-medium hover:bg-[#2d1a5f] transition-colors"
              >
                Edit Order
              </button>
              <button
                onClick={handleProceedToPayment}
                disabled={isLoading}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-full font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 p-4 rounded-lg bg-[#1a103c]/30 border border-[#4d2020]">
          <div className="flex items-center space-x-2 text-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm">Your payment information is secure and encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
}
