import Image from "next/image";

export default function AboutTheEvent() {
  return (
    <div className="h-[50%] bg-black pt-24 pb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-2 place-items-center">
        <div>
          <h1 className="text-red-500">
            &mdash; <span className="text-white"> About The Event</span>
          </h1>
          <div className="pt-8">
            <p className="text-9xl font-extrabold">Sariling</p>
            <p className="text-[#dd0d66] text-glow tracking-tighter text-9xl font-extrabold">
              Mundo
            </p>
            <p className="text-gray-400 w-2/3 pt-8 leading-5">
              Join TJ Monterde for an unforgettable concert experience,
              featuring your favorite hits like Tulad Mo, Dating Tayo, Ikaw at
              Ako, and the theme song of Hello Love Again - Palagi! And get
              ready for an amazing surprise! KZ Tandingan is joining him as a
              special guest!
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/tj1.jpg"}
            alt="Tj1"
            width={250}
            height={250}
            className="object-cover rounded-l-4xl rounded-t-4xl z-10 shadow-2xl h-[400px]"
          />
          <div className="absolute -bottom-10 left-10 border-r-[40px] rounded-r-[30px] border-b-[40px] rounded-t-[20px] rounded-b-[20px] border-pink-600 h-[400px] w-[250px]" />
        </div>
      </div>
    </div>
  );
}
