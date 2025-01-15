import React from 'react';
import HoKTopUp from '@/components/products/HoKTopUp';
import Image from 'next/image';

export const metadata = {
  title: 'Honor of Kings Top Up - PixieKat Store',
  description: 'Purchase Honor of Kings tokens and passes securely through PixieKat Store',
};

const hokProducts = {
  tokens: [
    { id: 'tokens_17', name: '17 Tokens', amount: 17, price: 25 },
    { id: 'tokens_88', name: '88 Tokens', amount: 88, price: 105 },
    { id: 'tokens_257', name: '257 Tokens', amount: 257, price: 295 },
    { id: 'tokens_432', name: '432 Tokens', amount: 432, price: 485 },
    { id: 'tokens_605', name: '605 Tokens', amount: 605, price: 680 },
    { id: 'tokens_895', name: '895 Tokens', amount: 895, price: 950 },
  ],
  passes: [
    { id: 'weekly_card', name: 'Weekly Card', price: 149, image: '/passes/hok-weekly.png' },
    { id: 'weekly_plus', name: 'Weekly Card+', price: 299, image: '/passes/hok-weekly-plus.png' },
  ]
};

export default function HoKPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#1a0505] to-[#2d0808]">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[#ff4d4d] mix-blend-color opacity-20"></div>
        <Image
          src="/games/hok-banner.jpg"
          alt="Honor of Kings Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d0808]/80 to-[#2d0808]">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#1a0505]/80 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 h-full flex items-end pb-12">
            <div className="text-white relative">
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-sm font-medium rounded-full mb-4 shadow-lg">
                Adventure
              </div>
              <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#ff4d4d]">
                Honor of Kings
              </h1>
              <p className="text-lg opacity-90 max-w-2xl text-gray-200">
                Top up tokens and passes for Honor of Kings. Fast, secure, and reliable service.
              </p>
              <div className="absolute -top-32 -right-20 w-64 h-64 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-[#ff4d4d] mix-blend-multiply opacity-5"></div>
        <HoKTopUp products={hokProducts} />
      </div>
    </main>
  );
}
