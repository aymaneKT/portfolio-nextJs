export default function AboutMe() {
  return (
    <section className="text-secondary  h-dvh flex flex-col justify-center ">
      <p className="text-4xl font-light text-white mb-18 md:text-6xl ">
        I believe in a user-centered design approach, building interfaces that
        are clean, responsive, and designed around how people actually use them.
      </p>
      <span>This is me</span>
      <div className="w-full h-[0.2px] bg-[#ffffff3a] my-4"></div>
      <div className="md:grid md:grid-cols-2">
        <h1 className="text-5xl normal-case text-white font-light mb-4">
          Hi, I'm Aymane.
        </h1>
        <div>
          <p className="my-4">
            I'm a frontend web developer creating modern, user-friendly web
            experiences. I turn ideas into clean interfaces that are easy to use
            and visually engaging.
          </p>

          <p className="my-4">
            I focus on scalable, high-performing solutions with accessibility
            and responsiveness in mind. Each project balances user experience
            with business goals to deliver meaningful results.
          </p>
        </div>
      </div>
    </section>
  );
}
