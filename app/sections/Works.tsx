"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Helios / Stripe",
    tag: "FINTECH INFRASTRUCTURE",
    desc: "A complete overhaul of the dashboard experience, introducing real-time telemetry and 3D data visualization.",
  },
  {
    name: "Prism / OpenAI",
    tag: "NEURAL INTERFACE",
    desc: "Designing the visual language for large language models. Reducing complexity to a single, breathing cursor.",
  },
  {
    name: "Orbit / SpaceX",
    tag: "MISSION CONTROL",
    desc: "Critical systems display for Starship launch trajectory. High contrast, zero latency, fail-safe design.",
  },
];

const Works = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(
        rowsRef.current?.children || [],
      );

      gsap.set([headerRef.current, yearRef.current], {
        y: 80,
        opacity: 0,
      });

      gsap.set(rows, {
        y: 100,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      tl.to(
        [headerRef.current, yearRef.current],
        {
          y: 0,
          opacity: 1,
          ease: "none",
        },
        0,
      );

      tl.to(
        rows,
        {
          y: 0,
          opacity: 1,
          ease: "none",
          stagger: 0.12,
        },
        0.2,
      );

      tl.to(
        rows,
        {
          y: -120,
          opacity: 0,
          stagger: {
            each: 0.1,
            from: "end",
          },
          ease: "none",
        },
        0.7,
      );

      tl.to(
        [headerRef.current, yearRef.current],
        {
          y: -80,
          opacity: 0,
          ease: "none",
        },
        0.85,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proof"
      ref={sectionRef}
      className="relative w-full py-48 px-6 md:px-12 bg-[#030303] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className="flex items-baseline justify-between mb-24"
        >
          <div>
            <span className="font-['JetBrains_Mono'] text-[10px] text-neutral-500 uppercase tracking-widest mb-4 block">
              04 — Evidence
            </span>
            <h2 className="text-4xl font-light tracking-tight text-white font-['Manrope']">
              Selected Projects
            </h2>
          </div>
          <span
            ref={yearRef}
            className="font-['JetBrains_Mono'] text-[10px] text-neutral-600 hidden md:block"
          >
            2024 — 2025
          </span>
        </div>

        <div ref={rowsRef} className="flex flex-col">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative py-16 border-t border-white/5 hover:bg-neutral-900/20 transition-all duration-500 cursor-pointer last:border-b"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 relative z-10">
                <div className="md:w-1/3">
                  <h3 className="text-2xl md:text-3xl font-light text-neutral-300 group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-[10px] text-neutral-600 mt-2 block font-['JetBrains_Mono'] tracking-widest uppercase">
                    {project.tag}
                  </span>
                </div>
                <div className="md:w-1/3">
                  <p className="text-sm text-neutral-500 font-light max-w-sm group-hover:text-neutral-400 transition-colors leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                <div className="md:w-1/6 text-right">
                  <ArrowUpRight
                    size={20}
                    className="text-neutral-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block"
                  />
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[250%_250%,100%_100%] animate-[shimmer_3s_infinite]" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default Works;
