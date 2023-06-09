import Image from 'next/image'

export default function Home() {
  return ( 
    <main>
      <div className="relative flex h-screen flex-col items-center justify-center bg-home">
        <div className="flex flex-col items-center justify-center rounded-3xl border-2 bg-white/30 px-5 py-5 shadow-md backdrop-blur-lg lg:px-20 lg:py-10">
          <p className="text-5xl font-bold text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] lg:text-9xl">OpenTechne</p>

          <p className=" p-3 text-xl font-normal text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] lg:pt-7 lg:text-4xl">Where technology becomes art</p>
        </div>
      </div>
    </main>
  )
}
