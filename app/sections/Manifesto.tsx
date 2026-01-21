"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headerRef.current, leftColRef.current, rightColRef.current], {
        y: 120,
        opacity: 0,
      });

      gsap.set(linesRef.current, {
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
        linesRef.current,
        {
          opacity: 0.15,
          ease: "none",
        },
        0,
      );

      tl.to(
        headerRef.current,
        {
          y: 0,
          opacity: 1,
          ease: "none",
        },
        0.1,
      );

      tl.to(
        leftColRef.current,
        {
          y: 0,
          opacity: 1,
          ease: "none",
        },
        0.25,
      );

      tl.to(
        rightColRef.current,
        {
          y: 0,
          opacity: 1,
          ease: "none",
        },
        0.35,
      );

      tl.to(
        [headerRef.current, leftColRef.current, rightColRef.current],
        {
          y: -120,
          opacity: 0,
          ease: "none",
        },
        0.75,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="meaning"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center bg-[#020202] py-32 overflow-hidden"
    >
      <div
        ref={(el) => {
          if (el) linesRef.current[0] = el;
        }}
        className="absolute top-0 left-12 z-px h-full bg-white/2"
      />
      <div
        ref={(el) => {
          if (el) linesRef.current[1] = el;
        }}
        className="absolute top-0 right-12 z-px h-full bg-white/2"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-24">
          <div ref={headerRef}>
            <span className="font-['JetBrains_Mono'] text-[10px] text-neutral-500 uppercase tracking-widest mb-8 block">
              03 — Protocol
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-[0.95] font-['Manrope']">
              Form follows
              <br />
              <span className="text-neutral-700">function.</span>
              <br />
              Function follows
              <br />
              <span className="text-neutral-700">intent.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
            <div ref={leftColRef} className="space-y-6">
              <div className="w-8 h-px bg-white/50 mb-6" />
              <p className="text-lg text-neutral-400 font-light leading-loose">
                We do not decorate. We distill. In an economy of infinite
                distraction, the most valuable asset is focus. We strip away the
                non-essential to reveal the structural integrity of the
                information.
              </p>
            </div>
            <div ref={rightColRef} className="space-y-12">
              {[
                {
                  title: "01. Reduction",
                  text: "Removing every pixel that does not serve a direct purpose.",
                },
                {
                  title: "02. Permanence",
                  text: "Designing systems that operate outside of trend cycles.",
                },
                {
                  title: "03. Utility",
                  text: "Beauty is a byproduct of extreme usability.",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-white font-medium text-sm">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
