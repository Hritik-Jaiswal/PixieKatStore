"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Mobile Legends",
      description: "Top up your diamonds instantly",
      image: "/assets/images/mobile-legends-banner.jpg",
      buttonText: "Top Up Now"
    },
    {
      id: 2,
      title: "Honor of Kings",
      description: "Get your vouchers here",
      image: "/assets/images/honor-of-kings-banner.jpg",
      buttonText: "Get Vouchers"
    },
    {
      id: 3,
      title: "Winter Sale",
      description: "Limited time only",
      image: "/assets/images/honor-of-kings-banner.jpg",
      buttonText: "Grab Now"
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a103c] to-[#2d0808]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-20"></div>
      </div>

      <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" 
           style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a103c]/90 to-[#2d0808]/90"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-10">{slide.description}</p>
                <button className="px-8 py-4 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#ff4d4d]/10 hover:bg-[#ff4d4d]/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#ff4d4d]/10 hover:bg-[#ff4d4d]/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index 
                ? 'bg-[#ff4d4d] w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
