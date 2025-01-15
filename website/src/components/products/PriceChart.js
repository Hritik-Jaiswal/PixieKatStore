"use client";

import { useState } from 'react';

const PriceChart = ({ game, diamonds }) => {
  const [selectedPack, setSelectedPack] = useState(null);
  const [userId, setUserId] = useState('');
  const [serverId, setServerId] = useState(''); // For MLBB
  const [zoneId, setZoneId] = useState('');    // For MLBB

  const handleSubmit = (e) => {
    e.preventDefault();
    // Will implement checkout logic later
    console.log({
      game,
      pack: selectedPack,
      userId,
      serverId,
      zoneId
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {diamonds.map((pack) => (
          <button
            key={pack.id}
            onClick={() => setSelectedPack(pack)}
            className={`relative p-4 rounded-lg border-2 transition-all ${
              selectedPack?.id === pack.id
                ? 'border-federal bg-federal/10'
                : 'border-gray-200 hover:border-federal/50'
            }`}
          >
            <div className="text-center">
              <img
                src={pack.image || '/diamond-icon.png'}
                alt={`${pack.amount} Diamonds`}
                className="w-16 h-16 mx-auto mb-2"
              />
              <h3 className="font-bold text-lg">{pack.amount} Diamonds</h3>
              <p className="text-sm text-gray-600 mb-2">₹{pack.price}</p>
              {pack.bonus && (
                <span className="absolute top-2 right-2 bg-federal text-white text-xs px-2 py-1 rounded-full">
                  +{pack.bonus} Bonus
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {selectedPack && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-federal mb-4">Enter Game Details</h3>
          
          <div>
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-federal focus:border-federal"
              placeholder="Enter your User ID"
              required
            />
          </div>

          {game === 'Mobile Legends' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="serverId" className="block text-sm font-medium text-gray-700 mb-1">
                  Server ID
                </label>
                <input
                  type="text"
                  id="serverId"
                  value={serverId}
                  onChange={(e) => setServerId(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-federal focus:border-federal"
                  placeholder="Enter Server ID"
                  required
                />
              </div>
              <div>
                <label htmlFor="zoneId" className="block text-sm font-medium text-gray-700 mb-1">
                  Zone ID
                </label>
                <input
                  type="text"
                  id="zoneId"
                  value={zoneId}
                  onChange={(e) => setZoneId(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-federal focus:border-federal"
                  placeholder="Enter Zone ID"
                  required
                />
              </div>
            </div>
          )}

          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium text-gray-900 mb-2">Order Summary</h4>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Selected Pack:</span>
              <span>{selectedPack.amount} Diamonds</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Price:</span>
              <span>₹{selectedPack.price}</span>
            </div>
            {selectedPack.bonus && (
              <div className="flex justify-between text-sm text-green-600">
                <span>Bonus Diamonds:</span>
                <span>+{selectedPack.bonus}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-federal hover:bg-federal/90 text-white font-bold py-3 px-4 rounded-md transition-colors"
          >
            Proceed to Checkout
          </button>
        </form>
      )}
    </div>
  );
};

export default PriceChart;
