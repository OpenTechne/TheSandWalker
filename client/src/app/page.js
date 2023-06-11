"use client";


import Image from "next/image";
import Start from "@/components/Buttons/Start";
import Levels from "@/components/Sections/Levels";
import Loop from "@/components/Sections/Loop";
import "./style.css";
import "./writer.css";



export default function Home() {
  return (
    <main>
      <div className=' absolute right-5 top-5'>
      </div>
      <Loop />
        <div className="flex h-screen flex-col items-center justify-center bg-home bg-cover">
          <div className="flex flex-col items-center justify-center px-5 py-5 lg-px:20 lg:py-10">
            <span className="text-4xl text-center font-bold text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] lg:text-7xl py-10 sandwalker">The SandWalker</span>
        </div>
        <Start page={1} />
       
        </div>
        <Levels />
      </main>
  );
}
