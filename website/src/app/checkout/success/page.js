'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a103c] to-[#2d0808] py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-2xl overflow-hidden border border-[#4d2020] shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-r from-[#4CAF50] to-[#45a049] rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-gray-300 mb-8">Your order has been successfully processed.</p>

          {/* Transaction Details */}
          <div className="bg-[#1a103c] rounded-lg p-4 mb-8">
            <p className="text-gray-300 text-sm">
              A confirmation email has been sent to your registered email address.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => router.push('/')}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Home
            </button>
            <button
              onClick={() => router.push('/orders')}
              className="w-full px-6 py-3 bg-transparent border border-[#4d2020] text-white rounded-lg font-semibold hover:bg-[#2d1b4d] transition-colors"
            >
              View Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
