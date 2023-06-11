"use client";
import Image from "next/image";

export default function Start(props) {
  return (
    <div className="flex w-full justify-center">
      <button
        className="transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-full border-4 hover:bg-amber-900/40 hover:text-amber-100 hover:border-amber-100 bg-amber-100/40 border-amber-900 shadow-md bg-amber-100/40 text-amber-900 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] p-4 lg:text-2xl"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * props.page,
            behavior: 'smooth'
          });
        }}
      >Start the game</button>
    </div>
  );
}
