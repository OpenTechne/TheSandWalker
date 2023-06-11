"use client";
import Image from "next/image";

export default function Loop() {
  return (
    <div class="marquee">
      <div class="track flex flex-row items-center gap-5">
        <span>Hackathon ETH Prague 2023</span>
        <Image src="/eth.png" width={100} height={100}/>
        <span>Hackathon ETH Prague 2023</span>
        <Image src="/eth.png" width={100} height={100}/>
        <span>Hackathon ETH Prague 2023</span>
        <Image src="/eth.png" width={100} height={100}/>
        <span>Hackathon ETH Prague 2023</span>
        <Image src="/eth.png" width={100} height={100}/>
        <span>Hackathon ETH Prague 2023</span>
        <Image src="/eth.png" width={100} height={100}/>
        <span>Hackathon ETH Prague 2023</span>
        <Image src="/eth.png" width={100} height={100}/>
        <span>Hackathon ETH Prague 2023</span>
        <Image src="/eth.png" width={100} height={100}/>
        <span>Hackathon ETH Prague 2023</span>
        <Image src="/eth.png" width={100} height={100}/>
      </div>
    </div>
  );
}
