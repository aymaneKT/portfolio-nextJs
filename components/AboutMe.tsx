"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".gsap-text").forEach((element) => {
      gsap.from(element, {
        opacity: 0.1,
        color: "#acacac",

        y: 100,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 20%",
          //toggleActions: "play pause play pause", // onEnter, onLeave, onEnterBack, and onLeaveBack
          scrub: 1, //interattiva con il scroll
        },
      });
    });
  }, []);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>("section").forEach((el) => {
      gsap.to(el, {
        y: -100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "bottom 70% ",
          end: "bottom 50%",
          scrub: 1,
          pin: true,
        },
      });
    });
  }, []);
  //   useGSAP(() => {
  //   gsap.utils.toArray<HTMLElement>(".gsap-text").forEach((element) => {
  //     gsap.fromTo(
  //       element,
  //       { opacity: 0, y: 100 }, // punto di partenza
  //       {
  //         opacity: 1,
  //         y: 0, // punto di arrivo
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: element,
  //           start: "top 80%",
  //           end: "top 20%",
  //           markers: true,

  //           onEnter: () => {
  //             // scroll verso il basso → l'elemento sale
  //             gsap.to(element, { opacity: 1, y: 0, duration: 1 });
  //           },

  //           onEnterBack: () => {
  //             // scroll verso l'alto → l'elemento scende
  //             gsap.to(element, { opacity: 1, y: 100, duration: 1 });
  //           },
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <section
      id="about"
      className="text-secondary x  h-screen flex flex-col justify-center "
    >
      <p className="text-4xl font-light text-white mb-18 md:text-6xl gsap-text">
        I believe in a user-centered design approach, building interfaces that
        are clean, responsive, and designed around how people actually use them.
      </p>
      <span className="gsap-text">This is me</span>
      <div className="w-full h-[0.2px] bg-secondary my-4"></div>
      <div className="md:grid md:grid-cols-2">
        <h1 className="text-5xl normal-case text-white font-light mb-4 gsap-text">
          Hi, I'm Aymane.
        </h1>
        <div>
          <p className="my-4 gsap-text">
            I'm a frontend web developer creating modern, user-friendly web
            experiences. I turn ideas into clean interfaces that are easy to use
            and visually engaging.
          </p>

          <p className="my-4 gsap-text">
            I focus on scalable, high-performing solutions with accessibility
            and responsiveness in mind. Each project balances user experience
            with business goals to deliver meaningful results.
          </p>
        </div>
      </div>
    </section>
  );
}
