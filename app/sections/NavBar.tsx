"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(navRef.current, { y: -6, opacity: 0 });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.8,
        },
      });

      tl.to(navRef.current, {
        y: 0,
        opacity: 1,
      })
        .from(
          logoRef.current,
          {
            y: 4,
            filter: "blur(6px)",
            opacity: 0,
          },
          0.1,
        )
        .from(
          linksRef.current?.children || [],
          {
            y: 6,
            filter: "blur(8px)",
            opacity: 0,
            stagger: 0.07,
          },
          0.25,
        )
        .from(
          menuRef.current,
          {
            y: 4,
            scale: 0.9,
            opacity: 0,
          },
          0.45,
        );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-start transition-all duration-500 ${scrolled ? "bg-black/40 backdrop-blur-md py-6" : "mix-blend-difference"}`}
    >
      <div ref={logoRef} className="flex flex-col gap-1">
        <span className="uppercase tracking-tighter text-sm font-semibold text-white/90 font-['Manrope']">
          Aether
        </span>
        <span className="font-['JetBrains_Mono'] text-[9px] text-white/50 tracking-widest">
          BUILD 4.0.2
        </span>
      </div>

      <div className="flex items-center gap-12">
        <div
          ref={linksRef}
          className="hidden md:flex gap-8 text-[11px] font-medium tracking-widest text-neutral-400 uppercase"
        >
          <a
            href="#discovery"
            className="hover:text-white transition-colors duration-300"
          >
            Index
          </a>
          <a
            href="#interaction"
            className="hover:text-white transition-colors duration-300"
          >
            Signal
          </a>
          <a
            href="#proof"
            className="hover:text-white transition-colors duration-300"
          >
            Works
          </a>
        </div>

        <button ref={menuRef} className="group flex items-center gap-3">
          <span className="hidden md:block text-[11px] tracking-widest uppercase text-white group-hover:text-neutral-400 transition-colors">
            Menu
          </span>
          <div>
            <div className="w-6 h-px bg-white group-hover:w-4 transition-all duration-300 my-1" />
            <div className="w-6 h-px bg-white group-hover:w-6 transition-all duration-300 my-1.5" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
