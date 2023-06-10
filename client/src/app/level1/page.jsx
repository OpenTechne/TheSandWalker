"use client";
import Image from "next/image";
import Start from "@/components/Buttons/Start";

export default function Level1Page() {
  return (
   <div>
    <div className="relative flex h-screen flex-col items-center gap-5 justify-center bg-level1 bg-cover">
    <div className=" flex flex-col gap-2 items-center justify-center rounded-full border-4 border-white w-5/6 bg-white/20 shadow-xl backdrop-blur-sm p-2 lg:p-5">
          <h1 className="text-center text-l font-black tracking-tight text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] lg:text-4xl">LVL 1</h1>
          <p className="rounded-3xl text-center leading-6 text-orange-800 lg:text-sm">
            In this level ........... ble ble ble
          </p>
        </div>
        <ul className="rounded-3xl flex flex-row gap-5 mx-5">
        <li className="rounded-3xl border-white bg-white/30 p-3 text-center text-white shadow-md backdrop-blur-md lg:p-5 lg:text-lg">
              <p className="text-3xl p-2">SMARTCONTRACT</p>
              <p className="text-xs p-5">Follow the following instructions in order to crack the code and be able to get to the next level.</p>
              
            </li>
            <li className="rounded-3xl border-white bg-white/30 p-3 text-center text-white shadow-md backdrop-blur-md lg:p-5 lg:text-lg">
              <p className="text-3xl p-2">INTRODUCTION</p>
              <p className="text-xs p-5">Follow the following instructions in order to crack the code and be able to get to the next level.</p>
              
            </li>
            </ul>

    </div>
   </div>
  );
}
