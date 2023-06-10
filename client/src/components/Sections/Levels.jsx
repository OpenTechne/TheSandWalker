"use client";
import Image from "next/image";
import Start from "@/components/Buttons/Start";

export default function Levels() {
  return (
    <div>
      <div className="relative flex h-screen flex-col items-center justify-center bg-levels bg-cover">

      <div className="relative h-screen flex-row  flex-wrap items-center justify-center gap-10 bg-about pt-5 lg:flex-nowrap">
      <div className="m-3 flex max-w-2xl flex-col items-center justify-center rounded-3xl border-2 border-white bg-white/30 p-5 shadow-md backdrop-blur-lg  lg:p-10">
        <h1 className="pb-3 text-2xl font-semibold text-white lg:text-3xl">INTRODUCTION</h1>
        <h2 className="pb-3 text-center text-5xl font-black tracking-tight text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] lg:text-7xl">INTRODUCTION</h2>
        <p className="rounded-3xl border border-white bg-white/40 p-3 text-center leading-6 text-orange-800 shadow-md backdrop-blur-md lg:p-6 lg:text-lg lg:font-medium">
          In this game you should be able to escape from the pyramids of the desert.
          Let's see if you can crack the code!
        </p>

        
      </div>
      <div className="flex max-w-2xl flex-col items-center justify-center rounded-3xl border-2 border-white bg-white/30 p-8 shadow-md backdrop-blur-lg">
        <h2 className="pb-3 text-5xl font-bold text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">GAME LEVELS</h2>
        <p className="px-10 text-center font-medium text-orange-800">Levels from 1 to...</p>

        <p className="rounded-3xl border border-white bg-white/40 p-3 text-center leading-6 text-orange-800 shadow-md backdrop-blur-md lg:p-6 lg:text-lg lg:font-medium">
          LEVEL 1
        </p>
        <p className="rounded-3xl border border-white bg-white/40 p-3 text-center leading-6 text-orange-800 shadow-md backdrop-blur-md lg:p-6 lg:text-lg lg:font-medium">
          LEVEL 2
        </p>
        <p className="rounded-3xl border border-white bg-white/40 p-3 text-center leading-6 text-orange-800 shadow-md backdrop-blur-md lg:p-6 lg:text-lg lg:font-medium">
          LEVEL 3
        </p>
        
        </div>
      </div>
      
      </div>
    </div>
    
  );
}
