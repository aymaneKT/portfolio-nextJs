"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);
export default function IntroAnimation() {
  useGSAP(() => {
    let AYMANE = SplitText.create(".gsap-name", {
      type: "chars",
    });
    const tl = gsap.timeline();

    tl.set(".gsap-name", { visibility: "visible" })
      .from(AYMANE.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.6,
      })
      .to(AYMANE.chars, {
        opacity: 0,
        stagger: 0.05,
        ease: "power2.out",
      })
      .to(".gsap-div", {
        height: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <div className="absolute inset-0 z-20 flex pointer-events-none">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="bg-black grow gsap-div pointer-events-none "
        ></div>
      ))}
      <h1 className="abs-center gsap-name font-bold text-[13vw] leading-none pointer-events-auto invisible">
        AYMANE
      </h1>
    </div>
  );
}
