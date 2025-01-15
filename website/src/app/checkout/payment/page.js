'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const paymentMethods = [
  {
    id: 'upi',
    name: 'UPI',
    icon: '/payment/upi.png',
    providers: [
      { id: 'gpay', name: 'Google Pay', icon: '/payment/gpay.png' },
      { id: 'phonepe', name: 'PhonePe', icon: '/payment/phonepe.png' },
      { id: 'paytm', name: 'Paytm', icon: '/payment/paytm.png' },
      { id: 'bhim', name: 'BHIM', icon: '/payment/bhim.png' }
    ]
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: '/payment/card.png',
    providers: []
  },
  {
    id: 'netbanking',
    name: 'Net Banking',
    icon: '/payment/netbanking.png',
    providers: []
  },
  {
    id: 'wallet',
    name: 'Wallets',
    icon: '/payment/wallet.png',
    providers: [
      { id: 'paytm_wallet', name: 'Paytm Wallet', icon: '/payment/paytm.png' },
      { id: 'phonepe_wallet', name: 'PhonePe Wallet', icon: '/payment/phonepe.png' }
    ]
  }
];

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Get order details from URL parameters
  const gameType = searchParams.get('gameType');
  const gameId = searchParams.get('gameId');
  const totalAmount = searchParams.get('totalAmount');

  const handlePaymentMethodSelect = (methodId) => {
    setSelectedMethod(methodId);
    setSelectedProvider('');
  };

  const handleProviderSelect = (providerId) => {
    setSelectedProvider(providerId);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      // Here you would integrate with your payment gateway
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating API call
      router.push('/checkout/success');
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

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

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-[#1a103c] to-[#2d0808]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Payment</h1>
          <p className="text-gray-300">Choose your preferred payment method</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Payment Methods */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-2xl overflow-hidden border border-[#4d2020] shadow-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Payment Methods</h2>
                
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div key={method.id}>
                      <button
                        onClick={() => handlePaymentMethodSelect(method.id)}
                        className={`w-full p-4 rounded-lg border transition-all ${
                          selectedMethod === method.id
                            ? 'bg-[#2d1b4d] border-[#ff4d4d]'
                            : 'bg-[#1a103c] border-[#4d2020] hover:border-[#6b4c9f]'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 relative">
                            <Image
                              src={method.icon}
                              alt={method.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-white font-medium">{method.name}</span>
                        </div>
                      </button>

                      {/* Providers */}
                      {selectedMethod === method.id && method.providers.length > 0 && (
                        <div className="mt-4 ml-8 grid grid-cols-2 gap-4">
                          {method.providers.map((provider) => (
                            <button
                              key={provider.id}
                              onClick={() => handleProviderSelect(provider.id)}
                              className={`p-3 rounded-lg border transition-all ${
                                selectedProvider === provider.id
                                  ? 'bg-[#2d1b4d] border-[#ff4d4d]'
                                  : 'bg-[#1a103c] border-[#4d2020] hover:border-[#6b4c9f]'
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 relative">
                                  <Image
                                    src={provider.icon}
                                    alt={provider.name}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                                <span className="text-white text-sm">{provider.name}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-2xl overflow-hidden border border-[#4d2020] shadow-lg sticky top-4">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Game</span>
                    <span>{getGameTitle()}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Game ID</span>
                    <span>{gameId}</span>
                  </div>
                  <div className="flex justify-between items-center text-white font-semibold text-lg pt-4 border-t border-[#4d2020]">
                    <span>Total Amount</span>
                    <span>₹{parseInt(totalAmount).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={!selectedMethod || isProcessing}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : 'Pay Now'}
                </button>

                <div className="mt-4 flex items-center justify-center space-x-2 text-gray-300 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
