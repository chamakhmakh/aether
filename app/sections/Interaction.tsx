"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fingerprint, Focus, Orbit } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: "001",
    title: "Haptic Feedback",
    desc: "Visual simulation of physical resistance. Elements that snap, drag, and settle with calculated physics.",
    icon: <Fingerprint size={24} strokeWidth={1} />,
  },
  {
    id: "002",
    title: "Fluid Motion",
    desc: "No linear transitions. We use spring physics to create movement that feels natural and organic to the human eye.",
    icon: <Orbit size={24} strokeWidth={1} />,
  },
  {
    id: "003",
    title: "Focus States",
    desc: "Ambient lighting effects that guide user attention without explicit arrows or heavy-handed directives.",
    icon: <Focus size={24} strokeWidth={1} />,
  },
];

const Interaction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        cardsRef.current?.children || [],
      ); // cards here is a NodeList of HTML elements

      gsap.set(cards, {
        y: 120,
        opacity: 0,
        scale: 0.96,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      tl.fromTo(
        bgTextRef.current,
        {
          y: 200,
          opacity: 0,
        },
        {
          y: -200,
          opacity: 0.004,
          ease: "none",
        },
        0,
      );

      tl.fromTo(
        headerRef.current,
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "none",
        },
        0,
      );

      tl.to(
        cards,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: {
            each: 0.15,
            from: "start",
          },
          ease: "none",
        },
        0.2,
      );

      tl.to(
        cards,
        {
          y: -120,
          opacity: 0,
          scale: 0.94,
          stagger: {
            each: 0.1,
            from: "end",
          },
        },
        0.7,
      );

      tl.to(
        headerRef.current,
        {
          y: -80,
          opacity: 0,
        },
        0.75,
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="interaction"
      ref={sectionRef}
      className="relative w-full bg-[#020202] py-32 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-24 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
        <h3
          ref={bgTextRef}
          className="text-[20vw] font-bold leading-none text-white  whitespace-nowrap -translate-x-10 font-['Manrope']"
        >
          INTERACTION
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div ref={headerRef} className="mb-32 max-w-2xl">
          <span className="font-['JetBrains_Mono'] text-[10px] text-neutral-500 uppercase tracking-widest mb-6 block">
            02 — Tactility
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-8 font-['Manrope']">
            The machine should
            <br />
            feel alive.
          </h2>
          <p className="text-neutral-400 font-light leading-relaxed">
            We build friction, inertia, and magnetic resistance into our
            interactions. When digital objects have simulated weight, they gain
            significance.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 border-l border-white/5"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative h-125 boder-r border-y border-white/5 bg-[#030303] hover:bg-[#050505] transition-colors duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 flex flex-col justify-between p-10 z-10">
                <div className="flex justify-between items-start">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-neutral-600 group-hover:text-emerald-500 transition-colors">
                    {card.id}
                  </span>
                  <div className="text-neutral-700 group-hover:text-white transition-colors duration-500">
                    {card.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-700">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent transform scale-50 group-hover:scale-150 transition-transform duration-2000" />
              </div>
              {index === 1 && (
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              )}
              {index === 2 && (
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interaction;
