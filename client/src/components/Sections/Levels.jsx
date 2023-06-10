"use client";
import Image from "next/image";
import Start from "@/components/Buttons/Start";

export default function Levels() {
  return (
    <div>
      <div className="relative flex h-screen flex-col items-center gap-5 justify-center bg-levels bg-cover">
        <div className=" flex flex-col gap-2 items-center justify-center rounded-full border-4 border-white w-3/4 bg-white/20 shadow-xl backdrop-blur-sm p-2 lg:p-5">
          <h1 className="text-center text-xl font-black tracking-tight text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] lg:text-4xl">INTRODUCTION</h1>
          <p className="rounded-3xl text-center leading-6 text-orange-800 lg:text-md">
            Welcome to the distopic realm of "The sand walker" In this heart-pounding video game experience, 
            you'll assume the role of a skilled Cairo hacker, venturing into the vast reaches of Starknet. 
            Each level is a smart contract that needs to be 'hacked'.  
            The entire game inspired by OpenZeppelin's <a href="https://ethernaut.openzeppelin.com/"
            style={{ color: 'blue' }}target="_blank" rel="noopener noreferrer">The Ethernaut</a>. 
            It's 100% open source and all levels are contributions made by other players.
          </p>
        </div>
        <div className="flex max-w-2xl flex-col items-center justify-center p-8">
          <h2 className="pb-3 text-5xl font-bold text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">GAME LEVELS</h2>
          <ul className="rounded-3xl flex flex-row gap-3">
            <li className="rounded-3xl border-white bg-white/30 p-3 text-center text-orange-800 shadow-md backdrop-blur-md lg:p-5 lg:text-lg w-96">
              <p className="text-3xl p-2">LVL 1</p>
              <Image src="/lvl.jpg" width={500} height={500} />
              <p className="text-xs p-5">In this game you should be able to escape from the pyramids of the desert. Let's see if you can crack the code!</p>
            </li>
            <li className="rounded-3xl border-white bg-white/30 p-3 text-center text-orange-800 shadow-md backdrop-blur-md lg:p-5 lg:text-lg w-96">
            <p className="text-3xl p-2">LVL 2</p>
              <Image src="/lvl.jpg" width={500} height={500} />
              <p className="text-xs p-5">In this game you should be able to escape from the pyramids of the desert. Let's see if you can crack the code!</p>
            </li>
            <li className="rounded-3xl border-white bg-white/30 p-3 text-center text-orange-800 shadow-md backdrop-blur-md lg:p-5 lg:text-lg w-96">
            <p className="text-3xl p-2">LVL 3</p>
              <Image src="/lvl.jpg" width={500} height={500} />
              <p className="text-xs p-5">In this game you should be able to escape from the pyramids of the desert. Let's see if you can crack the code!</p>
            </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
