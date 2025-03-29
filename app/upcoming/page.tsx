import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";
export default function UpcomingPage() {
  return (
    <div>
      <div className="bg-gradient-to-br from-black via-slate-900 to-gray-800 font-sans pb-24 hidden lg:block">
        <div className="h-[20%] bg-gradient-to-br from-black via-slate-900 to-gray-800 pb-24 font-sans">
          <div className="max-w-7xl mx-auto grid grid-cols-2 place-items-center"></div>
          <h1 className="flex justify-center text-[175px] font-extrabold font-bungee tracking-tighter">
            <span className="text-[#dd0d66] text-glow tracking-tighter font-extrabold">
              UPCOMING/.
            </span>
          </h1>
          <div className="flex justify-center tracking-tighter h-[25%] pt-4">
            <div className="flex border border-gray-700 rounded-3xl h-[50vh] w-[1400px] mt-24 justify-between items-center bg-slate-700">
              <div className="">
                <div className="border border-slate-800 bg-gray-800/20 backdrop-blur-lg rounded-4xl grid grid-cols-2 px-24 place-items-center shadow-lg shadow-slate-700 h-[600px]">
                  <Image
                    src={"/d2.png"}
                    alt="d1"
                    width={500}
                    height={500}
                    className="object-cover w-[800px] h-[600px]"
                  />
                  <div className="">
                    <h1 className="text-red-500">
                      &mdash;{" "}
                      <span className="text-white tracking-tighter">
                        {" "}
                        About The Event
                      </span>
                    </h1>
                    <div className="">
                      <p className="text-4xl font-extrabold pb-4">Dionela</p>
                      <p className="text-9xl font-extrabold tracking-tighter leading-20">
                        The Grace{" "}
                        <span className="text-pink-700 text-9xl font-extrabold tracking-tighter text-nowrap">
                          World Tour
                        </span>
                      </p>

                      <p className="text-gray-400 w-1/2 pt-2 leading-5">
                        Dionela&apos;s distinctive style and sound continue to
                        make an impression on the music business. His live
                        performances highlight his artistic range, ranging from
                        lively, danceable music to moving ballads.
                      </p>
                      <a href="">
                        <div className="flex items-center space-x-8 pt-8 hover:font-bold">
                          <p className="text-lg">Buy ticket</p>
                          <BsArrowUpRightCircle size={25} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center tracking-tighter h-[25%] pt-24">
            <div className="flex border border-gray-700 rounded-3xl h-[50vh] w-[1400px] mt-24 justify-between items-center bg-slate-700">
              <div className="">
                <div className="border border-slate-800 bg-gray-800/20 backdrop-blur-lg rounded-4xl grid grid-cols-2 px-24 place-items-center shadow-lg shadow-slate-700 h-[600px]">
                  <Image
                    src={"/dkla2.png"}
                    alt="d1"
                    width={1000}
                    height={1000}
                    className="object-cover w-auto h-[600px] pr-4"
                  />
                  <div className="">
                    <h1 className="text-red-500">
                      &mdash;{" "}
                      <span className="text-white tracking-tighter">
                        {" "}
                        About The Event
                      </span>
                    </h1>
                    <div className="">
                      <p className="text-4xl font-extrabold pb-4">Donekla</p>
                      <p className="text-9xl font-extrabold tracking-tighter leading-20">
                        Donekla{" "}
                        <span className="text-pink-700 text-9xl font-extrabold tracking-tighter">
                          In Tandem
                        </span>
                      </p>

                      <p className="text-gray-400 w-1/2 pt-2 leading-5">
                        Dionela&apos;s distinctive style and sound continue to
                        make an impression on the music business. His live
                        performances highlight his artistic range, ranging from
                        lively, danceable music to moving ballads.
                      </p>
                      <a href="">
                        <div className="flex items-center space-x-8 pt-8 hover:font-bold">
                          <p className="text-lg">Buy ticket</p>
                          <BsArrowUpRightCircle size={25} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden font-sans">
        <div className="flex flex-col justify-center items-center relative">
          <Image
            src={"/dm.png"}
            alt="dm"
            width={1920}
            height={1920}
            className="object-cover -z-50"
          />
          <h1 className="absolute top-5 border px-4 rounded-2xl bg-gray-800/20 backdrop-blur-md text-7xl md:text-[180px] font-extrabold text-[#dd0d66] text-glow tracking-tighter">
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
              <a
                href="https://www.youtube.com/watch?v=bD9whtdq7dw&list=RDMMbD9whtdq7dw&start_radio=1"
                target="_blank"
              >
                <BsArrowUpRightCircle size={50} />
              </a>
            </div>
            <div>
              <p className="pt-8 text-2xl md:text-4xl">June 13, 2025</p>
              <p className="md:text-2xl">New York</p>
              <p className="text-sm md:text-lg md:pt-8">
                Dionela&apos;s distinctive style and sound continue to make an
                impression on the music business. His live performances
                highlight his artistic range, ranging from lively, danceable
                music to moving ballads.
              </p>
            </div>
            <div className=" flex justify-center items-center mt-4 md:mt-16">
              <button className="bg-pink-700 w-full px-8 font-bold md:text-3xl md:py-8 py-2 rounded-full">
                Buy Ticket
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <Image
            src={"/dkla2.png"}
            alt="dm"
            width={1920}
            height={1920}
            className="object-cover -z-50 brightness-80"
          />
          <div className="border border-gray-500 bg-gray-800/60 md:h-[600px] md:bottom-5 bottom-0 mt-52 md:w-[800px] h-[300px] w-[360px] rounded-4xl backdrop-blur-xl absolute p-6 md:p-14 shadow shadow-slate-400">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <h1 className="text-4xl md:text-9xl font-extrabold">Donekla</h1>
                <p className="text-md text-gray-300 md:text-4xl">In Tandem</p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=bD9whtdq7dw&list=RDMMbD9whtdq7dw&start_radio=1"
                target="_blank"
              >
                <BsArrowUpRightCircle size={50} />
              </a>
            </div>
            <div>
              <p className="pt-8 text-2xl md:text-4xl">July 25, 2025</p>
              <p className="md:text-2xl">New York</p>
              <p className="text-sm md:text-lg md:pt-8">TBA</p>
            </div>
            <div className=" flex justify-center items-center mt-4 md:mt-16">
              <button className="bg-pink-700 w-full px-8 font-bold md:text-3xl md:py-8 py-2 rounded-full">
                Buy Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
