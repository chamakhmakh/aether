"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const StatusBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(linesRef.current, {
        scaleY: 0,
        transformOrigin: "center",
      });

      gsap.set(textRef.current, {
        opacity: 0,
        filter: "blur(6px)",
      });

      const tl = gsap.timeline({
        delay: 0.35,
        defaults: {
          ease: "power3.out",
          duration: 0.8,
        },
      });

      tl.to(linesRef.current, {
        scaleY: 1,
        stagger: 0.15,
      }).to(
        textRef.current,
        {
          opacity: 1,
          filter: "blur(0px)",
        },
        "-=0.4",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-8 z-40 mix-blend-difference pointer-events-none"
    >
      <div
        ref={(el) => {
          if (el) {
            linesRef.current[0] = el;
          }
        }}
        className="w-px h-24 bg-white/20"
      />
      <div
        ref={textRef}
        className="font-['JetBrains_Mono'] text-[10px] text-neutral-500 tracking-widest vertical-rl rotate-180"
      >
        SYSTEM_READY
      </div>
      <div
        ref={(el) => {
          if (el) {
            linesRef.current[1] = el;
          }
        }}
        className="w-px h-24 bg-white/20"
      />
    </div>
  );
};

export default StatusBar;
