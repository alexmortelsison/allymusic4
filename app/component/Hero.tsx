import Image from "next/image";

export default function HeroPage() {
  return (
    <div className="lg:flex w-[1800px] mx-auto flex-col text-white">
      <Image src={"/hero.png"} alt="hero" fill className="object-cover -z-50" />
      <div className="grid grid-cols-2 max-w-7xl mx-auto mt-44 place-items-center">
        <div className="flex flex-col justify-start">
          <p className="text-[#dd0d66] text-glow tracking-tighter text-4xl">
            Live
          </p>
          <h1 className="font-extrabold text-9xl tracking-tighter">
            TJ MONTERDE
          </h1>
        </div>
      </div>
      <div className="flex justify-center tracking-tighter mb-24 pt-16">
        <div className="flex border border-gray-700 rounded-3xl h-[15vh] w-[1400px] mt-24 justify-between items-center bg-gray-800/30 backdrop-blur-sm">
          <div className="grid grid-cols-2 place-items-center">
            <div className="flex flex-col pl-24">
              <p className="font-bold text-xl text-nowrap">March 30, 2025</p>
              <p className="text-gray-300">8:00pm</p>
            </div>
            <p className="pl-44 text-2xl">|</p>
          </div>
          <div className="grid grid-cols-2 place-items-center">
            <div className="flex flex-col pl-24">
              <p className="font-bold text-xl text-nowrap">
                Palladium Times Square
              </p>
              <p className="text-gray-300">New York City, NY</p>
            </div>
            <p className="pl-44 text-2xl">|</p>
          </div>
          <div className="grid grid-cols-2 place-items-center text-nowrap">
            <div className="flex flex-col pl-24 ">
              <p className="font-bold text-xl text-red-500">Sold Out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
