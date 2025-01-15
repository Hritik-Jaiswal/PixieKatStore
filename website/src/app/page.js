import Navbar from '@/components/shared/Navbar';
import HeroCarousel from "@/components/home/HeroCarousel";
import GameGrid from "@/components/home/GameGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <GameGrid />

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Why Choose Us?</h2>
            <div className="h-1 flex-grow mx-4 bg-gradient-to-r from-transparent via-[#ff4d4d] to-transparent opacity-50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-[#1f1544] to-[#2d0808] border border-[#4d2020] transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#ff4d4d] to-[#ff1a1a] rounded-full flex items-center justify-center text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Instant Delivery</h3>
              <p className="text-gray-300">Get your diamonds delivered instantly to your account</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-[#1f1544] to-[#2d0808] border border-[#4d2020] transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#ff4d4d] to-[#ff1a1a] rounded-full flex items-center justify-center text-2xl">
                🔒
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Secure Payment</h3>
              <p className="text-gray-300">Your transactions are protected and secure</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-[#1f1544] to-[#2d0808] border border-[#4d2020] transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#ff4d4d] to-[#ff1a1a] rounded-full flex items-center justify-center text-2xl">
                💎
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Best Prices</h3>
              <p className="text-gray-300">Competitive prices for all top-up options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1f1544] to-[#2d0808] opacity-90"></div>
            <div className="relative z-10 p-12 flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
                <p className="text-gray-300 max-w-md">
                  Our support team is available 24/7 to assist you with any questions or concerns
                </p>
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
