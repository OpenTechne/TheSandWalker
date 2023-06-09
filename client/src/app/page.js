import Image from "next/image";
import Start from "@/components/Buttons/Start";

export default function Home() {
  return (
    <main>
      <div className="relative flex h-screen flex-col items-center justify-center bg-amber-800">
        <div className="flex flex-col items-center justify-center px-5 py-5 lg-px:20 lg:py-10">
          <p className="text-5xl font-bold text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] lg:text-7xl py-10">The Sandwalkers</p>
        </div>
        <Start page={1} />
      </div>
    </main>
  );
}
