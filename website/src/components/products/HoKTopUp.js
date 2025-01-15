'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HoKTopUp = () => {
  const [gameId, setGameId] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [step, setStep] = useState(1);
  const router = useRouter();

  const products = {
    passes: [
      {
        id: 'weekly',
        name: 'Weekly Card',
        price: 299,
        image: '/passes/weekly_hok.png',
      },
      {
        id: 'weekly_plus',
        name: 'Weekly Card+',
        price: 499,
        image: '/passes/weekly_plus_hok.png',
      }
    ],
    tokens: [
      { id: 'tokens_17', amount: 17, price: 25 },
      { id: 'tokens_88', amount: 88, price: 105 },
      { id: 'tokens_257', amount: 257, price: 295 },
      { id: 'tokens_432', amount: 432, price: 485 },
      { id: 'tokens_605', amount: 605, price: 680 },
      { id: 'tokens_895', amount: 895, price: 950 },
      { id: 'tokens_1353', amount: 1353, price: 1420 },
      { id: 'tokens_2724', amount: 2724, price: 2810 },
      { id: 'tokens_4580', amount: 4580, price: 4650 },
      { id: 'tokens_9160', amount: 9160, price: 9260 }
    ]
  };

  const handleVerification = (e) => {
    e.preventDefault();
    if (!gameId) {
      alert('Please enter your Game ID');
      return;
    }
    setStep(2);
  };

  const handleItemSelect = (item) => {
    const existingItem = selectedItems.find(i => i.id === item.id);
    if (existingItem) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      alert('Please select at least one item');
      return;
    }
    
    if (!gameId) {
      alert('Please verify your account first');
      return;
    }

    // Build the URL with query parameters for multiple items
    const params = new URLSearchParams();
    params.append('gameId', gameId);
    params.append('serverId', 'global'); // HoK uses a global server
    params.append('serverName', 'Global Server');

    // Add each selected item to the params
    selectedItems.forEach(item => {
      params.append('packId', item.id);
      params.append('packName', item.name || `${item.amount} Tokens`);
      params.append('packPrice', item.price.toString());
    });
    
    router.push(`/games/honor-of-kings/order-summary?${params.toString()}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-b from-[#1a0505] to-[#2d0808]">
      {/* Game Verification Section - Always visible */}
      <div className="mb-8 bg-gradient-to-br from-[#3d1515] to-[#2d0808] p-6 rounded-xl border border-[#4d2020] shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Account Verification</h2>
        <form onSubmit={handleVerification} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Game ID
            </label>
            <input
              type="text"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
              className="w-full px-4 py-2 bg-[#2d0808] border border-[#4d2020] rounded-lg focus:ring-2 focus:ring-[#ff4d4d] focus:border-[#ff4d4d] text-white placeholder-gray-400"
              placeholder="Enter your Game ID"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Verify Account
          </button>
        </form>
      </div>

      {/* Special Passes */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Special Passes</h2>
          <div className="h-1 flex-grow mx-4 bg-gradient-to-r from-transparent via-[#4d2020] to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.passes.map((pass) => (
            <div
              key={pass.id}
              className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all transform hover:-translate-y-1 hover:shadow-2xl ${
                selectedItems.some(item => item.id === pass.id)
                  ? 'border-[#ff4d4d] bg-gradient-to-br from-[#3d1515] to-[#2d0808]'
                  : 'border-[#4d2020] hover:border-[#ff4d4d] bg-gradient-to-br from-[#2d0808] to-[#1a0505]'
              }`}
              onClick={() => handleItemSelect(pass)}
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <Image
                  src={pass.image}
                  alt={pass.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">{pass.name}</h3>
              <p className="text-[#ff4d4d] font-bold">₹{pass.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tokens */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Tokens</h2>
          <div className="h-1 flex-grow mx-4 bg-gradient-to-r from-transparent via-[#4d2020] to-transparent"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.tokens.map((token) => (
            <div
              key={token.id}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all transform hover:-translate-y-1 hover:shadow-xl ${
                selectedItems.some(item => item.id === token.id)
                  ? 'border-[#ff4d4d] bg-gradient-to-br from-[#3d1515] to-[#2d0808]'
                  : 'border-[#4d2020] hover:border-[#ff4d4d] bg-gradient-to-br from-[#2d0808] to-[#1a0505]'
              }`}
              onClick={() => handleItemSelect(token)}
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#ff4d4d] to-[#ff1a1a] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{token.amount}</span>
                </div>
                <h3 className="font-semibold mb-2 text-white">{token.amount} Tokens</h3>
                <p className="text-[#ff4d4d] font-bold">₹{token.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Summary */}
      {selectedItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#2d0808] to-[#3d1515] shadow-lg border-t border-[#4d2020] p-4 z-10 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <span className="text-gray-300">Selected Items: {selectedItems.length}</span>
              <span className="ml-4 text-xl font-bold text-[#ff4d4d]">
                Total: ₹{selectedItems.reduce((sum, item) => sum + item.price, 0)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="px-8 py-3 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoKTopUp;
