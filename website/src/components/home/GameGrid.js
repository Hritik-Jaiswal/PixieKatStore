"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function GameGrid() {
  const games = [
    {
      id: 1,
      name: "Mobile Legends",
      image: "/assets/images/mobile-legends.webp",
      link: "/games/mobile-legends",
      description: "Top up diamonds instantly"
    },
    {
      id: 2,
      name: "Honor of Kings",
      image: "/assets/images/honor-of-kings.jpg",
      link: "/games/honor-of-kings",
      description: "Get your vouchers here"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Available Games</h2>
          <div className="h-1 flex-grow mx-4 bg-gradient-to-r from-transparent via-[#ff4d4d] to-transparent opacity-50"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {games.map((game) => (
            <Link 
              href={game.link} 
              key={game.id}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-2xl overflow-hidden border border-[#4d2020] shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d4d] to-[#ff1a1a] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="flex flex-col md:flex-row">
                  {/* Image Container */}
                  <div className="w-full md:w-2/5 aspect-square relative">
                    <Image
                      src={game.image}
                      alt={`${game.name} cover`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={game.id === 1}
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="w-full md:w-3/5 p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      {game.name}
                    </h3>
                    <p className="text-gray-300 mb-6">{game.description}</p>
                    <div className="flex items-center text-[#ff4d4d] group-hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2">Get Started</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
