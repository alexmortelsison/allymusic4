import Image from "next/image";
export default function AboutPage() {
  return (
    <>
      <div className="lg:flex lg:w-[1500px] lg:mx-auto flex-col text-white px-2 select-none font-sans">
        <div>
          <Image
            src={"/bg.jpg"}
            alt=""
            fill
            className="-z-50 brightness-30 object-cover"
          />
        </div>
        <div className="lg:grid lg:grid-cols-3 max-w-[1000px] md:mt-24 mt-8">
          <div className="col-span-2 place-items-center">
            <div className="rounded-2xl">
              <Image
                src={"/logo.png"}
                alt=""
                width={800}
                height={800}
                className="md:w-80 md:h-120 object-cover rounded-xl hidden lg:block"
              />
            </div>
            <div></div>
          </div>
          <div className="lg:col-span-1 sm:flex flex flex-col text-center lg:text-start px-4 md:px-24">
            <h1 className="flex justify-center text-[46px] md:text-[108px] font-extrabold font-bungee tracking-tighter">
              <span className="text-[#dd0d66] text-glow tracking-tighter font-extrabold">
                ALLYMUSIC/
              </span>
              ABOUT
            </h1>
            <p className="lg:w-[700px] mt-4 md:text-lg flex text-center lg:text-start text-sm">
              As a leading music production company, Ally Music is dedicated to
              bringing talented artists from around the world to showcase their
              unique music and performances. Our mission is to bridge cultures,
              expand horizons, and provide an unforgettable musical experience
              for audiences everywhere. In addition to our music production
              expertise, Ally Music also operates a film production division,
              capturing the energy and emotion of live performances and
              behind-the-scenes moments. Our vision is to not only create
              spectacular concert events but also to immortalize these moments
              on film for future generations to enjoy. Whether it&apos;s
              discovering emerging talent or producing world-class concerts,
              Ally Music is committed to elevating the music industry, creating
              a platform for artists to thrive, and delivering exceptional
              experiences for fans. Join us on this exciting journey as we
              continue to bring the best in music to life.
            </p>
            <div className="rounded-2xl flex justify-center">
              <Image
                src={"/logo.png"}
                alt=""
                width={800}
                height={800}
                className="md:w-60 md:h-60 w-24 h-24 object-cover rounded-xl lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
