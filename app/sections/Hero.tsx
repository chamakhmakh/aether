"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLSpanElement[]>([]);
  const subsRef = useRef<HTMLDivElement[]>([]);
  const sideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imageRef.current, {
        scale: 1.12,
        y: 60,
        filter: "brightness(0.75)",
        opacity: 0,
      });

      gsap.set(gridRef.current, {
        opacity: 0,
      });

      gsap.set(linesRef.current, {
        y: 14,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(subsRef.current, {
        y: 12,
        opacity: 0,
      });

      gsap.set(sideRef.current, {
        y: 16,
        opacity: 0,
      });

      const enterTl = gsap.timeline({
        delay: 0.6,
        defaults: {
          ease: "power3.out",
          duration: 1,
        },
      });

      enterTl
        .to(imageRef.current, {
          scale: 1,
          y: 0,
          filter: "brightness(1)",
          opacity: 1,
        })
        .to(
          gridRef.current,
          {
            opacity: 0.4,
          },
          0.2,
        )
        .to(
          linesRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.14,
          },
          0.35,
        )
        .to(
          subsRef.current,
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
          },
          0.6,
        )
        .to(
          sideRef.current,
          {
            y: 0,
            opacity: 1,
          },
          0.8,
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(imageRef.current, {
          scale: 1.06,
          y: -8,
          filter: "brightness(0.6)",
        })
        .to(
          gridRef.current,
          {
            opacity: 0,
          },
          0,
        )
        .to(
          [...linesRef.current, ...subsRef.current, sideRef.current],
          {
            y: -24,
            opacity: 0,
          },
          0,
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <Image
        ref={imageRef}
        src="/bg.png"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
        fill
        priority
      />

      <div
        ref={gridRef}
        className="absolute inset-0 grid-bg opacity-40 z-20 pointer-events-none"
      />

      <div className="z-20 max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end pb-24">
        <div className="md:col-span-8 relative">
          <div className="absolute -left-12 top-0 text-white/10 hidden md:block">
            <Plus size={24} />
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tighter leading-[0.85] text-white mb-8 font-['Manrope']">
            <span className="block text-neutral-500 overflow-hidden">
              <span
                ref={(el) => {
                  if (el) linesRef.current[0] = el;
                }}
                className="hero-line inline-block"
              >
                Silence
              </span>
            </span>
            <span className="block pl-4 md:pl-16 overflow-hidden">
              <span
                ref={(el) => {
                  if (el) linesRef.current[1] = el;
                }}
                className="hero-line inline-block"
              >
                the Noise.
              </span>
            </span>
          </h1>

          <div
            ref={(el) => {
              if (el) subsRef.current.push(el);
            }}
            className="h-px w-24 bg-white/20 my-12"
          />

          <p
            ref={(el) => {
              if (el) subsRef.current.push(el);
            }}
            className="text-base md:text-lg text-neutral-400 font-light max-w-xl leading-relaxed"
          >
            We engineer digital environments that prioritize clarity over
            volume. A rejection of the ornamental in favor of the structural.
          </p>
        </div>

        <div
          ref={sideRef}
          className="md:col-span-4 flex flex-col justify-end items-start md:items-end"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-2 h-2 bg-emerald-500/80 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="font-['JetBrains_Mono'] text-[10px] tracking-widest uppercase text-neutral-500">
              System Online
            </span>
          </div>
          <div className="text-right hidden md:block">
            <span className="block font-[JetBrains_Mono] text-[10px] text-neutral-600">
              LAT: 34.0522 N
            </span>
            <span className="block font-[JetBrains_Mono] text-[10px] text-neutral-600">
              LON: 118.2437 W
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-px h-16 bg-linear-to-b from-transparent via-white to-transparent animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
