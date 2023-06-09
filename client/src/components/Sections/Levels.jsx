"use client";
import Image from "next/image";

export default function Levels() {
  return (
    <div>
      <div className="relative flex-column text-center flex-wrap items-center justify-center pt-5 lg:flex-nowrap bg-levels bg-cover">
        <p>Introduction</p>
        <span>This game consists of...</span>
      </div>
      <div className="bg-amber-600 relative flex-column text-center flex-wrap items-center justify-center">
        <p>Levels</p>
        <ul className="flex flex-row bg-slate-300 p-5 gap-3">
          <li className="bg-white">
            <p>Level 1</p>
            <p>In this level...</p>
          </li>
          <li className="bg-white">
            <p>Level 2</p>
            <p>In this level...</p>
          </li>
          <li className="bg-white">
            <p>Level 3</p>
            <p>In this level...</p>
          </li>
          <li className="bg-white">
            <p>Level 4</p>
            <p>In this level...</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
