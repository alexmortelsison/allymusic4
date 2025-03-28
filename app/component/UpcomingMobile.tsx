import Image from "next/image";

export default function UpcomingMobile() {
  return (
    <div className="lg:hidden">
      <div className="flex flex-col justify-center items-center pt-52 relative">
        <Image
          src={"/dm.png"}
          alt="dm"
          width={1920}
          height={1920}
          className="object-cover -z-50"
        />
        <h1 className="absolute top-40 border px-4 rounded-2xl bg-gray-800/20 backdrop-blur-lg text-7xl md:text-9xl font-extrabold text-[#dd0d66] text-glow tracking-tighter">
          UPCOMING
        </h1>
        <div className="border bg-gray-800/60 md:h-[600px] md:bottom-5 bottom-0 mt-52 md:w-[800px] h-[300px] w-[360px] rounded-4xl backdrop-blur-xl absolute">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start p-6">
              <h1 className="text-xl md:text-7xl font-extrabold">DIONELA</h1>
              <p className="text-md text-gray-300">The Grace Tour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
