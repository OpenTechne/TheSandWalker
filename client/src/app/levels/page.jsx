"use client";
import Image from "next/image";
import TryLevel from "@/components/Buttons/TryLevel";

export default function LevelsPage() {
  return (
    <div className="relative flex h-screen flex-col items-center gap-5 justify-center bg-home bg-cover">
      <h2 className="pb-3 text-5xl text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)]">GAME LEVELS</h2>
      <div className="flex flex-col gap-2 items-center justify-center p-2 lg:p-5 max-w-screen-xl">
        <p className="rounded-3xl text-center text-white text-xs lg:text-sm">
          Welcome to the distopic realm of "The SandWalker". In this heart-pounding video game experience, you'll assume the role of a skilled Cairo hacker, venturing into the vast reaches of
          Starknet. Each level is a smart contract that needs to be 'hacked'. The entire game is inspired by OpenZeppelin's{" "}
          <a href="https://ethernaut.openzeppelin.com/" style={{ color: "brown" }} target="_blank" rel="noopener noreferrer">
            The Ethernaut
          </a>
          . It's 100% open source and all levels are contributions made by other players.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center m-2">
        <ul className="rounded-3xl shadow-sm flex flex-row lg:flex-nowrap flex-wrap gap-5 max-w-screen-lg">
          <li className="rounded-3xl  border-white bg-white/40 border-white border-4 p-5 flex flex-col justify-center items-center gap-2 text-white shadow-md backdrop-blur-md">
            <p className="text-2xl p-2 [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)]">LVL 1</p>
            <Image className="rounded-2xl shadow-sm" src="/level1.jpg" width={400} height={400} />
            <p className="text-xs text-center">In this game you should be able to escape from the pyramids of the desert. Let's see if you can crack the code!</p>
            <TryLevel />
          </li>
          <li className="rounded-3xl border-white bg-white/20 p-5 flex flex-col justify-center items-center gap-2 text-white shadow-md backdrop-blur-md">
            <p className="text-2xl p-2 [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)]">LVL 2</p>
            <Image className="rounded-2xl shadow-sm opacity-60" src="/unlock.jpg" width={400} height={400} />
            <p className="text-xs text-center">In this game you should be able to escape from the pyramids of the desert. Let's see if you can crack the code!</p>
            <div className="flex w-full justify-center">
              <button className="opacity-60 rounded-full border-4 border-white shadow-md bg-black text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)] p-2 lg:text-md">Locked🔒</button>
            </div>
          </li>
          <li className="rounded-3xl border-white bg-white/20 p-5 flex flex-col justify-center items-center gap-2 text-white shadow-md backdrop-blur-md">
            <p className="text-2xl p-2 [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)]">LVL 3</p>
            <Image className="rounded-2xl shadow-sm opacity-60" src="/unlock.jpg" width={400} height={400} />
            <p className="text-xs text-center">In this game you should be able to escape from the pyramids of the desert. Let's see if you can crack the code!</p>
            <div className="flex w-full justify-center">
              <button className="opacity-60 rounded-full border-4 border-white shadow-md bg-black text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] p-2 lg:text-md">Locked🔒</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
