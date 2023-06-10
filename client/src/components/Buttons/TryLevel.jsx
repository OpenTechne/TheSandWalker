"use client";
import Image from "next/image";

export default function TryLevel(props) {
  return (
    <div className="flex w-full justify-center">
      <button
        className="transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-full border-4 hover:bg-black border-white shadow-md bg-white/30 text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] p-2 lg:text-md"
        onClick={() => {
          window.location.href = "/level1";
        }}
      >
        Try level
      </button>
    </div>
  );
  
}
