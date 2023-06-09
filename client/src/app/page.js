import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative flex h-screen flex-col items-center justify-center bg-amber-800">
        <div className="flex flex-col items-center justify-center px-5 py-5 lg-px:20 lg:py-10">
          <p className="text-5xl font-bold text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] lg:text-7xl py-10">The Sandwalkers</p>
          <button className="transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-full border-4 hover:bg-white/90 hover:text-amber-800 hover:border-amber-800 border-white shadow-md bg-white/30 text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] p-4 lg:text-2xl">
            Start the game
          </button>
        </div>
      </div>
    </main>
  );
}
