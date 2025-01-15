'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Mock data for orders (replace with actual data from your backend)
const mockOrders = {
  'ORD001': {
    id: 'ORD001',
    gameType: 'mlbb',
    gameId: '123456789',
    serverId: '12345',
    serverName: 'Asia Server',
    inGameName: 'PixieWarrior',
    items: [
      { name: '100 Diamonds', price: 99 },
      { name: 'Weekly Pass', price: 149 }
    ],
    totalAmount: 248,
    status: 'completed',
    orderDate: '2025-01-15T09:30:00',
    paymentMethod: 'UPI - Google Pay',
    paymentId: 'PAY123456789',
    email: 'user@example.com'
  },
  'ORD002': {
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
    paymentMethod: 'Card',
    paymentId: 'PAY987654321',
    email: 'user@example.com'
  }
};

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

export default function OrderDetailPage({ params }) {
  const router = useRouter();
  const order = mockOrders[params.orderId];

  const handleWhatsAppSupport = () => {
    // Replace with your actual WhatsApp business number
    const whatsappNumber = '919876543210';
    const message = `Hi, I need help with my order ${order.id}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a103c] to-[#2d0808] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Order not found</h1>
          <button
            onClick={() => router.push('/orders')}
            className="px-6 py-3 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Orders
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a103c] to-[#2d0808] py-12 px-4">
      <div className="max-w-4xl mt-8 pt-8 mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => router.push('/orders')}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button
            onClick={handleWhatsAppSupport}
            className="flex items-center px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
            </svg>
            Need Help?
          </button>
        </div>

        {/* Order Details Card */}
        <div className="bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-2xl overflow-hidden border border-[#4d2020] shadow-lg">
          {/* Order Header */}
          <div className="p-6 border-b border-[#4d2020]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src={order.gameType === 'mlbb' ? '/assets/images/mobile-legends.webp' : '/assets/images/honor-of-kings.jpg'}
                    alt={getGameTitle(order.gameType)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">{getGameTitle(order.gameType)}</h1>
                  <p className="text-gray-400">Order #{order.id}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(order.status)}`}></div>
                <span className="text-white capitalize">{order.status}</span>
              </div>
            </div>
          </div>

          {/* Order Content */}
          <div className="p-6 space-y-6">
            {/* Game Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Game Details</h3>
                <p className="text-gray-400">Game ID: <span className="text-white">{order.gameId}</span></p>
                {order.serverId && (
                  <p className="text-gray-400">Server ID: <span className="text-white">{order.serverId}</span></p>
                )}
                {order.serverName && (
                  <p className="text-gray-400">Server: <span className="text-white">{order.serverName}</span></p>
                )}
                <p className="text-gray-400">Player Name: <span className="text-white">{order.inGameName}</span></p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Order Details</h3>
                <p className="text-gray-400">Date: <span className="text-white">
                  {new Date(order.orderDate).toLocaleString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span></p>
                <p className="text-gray-400">Payment Method: <span className="text-white">{order.paymentMethod}</span></p>
                <p className="text-gray-400">Payment ID: <span className="text-white">{order.paymentId}</span></p>
              </div>
            </div>

            {/* Items */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Items</h3>
              <div className="bg-[#1a103c] rounded-lg overflow-hidden">
                <div className="divide-y divide-[#4d2020]">
                  {order.items.map((item, index) => (
                    <div key={index} className="p-4 flex justify-between items-center">
                      <span className="text-white">{item.name}</span>
                      <span className="text-white">₹{item.price.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-[#4d2020] bg-[#2d1b4d]">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Total Amount</span>
                    <span className="text-white font-bold">₹{order.totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Note */}
            <div className="bg-[#1a103c] rounded-lg p-4">
              <p className="text-gray-400 text-sm">
                Need help with your order? Contact our support team through WhatsApp for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
