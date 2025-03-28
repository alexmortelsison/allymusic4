import Image from "next/image";
import UpcomingMobile from "./UpcomingMobile";

export default function HeroMobile() {
  return (
    <div className="font-sans">
      <Image
        src={"/herom.png"}
        alt="herom"
        fill
        className="-z-50 object-cover brightness-75"
      />
      <div className="max-w-7xl mx-auto md:ml-8">
        <div className="flex flex-col justify-start mt-38 md:pt-16 pl-2">
          <p className="text-[#dd0d66] text-glow tracking-tighter text-xl md:text-4xl font-extrabold">
            Live
          </p>
          <h1 className="font-extrabold text-7xl md:text-9xl tracking-tighter">
            TJ MONTERDE
          </h1>
          <p className="bg-pink-700 w-1/3 py-2 px-8 text-center rounded-3xl font-bold mt-8 text-nowrap">
            Sold out
          </p>
        </div>
      </div>
      <UpcomingMobile />
    </div>
  );
}
