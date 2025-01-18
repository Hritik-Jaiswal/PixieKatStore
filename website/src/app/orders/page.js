'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '@/contexts/auth';
import { useRouter } from 'next/navigation';

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
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, fetch orders from your API
    // For now, we'll use mock data
    const fetchOrders = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setOrders(mockOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  const handleWhatsAppSupport = () => {
    // Replace with your actual WhatsApp business number
    const whatsappNumber = '919876543210';
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.gameId.includes(searchTerm) ||
    order.inGameName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a103c] to-[#2d0808] py-12 px-4 flex items-center justify-center">
        <div className="text-white text-xl">Loading your orders...</div>
      </div>
    );
  }

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
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z"/>
              </svg>
              Need Help?
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No orders found</p>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-[#151632]/50 backdrop-blur-md border border-[#2a284d] rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Order #{order.id}
                    </h3>
                    <p className="text-gray-400">
                      {new Date(order.orderDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className={`${getStatusColor(order.status)} px-3 py-1 rounded-full text-white text-sm font-medium`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="border-t border-[#2a284d] pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400">Game</p>
                      <p className="text-white">{getGameTitle(order.gameType)}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Game ID</p>
                      <p className="text-white">{order.gameId}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">In-Game Name</p>
                      <p className="text-white">{order.inGameName}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Payment Method</p>
                      <p className="text-white">{order.paymentMethod}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-400 mb-2">Items</p>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-white">{item.name}</span>
                          <span className="text-white">₹{item.price}</span>
                        </div>
                      ))}
                      <div className="border-t border-[#2a284d] pt-2 mt-2">
                        <div className="flex justify-between font-semibold">
                          <span className="text-white">Total</span>
                          <span className="text-white">₹{order.totalAmount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
