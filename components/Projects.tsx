"use client";
import { projects, projectType } from "@/lib/consonants";
import Categorie from "./Categorie";
import PeojectItem from "./PeojectItem";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [project, setProject] = useState<projectType>({
    projectName: "uknown",
    image: "/images/projects/uberTotem.jpg",
    usedTech: [],
  });
  const [mousePosition, setMousePosition] = useState<number>(0);

  return (
    <section
      id="projects"
      className="relative"
      onMouseMove={(e) =>
        setMousePosition(
          e.clientY - e.currentTarget.getBoundingClientRect().top,
        )
      }
    >
      <Categorie categorieName="Selected Projects" />
      <div className="group">
        {projects.map((project: projectType, index: number) => (
          <PeojectItem
            key={project.projectName + index}
            {...project}
            setProject={setProject}
            index={index}
          />
        ))}
        <Image
          src={project.image}
          alt={project.projectName}
          width={700}
          height={700}
          loading="lazy"
          style={{ top: `${mousePosition - 120}px` }}
          className={`max-sm:hidden w-[30vw] sm:right-10   h-auto absolute opacity-0 group-hover:opacity-100   `}
        />
      </div>
    </section>
  );
}
