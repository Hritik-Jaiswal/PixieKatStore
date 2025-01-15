'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Mock data for orders (replace with actual data from your backend)
const mockOrders = [
  {
    id: 'ORD001',
    gameType: 'mlbb',
    gameId: '123456789',
    serverName: 'Asia Server',
    inGameName: 'PixieWarrior',
    items: [
      { name: '100 Diamonds', price: 99 },
      { name: 'Weekly Pass', price: 149 }
    ],
    totalAmount: 248,
    status: 'completed',
    orderDate: '2025-01-15T09:30:00',
    paymentMethod: 'UPI - Google Pay'
  },
  {
    id: 'ORD002',
    gameType: 'hok',
    gameId: '987654321',
    inGameName: 'KingSlayer',
    items: [
      { name: '200 Tokens', price: 199 }
    ],
    totalAmount: 199,
    status: 'processing',
    orderDate: '2025-01-15T10:15:00',
    paymentMethod: 'Card'
  }
];

const getGameTitle = (gameType) => {
  switch(gameType) {
    case 'mlbb':
      return 'Mobile Legends';
    case 'hok':
      return 'Honor of Kings';
    default:
      return '';
  }
};

const getStatusColor = (status) => {
  switch(status) {
    case 'completed':
      return 'bg-green-500';
    case 'processing':
      return 'bg-yellow-500';
    case 'failed':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export default function OrdersPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleWhatsAppSupport = () => {
    // Replace with your actual WhatsApp business number
    const whatsappNumber = '919876543210';
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const filteredOrders = mockOrders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.gameId.includes(searchTerm) ||
    order.inGameName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a103c] to-[#2d0808] py-12 px-4">
      <div className="max-w-6xl mt-11 pt-11 mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">My Orders</h1>
          
          {/* Search and Support */}
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 px-4 py-2 bg-[#1a103c] border border-[#4d2020] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4d4d] focus:border-transparent"
              />
              <svg className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <button
              onClick={handleWhatsAppSupport}
              className="flex items-center justify-center px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
              </svg>
              Contact Support
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-2xl overflow-hidden border border-[#4d2020] shadow-lg"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  {/* Order Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 relative rounded-lg overflow-hidden">
                        <Image
                          src={order.gameType === 'mlbb' ? '/assets/images/mobile-legends.webp' : '/assets/images/honor-of-kings.jpg'}
                          alt={getGameTitle(order.gameType)}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{getGameTitle(order.gameType)}</h3>
                        <p className="text-gray-400 text-sm">Order #{order.id}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Game ID: <span className="text-white">{order.gameId}</span></p>
                        <p className="text-gray-400">Player Name: <span className="text-white">{order.inGameName}</span></p>
                      </div>
                      <div>
                        <p className="text-gray-400">Date: <span className="text-white">
                          {new Date(order.orderDate).toLocaleString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span></p>
                        <p className="text-gray-400">Payment: <span className="text-white">{order.paymentMethod}</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Status and Actions */}
                  <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(order.status)}`}></div>
                      <span className="text-white capitalize">{order.status}</span>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <p className="text-white font-bold mb-2">₹{order.totalAmount.toLocaleString('en-IN')}</p>
                      <button
                        onClick={() => router.push(`/orders/${order.id}`)}
                        className="px-4 py-2 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                      >
                        View Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No orders found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
