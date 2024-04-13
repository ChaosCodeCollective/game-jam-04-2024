import dynamic from "next/dynamic";
const GameScreen = dynamic(() => import("./GameScreen"), { ssr: false });

export default function Home() {
  return (
    <main  className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="text-4xl font-bold">Welcome to the Game!</h1>
      <GameScreen />
    </main>
  );
}