"use client"

import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative h-[500px] bg-gradient-to-r from-federal to-marian overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About PixieKat Store
          </h1>
          <p className="text-xl text-nonphoto">
            Your Trusted Partner for Mobile Game Top-ups
          </p>
        </div>
      </div>
    </section>
  );
}
