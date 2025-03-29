import Image from "next/image";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function UpcomingMobile() {
  return (
    <div className="lg:hidden md:pt-110 min-h-screen">
      <div className="flex flex-col justify-center items-center pt-52 relative">
        <Image
          src={"/dm.png"}
          alt="dm"
          width={1920}
          height={1920}
          className="object-cover -z-50"
        />
        <h1 className="absolute top-40 border px-4 rounded-2xl bg-gray-800/20 backdrop-blur-md text-7xl md:text-[180px] font-extrabold text-[#dd0d66] text-glow tracking-tighter">
          UPCOMING
        </h1>
        <div className="border border-gray-500 bg-gray-800/60 md:h-[600px] md:bottom-5 bottom-0 mt-52 md:w-[800px] h-[300px] w-[360px] rounded-4xl backdrop-blur-xl absolute p-6 md:p-14 shadow shadow-slate-400">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h1 className="text-4xl md:text-9xl font-extrabold">DIONELA</h1>
              <p className="text-md text-gray-300 md:text-4xl">
                The Grace Tour
              </p>
            </div>
            <BsArrowUpRightCircle size={50} />
          </div>
          <div>
            <p className="pt-8 text-2xl md:text-4xl">June 13, 2025</p>
            <p className="md:text-2xl">New York</p>
            <p className="text-sm md:text-lg md:pt-8">
              Dionela is bringing his soulful sound to Grand Theater, Anaheim,
              on June 13, 2025, with special guest Jay-R!
            </p>
          </div>
          <div className=" flex justify-center items-center mt-4 md:mt-16">
            <button className="bg-pink-700 w-full px-8 font-bold md:text-3xl md:py-8 py-2 rounded-full">
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
