"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4, // weight
      easing: (t) => 1 - Math.pow(1 - t, 4), // strong ease-out
      smoothWheel: true,
      wheelMultiplier: 0.9, // reduces nervous scrolling
      touchMultiplier: 1,
    });

    // connect Lenis to ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
