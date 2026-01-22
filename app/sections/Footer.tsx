"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        mainRef.current?.children || [],
      );

      gsap.set(items, {
        y: 120,
        opacity: 0,
      });

      gsap.set(metaRef.current, {
        y: 60,
        opacity: 0,
      });

      gsap.set(glowRef.current, {
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      tl.to(
        glowRef.current,
        {
          opacity: 1,
          ease: "none",
        },
        0,
      );

      tl.to(
        items,
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "none",
        },
        0.15,
      );

      tl.to(
        metaRef.current,
        {
          y: 0,
          opacity: 1,
          ease: "none",
        },
        0.5,
      );

      tl.to(
        items,
        {
          y: -80,
          opacity: 0,
          stagger: {
            each: 0.1,
            from: "end",
          },
          ease: "none",
        },
        0.75,
      );

      tl.to(
        glowRef.current,
        {
          opacity: 0,
          ease: "none",
        },
        0.9,
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full pt-48 pb-12 px-6 md:px-12 bg-[#020202]"
    >
      <div
        ref={glowRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-linear-to-t from-neutral-700/20 via-transparent to-transparent pointer-events-none"
      />

      <div
        ref={mainRef}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-5xl md:text-8xl font-extralight tracking-tighter text-white mb-12 font-['Manrope']">
          Ready to
          <br />
          go dark?
        </h2>

        <p className="text-neutral-500 font-light text-lg mb-16 max-w-lg mx-auto">
          We work with a limited number of partners each year to ensure absolute
          focus and precision.
        </p>

        <div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-12 py-5 bg-white text-black text-[10px] font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors"
          >
            Initiate Project
          </a>
        </div>
      </div>

      <div
        ref={metaRef}
        className="mt-48 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-end text-[10px] text-neutral-500 font-['JetBrains_Mono'] tracking-wide"
      >
        <div className="flex flex-col gap-2">
          <span className="text-neutral-300">AETHER SYSTEMS INC.</span>
          <span>SAN FRANCISCO / TOKYO</span>
        </div>

        <div className="flex gap-12 my-8 md:my-0">
          <a href="#" className="hover:text-white transition-colors">
            TWITTER / X
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LINKEDIN
          </a>
          <a href="#" className="hover:text-white transition-colors">
            GITHUB
          </a>
        </div>

        <div className="text-right">
          <span className="block">&copy; {new Date().getFullYear()}</span>
          <span className="block text-neutral-700">
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
