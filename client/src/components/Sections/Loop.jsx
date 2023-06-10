"use client";
import Image from "next/image";

export default function Loop() {
  return (
    <div class="marquee">
      <div className="animation flex flex-row gap-2">
        <div class="flex flex-row justify-center items-center gap-2">
          <div>
            <span>Hackaton ETH Prague 2023</span>
            <Image src="/eth.png" width={35} height={35} />
          </div>
          <div class="image">
            
          </div>
        </div>
        <div class="flex flex-row justify-center items-center gap-2">
          <div>
            <span>Hackaton ETH Prague 2023</span>
          </div>
          <div class="image">
            <Image src="/eth.png" width={35} height={35} />
          </div>
        </div>
        <div class="flex flex-row justify-center items-center gap-2">
          <div>
            <span>Hackaton ETH Prague 2023</span>
          </div>
          <div class="image">
            <Image src="/eth.png" width={35} height={35} />
          </div>
        </div>
        <div class="flex flex-row justify-center items-center gap-2">
          <div>
            <span>Hackaton ETH Prague 2023</span>
          </div>
          <div class="image">
            <Image src="/eth.png" width={35} height={35} />
          </div>
        </div>
        <div class="flex flex-row justify-center items-center gap-2">
          <div>
            <span>Hackaton ETH Prague 2023</span>
          </div>
          <div class="image">
            <Image src="/eth.png" width={35} height={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
