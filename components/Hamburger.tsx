"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

export function Hamburger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useGSAP(() => {
    gsap.to("nav", {
      right: isOpen ? 0 : "-100%",
      borderRadius: isOpen ? 0 : 200,
      duration: 1
    });
  }, [isOpen]);

  return (
    <span
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
      className=" h-6 w-8  fixed z-11 right-8 top-9"
    >
      <span
        className={`
          absolute bg-current left-0 top-0 h-0.5 w-full transition-all duration-300
          ${isOpen ? "rotate-45 translate-y-1.5" : ""}
        `}
      />

      <span
        className={`
          absolute bg-current left-0 top-3 h-0.5 w-full transition-all duration-300
          ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}
        `}
      />
    </span>
  );
}
