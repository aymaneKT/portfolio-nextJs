"use client";
import { moduleType, stacks, stackType } from "@/lib/consonants";
import Categorie from "./Categorie";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Mystack() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".gsap-tech").forEach((element) => {
      gsap.from(element, {
        opacity: 0,

        y: 100,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 20%",
          scrub: 1, //interattiva con il scroll
        },
      });
    });
  }, []);
  return (
    <section>
      <Categorie categorieName="My stack" />
      {stacks.map((stack: stackType, index: Number) => (
        <div key={stack.categorie + index} className="md:grid md:grid-cols-2">
          <h1 className=" text-5xl uppercase gsap-tech">{stack.categorie}</h1>
          <div className="my-5  flex flex-wrap gap-x-9 gap-y-7 mb-18 ">
            {stack.module.map((module: moduleType, index: Number) => (
              <div
                key={module.name + index}
                className="flex items-center gap-2 gsap-tech"
              >
                <Image
                  src={module.image}
                  alt={`${module.name} Logo`}
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <span className="capitalize text-2xl">{module.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
