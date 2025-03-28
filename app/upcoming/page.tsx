import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";
export default function UpcomingPage() {
  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-gray-800 font-sans pb-24">
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
  );
}
