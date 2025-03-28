import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";
export default function UpcomingPage() {
  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-gray-800 font-sans pb-24">
      <h1 className="flex justify-center text-[175px] font-extrabold font-bungee tracking-tighter">
        <span className="text-[#dd0d66] text-glow tracking-tighter font-extrabold">
          UPCOMING/.
        </span>
      </h1>
      <div className="flex justify-center tracking-tighter h-[25%] pt-4">
        <div className="flex border border-gray-700 rounded-3xl h-[50vh] w-[1400px] mt-24 justify-between items-center bg-slate-700">
          <div className="">
            <div className="border border-slate-800 p-8 bg-gray-800/20 backdrop-blur-lg rounded-4xl grid grid-cols-2 px-24 place-items-center shadow-lg shadow-slate-700">
              <Image
                src={"/d1.png"}
                alt="d1"
                width={500}
                height={500}
                className="object-cover w-[400px] h-[500px] rounded-4xl shadow-slate-800 shadow-lg"
              />
              <div>
                <h1 className="text-red-500">
                  &mdash;{" "}
                  <span className="text-white tracking-tighter">
                    {" "}
                    About The Event
                  </span>
                </h1>
                <div className="pt-8">
                  <p className="text-9xl font-extrabold tracking-tighter">
                    The Grace
                  </p>
                  <p className="text-pink-700 text-9xl font-extrabold tracking-tighter text-nowrap">
                    World Tour
                  </p>
                  <p className="text-gray-400 w-1/2 pt-2 leading-5">
                    Dionela&apos;s distinctive style and sound continue to make
                    an impression on the music business. His live performances
                    highlight his artistic range, ranging from lively, danceable
                    music to moving ballads.
                  </p>
                  <div className="flex items-center mt-8 justify-between">
                    <a href="">
                      <div className="flex items-center space-x-8 mt-2 hover:font-bold border border-slate-700 shadow shadow-slate-600 justify-center px-8 py-2 rounded-2xl bg-pink-700">
                        <p className="text-lg">Buy ticket</p>
                        <BsArrowUpRightCircle size={25} />
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=bD9whtdq7dw"
                      target="_blank"
                    >
                      <div className="flex items-center space-x-8 mt-4 hover:font-bold ">
                        <p className="text-lg">Watch Video</p>
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
      <div className="flex justify-center tracking-tighter h-[25%] pt-48">
        <div className="flex border border-gray-700 rounded-3xl h-[50vh] w-[1400px] mt-24 justify-between items-center bg-slate-700">
          <div className="">
            <div className="border border-slate-800 p-8 bg-gray-800/20 backdrop-blur-lg rounded-4xl grid grid-cols-2 px-24 place-items-center shadow-lg shadow-slate-700">
              <Image
                src={"/dkla.jpg"}
                alt="dkla"
                width={1000}
                height={1000}
                className="object-cover w-[500px] h-[500px] rounded-4xl shadow-slate-800 shadow-lg"
              />
              <div>
                <h1 className="text-red-500">
                  &mdash;{" "}
                  <span className="text-white tracking-tighter">
                    {" "}
                    About The Event
                  </span>
                </h1>
                <div className="pt-8">
                  <p className="text-4xl font-extrabold">Donekla</p>
                  <p className="text-9xl font-extrabold tracking-tighter">
                    Laughter
                  </p>
                  <p className="text-pink-700 text-9xl font-extrabold tracking-tighter text-nowrap">
                    In Tandem
                  </p>
                  <p className="text-gray-400 w-1/2 pt-2 leading-5">
                    Mark your calendars and don&apos;t miss out on the upcoming
                    show of Supertekla and Donita Nose! They will be performing
                    in Hinesville, GA on September 21, 2024. This will be the
                    first time our city of Hinesville will be graced by these
                    talented comedians. It will bring endless joy!
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
  );
}
