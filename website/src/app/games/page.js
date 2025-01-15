import GameGrid from '@/components/home/GameGrid';

export default function GamesPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="py-8 px-4 bg-gradient-to-b from-federal to-marian">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Our Games
          </h1>
          <p className="mt-4 text-xl text-center text-nonphoto">
            Choose your game and top up instantly
          </p>
        </div>
      </div>
      <GameGrid />
    </main>
  );
}
