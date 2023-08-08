"use client";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import TryLevel from "@/components/Buttons/TryLevel";
import React, { useState } from 'react';
import levelData from '../../../levels_data/levelData.json';

export default function LevelsPage() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  //console.log()
  const router = useRouter();

  
  return (
    <div className="relative flex h-screen flex-col items-center gap-5 justify-center bg-levels bg-cover">
      <div className="rounded-3xl bg-white/20 p-5">
        <h2 className="pb-3 text-center text-5xl text-amber-100 [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)]">GAME LEVELS</h2>
        <div className=" flex flex-col gap-2 items-center justify-center p-2 lg:p-5 max-w-screen-xl">
          <p className="rounded-3xl text-center text-amber-900 text-xs lg:text-sm">
            Welcome to the distopic realm of &quot;The SandWalker&quot;. In this heart-pounding video game experience, you&apos;ll assume the role of a skilled Cairo hacker, venturing into the vast reaches of
            Starknet. Each level is a smart contract that needs to be &apos;hacked&apos;. The entire game is inspired by OpenZeppelin&apos;s{" "}
            <a href="https://ethernaut.openzeppelin.com/" style={{ color: "firebrick" }} target="_blank" rel="noopener noreferrer">
              The Ethernaut
            </a>
            . It&apos;s 100% open source and all levels are contributions made by other players.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center m-2">
          <ul className="rounded-3xl shadow-sm flex flex-row lg:flex-nowrap flex-wrap gap-5 max-w-screen-lg">
            {levelData.map((level) => (
              <li key={level.level} className="rounded-3xl  border-amber-100 border-4 p-5 flex flex-col justify-center items-center gap-2 text-amber-100 shadow-md backdrop-blur-2xl">
                <p className="text-2xl p-2 [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)]">LVL {level.level}</p>
                <div className="w-60 h-60 relative">
                  <Image alt="" className="rounded-2xl shadow-sm opacity-60" src={`/level-${level.level}.jpg`} width={ 400  } height={ 400 } />
                </div>
                <p className="text-xs text-center text-amber-900">{level.description}</p>
                <button className="transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-full border-4 hover:bg-amber-900 hover:text-amber-100 hover:border-amber-100 bg-amber-100 shadow-md text-amber-900 border-amber-900 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] p-2 lg:text-md" 
                onClick={() => router.push(`/level/${level.level}`)}>Play level</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
