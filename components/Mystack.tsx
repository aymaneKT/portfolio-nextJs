import { moduleType, stacks, stackType } from "@/lib/consonants";
import Categorie from "./Categorie";
import Image from "next/image";

export default function Mystack() {
  return (
    <section>
      <Categorie categorieName="My stack" />
      {stacks.map((stack: stackType) => (
        <div key={crypto.randomUUID()} className="md:grid md:grid-cols-2">
          <h1 className=" text-5xl uppercase">{stack.categorie}</h1>
          <div className="my-5  flex flex-wrap gap-x-9 gap-y-7 mb-18">
            {stack.module.map((module: moduleType) => (
              <div
                key={crypto.randomUUID()}
                className="flex items-center gap-2"
              >
                <Image
                  src={module.image}
                  alt={`${module.name} Logo`}
                  width={40}
                  height={40}
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
