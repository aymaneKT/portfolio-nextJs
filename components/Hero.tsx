import { heroinfo, HeroInfoType } from "@/lib/consonants";

export default function Hero() {
  return (
    <section className="h-dvh max-sm:mb-20" id="home">
      <div className="flex flex-col items-start  gap-8 mt-26 sm:mt-40 md:mt-72 lg:mt-50  ">
        <h1 className="leading-12 md:leading-15  font-bold tracking-tighter">
          <span className="text-primary">frontend</span> <br />
          <span className="ml-4">developer</span>
        </h1>
        <p className="text-secondary">
          Hi, I’m <span className="text-white font-bold">Aymane</span> A
          creative Frontend Developer with 2+ years of <br /> experience
          building high-performance, scalable, and responsive <br /> web
          solutions.
        </p>
        <button>Hire me</button>
      </div>
      <div className="flex px-6 justify-between max-sm:bottom-[10%] left-0 w-full absolute lg:px-9 md:px-3 md:items-end md:flex-col  md:gap-8 items-start  bottom-[7%] gap-2 lg:gap-2">
        {heroinfo.map((info: HeroInfoType, index: Number) => (
          <div
            key={info.description + index}
            className="flex-1 flex flex-col items-center justify-center  text-center md:md:items-end"
          >
            <h5 className="text-primary font-semibold">{info.numberInfo}</h5>
            <p className="text-secondary">{info.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
