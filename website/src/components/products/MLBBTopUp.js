'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const MLBBTopUp = () => {
  const [gameId, setGameId] = useState('');
  const [serverId, setServerId] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const router = useRouter();

  const products = {
    passes: [
      {
        id: 'weekly',
        name: 'Weekly Pass',
        price: 125,
        image: '/passes/weekly.png',
        description: 'Get daily diamonds and exclusive rewards'
      },
      {
        id: 'twilight',
        name: 'Twilight Pass',
        price: 710,
        image: '/passes/twilight.png',
        description: 'Premium pass with exclusive skins and effects'
      },
      {
        id: 'starlight',
        name: 'Starlight Pass',
        price: 250,
        image: '/passes/starlight.png',
        description: 'Monthly exclusive rewards and premium skin',
        requiresPhone: true,
        stock: 6
      }
    ],
    diamonds: [
      { id: 'diamonds_5', amount: 5, price: 13 },
      { id: 'diamonds_11', amount: 11, price: 20 },
      { id: 'diamonds_14', amount: 14, price: 29 },
      { id: 'diamonds_22', amount: 22, price: 38 },
      { id: 'diamonds_56', amount: 56, price: 80 },
      { id: 'diamonds_86', amount: 86, price: 110 },
      { id: 'diamonds_172', amount: 172, price: 210 },
      { id: 'diamonds_257', amount: 257, price: 305 },
      { id: 'diamonds_344', amount: 344, price: 415 },
      { id: 'diamonds_429', amount: 429, price: 520 },
      { id: 'diamonds_514', amount: 514, price: 615 },
      { id: 'diamonds_601', amount: 601, price: 720 },
      { id: 'diamonds_706', amount: 706, price: 820 },
      { id: 'diamonds_1028', amount: 1028, price: 1260 },
      { id: 'diamonds_1412', amount: 1412, price: 1660 },
      { id: 'diamonds_3688', amount: 3688, price: 4100 },
      { id: 'diamonds_5532', amount: 5532, price: 6200 },
      { id: 'diamonds_9288', amount: 9288, price: 9999 }
    ]
  };

  const handleVerification = (e) => {
    e.preventDefault();
    if (!gameId || !serverId) {
      alert('Please enter both Game ID and Server ID');
      return;
    }
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
    
    if (!gameId || !serverId) {
      alert('Please verify your account first');
      return;
    }

    // Get the first selected item for the order summary
    const selectedPack = selectedItems[0];
    
    // Build the URL with query parameters
    const params = new URLSearchParams({
      gameId,
      serverId,
      serverName: 'Server Name', // This will be replaced with actual server name from API
      packId: selectedPack.id
    });
    
    router.push(`/games/mobile-legends/order-summary?${params.toString()}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-[#1a103c]">
      {/* Game Verification Section - Always visible */}
      <div className="mb-8 bg-[#2a1b4a] p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Account Verification</h2>
        <form onSubmit={handleVerification} className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Game ID
            </label>
            <input
              type="text"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
              className="w-full px-4 py-2 bg-[#3d2a63] border border-[#6b4c9f] rounded-lg focus:ring-2 focus:ring-[#ff3e8a] focus:border-[#ff3e8a] text-white placeholder-gray-400"
              placeholder="Enter your Game ID"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Server ID
            </label>
            <input
              type="text"
              value={serverId}
              onChange={(e) => setServerId(e.target.value)}
              className="w-full px-4 py-2 bg-[#3d2a63] border border-[#6b4c9f] rounded-lg focus:ring-2 focus:ring-[#ff3e8a] focus:border-[#ff3e8a] text-white placeholder-gray-400"
              placeholder="Enter your Server ID"
              required
            />
          </div>
          <button
            type="submit"
            className="px-8 py-2 bg-gradient-to-r from-[#ff3e8a] to-[#ff7a45] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Verify
          </button>
        </form>
      </div>

      {/* Special Passes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Special Passes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.passes.map((pass) => (
            <div
              key={pass.id}
              className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                selectedItems.some(item => item.id === pass.id)
                  ? 'border-[#ff3e8a] bg-[#2a1b4a]'
                  : 'border-[#6b4c9f] hover:border-[#ff3e8a] bg-[#3d2a63]'
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
              <p className="text-[#ff3e8a] font-bold">₹{pass.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diamonds */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Diamonds</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.diamonds.map((diamond) => (
            <div
              key={diamond.id}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                selectedItems.some(item => item.id === diamond.id)
                  ? 'border-[#ff3e8a] bg-[#2a1b4a]'
                  : 'border-[#6b4c9f] hover:border-[#ff3e8a] bg-[#3d2a63]'
              }`}
              onClick={() => handleItemSelect(diamond)}
            >
              <h3 className="font-semibold mb-2 text-white">{diamond.amount} Diamonds</h3>
              <p className="text-[#ff3e8a] font-bold">₹{diamond.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Summary */}
      {selectedItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#2a1b4a] shadow-lg border-t border-[#6b4c9f] p-4 z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <span className="text-gray-300">Selected Items: {selectedItems.length}</span>
              <span className="ml-4 text-xl font-bold text-[#ff3e8a]">
                Total: ₹{selectedItems.reduce((sum, item) => sum + item.price, 0)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="px-8 py-3 bg-gradient-to-r from-[#ff3e8a] to-[#ff7a45] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MLBBTopUp;
