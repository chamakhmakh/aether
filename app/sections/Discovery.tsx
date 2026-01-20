"use client";

import gsap from "gsap";
import { Activity } from "lucide-react";
import { useEffect, useRef } from "react";

const Discovery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".parallax-layer-back", {
        transformOrigin: "center center",
      });

      gsap.set(".parallax-layer-front", {
        transformOrigin: "center center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 15%",
          scrub: true,
        },
      });

      tl.fromTo(
        contentRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "none",
        },
        0,
      );

      if (contentRef.current?.children[0]) {
        tl.fromTo(
          contentRef.current.children[0],
          {
            y: 120,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
          },
          0.1,
        );
      }

      tl.fromTo(
        ".parallax-layer-back",
        {
          y: 200,
          rotateX: -20,
          rotateY: -25,
          opacity: 0,
        },
        {
          y: -60,
          rotateX: -6,
          rotateY: -12,
          opacity: 1,
          ease: "none",
        },
        0.15,
      );

      tl.fromTo(
        ".parallax-layer-front",
        {
          y: 260,
          scale: 0.92,
          opacity: 0,
        },
        {
          y: 40,
          scale: 1,
          opacity: 1,
          ease: "none",
        },
        0.2,
      );

      tl.to(
        ".parallax-layer-back",
        {
          y: -100,
        },
        0.6,
      );

      tl.to(
        ".parallax-layer-front",
        {
          y: 0,
        },
        0.6,
      );

      if (contentRef.current?.children[0]) {
        tl.to(
          contentRef.current.children[0],
          {
            y: -80,
            opacity: 0,
          },
          1,
        );
      }

      tl.to(
        ".parallax-layer-front",
        {
          y: -120,
          scale: 0.96,
          opacity: 0,
        },
        1,
      );

      tl.to(
        ".parallax-layer-back",
        {
          y: -200,
          rotateX: 10,
          opacity: 0,
        },
        1,
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="discovery"
      ref={sectionRef}
      className="relative w-full py-48 px-6 md:px-12 bg-[#030303] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

        <div
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center"
        >
          <div className="relative z-10 pl-0 lg:pl-12">
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="font-['JetBrains_Mono'] text-[10px] text-neutral-500 uppercase tracking-widest">
                01 — Observation
              </span>
              <span className="h-px w-8 bg-neutral-800" />
            </span>

            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.1] text-white mb-10 font-['Manrope']">
              Depth determines
              <br />
              perception.
            </h2>

            <div className="space-y-8">
              <p className="text-neutral-400 font-light leading-loose text-sm md:text-base max-w-md">
                Most interfaces treat the screen as a flat canvas. We approach
                it as a deep field. By manipulating Z-index and opacity, we
                create a sense of spatial logic that guides the user
                intuitively.
              </p>
              <p className="text-neutral-500 font-light leading-loose text-sm md:text-base max-w-md border-l border-white/10 pl-6 italic">
                &quot;The interface should feel like a physical object behind
                glass. Weighty, responsive, and governed by physics.&quot;
              </p>
            </div>

            <div className="mt-16 flex items-center gap-4">
              <button className="group relative px-6 py-3 border border-white/10 hover:border-white/30 transition-colors overflow-hidden">
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="ralative font-['JetBrains_Mono'] text-[10px] tracking-widest text-neutral-300 group-hover:text-white uppercase">
                  Explore Architecture
                </span>
              </button>
            </div>
          </div>

          <div className="relative h-150 w-full flex items-center justify-center perspective-[1000px]">
            <div className="absolute inset-0 bg-linear-to-b from-neutral-900/0 via-neutral-900/5 to-neutral-900/0" />

            <div className="parallax-layer-back absolute w-[80%] h-[70%] border border-white/5 bg-[#050505] transform -rotate-y-12 -rotate-x-6 shadow-2xl">
              <div className="p-6 border-b border-white/5 flex justify-between">
                <div className="w-12 h-1 bg-white/10 rounded" />
                <div className="w-4 h-4 rounded-full border border-white/10" />
              </div>
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="parallax-layer-front absolute w-[60%] h-auto bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,1)]">
              <div className="flex jsutify-between items-start mb-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-['JetBrains_Mono'] text-emerald-500 uppercase tracking-widest">
                    Active State
                  </span>
                  <span className="text-xs text-white font-medium">
                    Data Visualization
                  </span>
                </div>
                <Activity size={16} className="text-white/50" />
              </div>

              <div className="flex items-end gap-2 h-24 mb-6">
                {[0.4, 0.7, 0.5, 0.85, 0.6].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-white/5 transition-all duration-500 hover:bg-white/30"
                    style={{ height: `${h * 100}%` }}
                  />
                ))}
              </div>

              <div className="flex justify-between pt-4 border-t border-white/5">
                <span className="font-['JetBrains_Mono'] text-[9px] text-neutral-600 uppercase">
                  RENDER_TIME: 12ms
                </span>
                <span className="font-['JetBrains_Mono'] text-[9px] text-neutral-600 uppercase">
                  FPS: 60
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discovery;
// animate-[float_8s_ease-in-out_infinite]
