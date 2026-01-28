"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export interface BlobCursorProps {
  blobType?: "circle" | "square";
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}

export default function BlobCursor({
  blobType = "circle",
  fillColor = "#5227FF",
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = "rgba(255,255,255,0.8)",
  opacities = [0.6, 0.6, 0.6],
  shadowColor = "rgba(0,0,0,0.75)",
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = "blob",
  filterStdDeviation = 30,
  filterColorMatrixValues = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10",
  useFilter = true,
  fastDuration = 0.15,
  slowDuration = 0.6,
  fastEase = "power3.out",
  slowEase = "power1.out",
  zIndex = 9999,
}: BlobCursorProps) {
  const blobsRef = useRef<HTMLDivElement[]>([]);
  const quickX = useRef<gsap.QuickToFunc[]>([]);
  const quickY = useRef<gsap.QuickToFunc[]>([]);

  useEffect(() => {
    blobsRef.current.forEach((el, i) => {
      quickX.current[i] = gsap.quickTo(el, "x", {
        duration: i === 0 ? fastDuration : slowDuration,
        ease: i === 0 ? fastEase : slowEase,
      });
      quickY.current[i] = gsap.quickTo(el, "y", {
        duration: i === 0 ? fastDuration : slowDuration,
        ease: i === 0 ? fastEase : slowEase,
      });
    });

    const move = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const y = "touches" in e ? e.touches[0].clientY : e.clientY;

      blobsRef.current.forEach((_, i) => {
        quickX.current[i]?.(x);
        quickY.current[i]?.(y);
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
    };
  }, [fastDuration, slowDuration, fastEase, slowEase]);

  return (
    <div
      className="fixed inset-0 pointer-events-none select-none"
      style={{ zIndex }}
    >
      {useFilter && (
        <svg className="absolute w-0 h-0">
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={filterStdDeviation}
            />
            <feColorMatrix values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div
        className="absolute inset-0 overflow-hidden"
        style={useFilter ? { filter: `url(#${filterId})` } : undefined}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) blobsRef.current[i] = el;
            }}
            className="absolute will-change-transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === "circle" ? "50%" : "0",
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor}`,
            }}
          >
            <div
              className="absolute"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === "circle" ? "50%" : "0",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
