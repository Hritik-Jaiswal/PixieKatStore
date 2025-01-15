'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import OrderSummary from '@/components/shared/OrderSummary';

export default function MLBBOrderSummaryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get order details from URL parameters
  const gameId = searchParams.get('gameId');
  const serverId = searchParams.get('serverId');
  const serverName = searchParams.get('serverName');

  // Get selected packs from URL
  const packIds = searchParams.getAll('packId');
  const packNames = searchParams.getAll('packName');
  const packPrices = searchParams.getAll('packPrice');

  // Create array of selected packs
  const selectedPacks = packIds.map((id, index) => ({
    id,
    name: packNames[index],
    price: parseInt(packPrices[index])
  }));

  // Mock user data (replace with actual user data from your auth system)
  const userInfo = {
    email: 'user@example.com',
  };

  const handleProceedToPayment = async () => {
    // Add your payment processing logic here
    router.push('/checkout/payment');
  };

  const handleEditOrder = () => {
    router.back();
  };

  if (!gameId || !serverId || !packIds.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Invalid Order</h2>
          <p className="text-gray-300 mb-6">Some required information is missing.</p>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <OrderSummary
      gameType="mlbb"
      gameId={gameId}
      serverId={serverId}
      serverName={serverName}
      selectedPacks={selectedPacks}
      userInfo={userInfo}
      onProceed={handleProceedToPayment}
      onEdit={handleEditOrder}
    />
  );
}
