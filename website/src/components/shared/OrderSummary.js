'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OrderSummary({ 
  gameType, 
  gameId, 
  serverId, 
  serverName, 
  selectedPacks,
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

  const calculateTotal = () => {
    return selectedPacks.reduce((total, pack) => total + pack.price, 0);
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
        <div className="bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-2xl overflow-hidden border border-[#4d2020] shadow-lg">
          {/* Header */}
          <div className="p-6 border-b border-[#4d2020]">
            <h2 className="text-2xl font-bold text-white">Order Summary</h2>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Game Info */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">{getGameTitle()}</h3>
              <p className="text-gray-300">Game ID: {gameId}</p>
              {serverId && <p className="text-gray-300">Server ID: {serverId}</p>}
              {serverName && <p className="text-gray-300">Server: {serverName}</p>}
            </div>

            {/* Selected Items */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Selected Items</h3>
              <div className="space-y-3">
                {selectedPacks.map((pack, index) => (
                  <div key={index} className="flex justify-between items-center text-gray-300">
                    <span>{pack.name}</span>
                    <span>₹{pack.price.toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-[#4d2020] pt-4 mt-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Total Amount</span>
                <span className="text-xl font-bold text-white">₹{calculateTotal().toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-6 border-t border-[#4d2020] bg-[#1a103c]">
            <div className="flex gap-4">
              <button
                onClick={onEdit}
                className="flex-1 px-6 py-3 bg-transparent border border-[#4d2020] text-white rounded-lg hover:bg-[#2d1b4d] transition-colors"
              >
                Edit Order
              </button>
              <button
                onClick={handleProceedToPayment}
                disabled={isLoading}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
