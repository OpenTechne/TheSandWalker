"use client";
import Image from "next/image";

export default function Start(props) {
  return (
    <div className="flex w-full justify-center">
      <button className="transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-full border-4 hover:bg-white/30 hover:text-amber-900 hover:border-amber-900 border-white shadow-md bg-white/30 text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] p-4 lg:text-2xl"
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight * props.page,
          behavior: "smooth",
        });
      }}>Start the game</button>
    </div>
  );
}
