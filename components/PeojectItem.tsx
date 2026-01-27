"use client";
import { projectType } from "@/lib/consonants";
import Image from "next/image";
export default function PeojectItem({
  projectName,
  image,
  usedTech,
  index,
  setProject,
}: projectType & {
  index: number;
  setProject: (value: projectType) => void;
}) {
  return (
    <div
      className={`py-11 group ${index !== 0 ? "sm:border-t-2" : ""} relative`}
      onMouseEnter={() => {
        if (window.innerWidth >= 640) {
          setProject({
            projectName,
            image,
            usedTech,
          });
        }
      }}
    >
      <Image
        src={image}
        alt={projectName}
        width={700}
        height={700}
        sizes="(max-width: 640px) 90vw,
       (max-width: 1024px) 60vw,
       700px"
        className="w-[90vw] sm:w-[60vw] lg:w-175 h-auto sm:hidden"
      />

      <div className="flex  items-start gap-3">
        <span className="text-xl mt-5">_0{(index ?? 0) + 1}.</span>
        <div>
          <h3 className="text-3xl font-semibold mt-5 mb-4  sm:text-5xl">
            {projectName}
          </h3>

          <div className="text-secondary flex flex-wrap text-xs gap-2">
            {usedTech.map((tech: string, index: Number) => (
              <span key={tech + index}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
