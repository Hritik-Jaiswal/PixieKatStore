import React from 'react';
import MLBBTopUp from '@/components/products/MLBBTopUp';
import Image from 'next/image';

export const metadata = {
  title: 'Mobile Legends Top Up - PixieKat Store',
  description: 'Purchase Mobile Legends diamonds and passes securely through PixieKat Store',
};

const mlbbProducts = {
  diamonds: [
    { id: 'mlbb_86', name: '86 Diamonds', amount: 86, price: 99 },
    { id: 'mlbb_172', name: '172 Diamonds', amount: 172, price: 198 },
    { id: 'mlbb_257', name: '257 Diamonds', amount: 257, price: 297 },
    { id: 'mlbb_344', name: '344 Diamonds', amount: 344, price: 396 },
    { id: 'mlbb_514', name: '514 Diamonds', amount: 514, price: 594 },
    { id: 'mlbb_706', name: '706 Diamonds', amount: 706, price: 792 },
  ],
  passes: [
    { id: 'weekly_pass', name: 'Weekly Pass', price: 149, image: '/passes/mlbb-weekly.png' },
    { id: 'twilight_pass', name: 'Twilight Pass', price: 299, image: '/passes/mlbb-twilight.png' },
    { id: 'starlight_pass', name: 'Starlight Pass', price: 449, image: '/passes/mlbb-starlight.png' },
  ]
};

export default function MobileLegends() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a103c] to-[#2d0808]">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/mobile-legends-banner.jpg"
            alt="Mobile Legends Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a103c]/80 to-[#2d0808]/80"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Mobile Legends
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Top up diamonds for Mobile Legends: Bang Bang quickly and securely. Get instant delivery and the best prices.
          </p>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff4d4d] to-transparent opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-10"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-10"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Top Up Diamonds</h2>
            <div className="h-1 flex-grow mx-4 bg-gradient-to-r from-transparent via-[#ff4d4d] to-transparent opacity-50"></div>
          </div>

          {/* Top Up Component */}
          <MLBBTopUp products={mlbbProducts} />
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-xl border border-[#4d2020] transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] rounded-full mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Instant Delivery</h3>
              <p className="text-gray-300">Get your diamonds delivered instantly to your account after payment.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-xl border border-[#4d2020] transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] rounded-full mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Secure Payment</h3>
              <p className="text-gray-300">Your transactions are protected with industry-standard security.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-xl border border-[#4d2020] transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] rounded-full mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">24/7 Support</h3>
              <p className="text-gray-300">Our customer support team is always ready to help you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
