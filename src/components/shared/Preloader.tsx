"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);

  // 1. Check Session Storage on Mount
  useEffect(() => {
    setIsMounted(true);
    // If the flag exists, the user has already seen it this session
    if (sessionStorage.getItem("transcend_preloader_played")) {
      setShouldShow(false);
    }
  }, []);

  useGSAP(() => {
    // 2. Abort the animation if they shouldn't see it
    if (!isMounted || !shouldShow || !containerRef.current) return;

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        if (containerRef.current) containerRef.current.style.display = "none";
        
        // 3. Write the flag to storage as soon as the animation finishes
        sessionStorage.setItem("transcend_preloader_played", "true");
      }
    });

    const progress = { value: 0 };

    tl.to(progress, {
      value: 99,
      duration: 0.8,
      ease: "power3.inOut",
      onUpdate: () => {
        if (percentRef.current) percentRef.current.textContent = Math.floor(progress.value).toString();
        if (bgRef.current) bgRef.current.style.transform = `scaleX(${progress.value / 100})`;
      }
    })
    .to({}, { duration: 2 })
    .to(progress, {
      value: 100,
      duration: 0.2,
      onUpdate: () => {
        if (percentRef.current) percentRef.current.textContent = Math.floor(progress.value).toString();
        if (bgRef.current) bgRef.current.style.transform = `scaleX(${progress.value / 100})`;
      }
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.2
    });

  }, [isMounted, shouldShow]);

  // 4. Instantly return null if they've already seen it, bypassing the render entirely
  if (!isMounted || !shouldShow) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col justify-end bg-foreground overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-foreground origin-left scale-x-0 will-change-transform"
      />
      <div className="relative z-10 p-6 md:p-12 flex justify-end w-full">
        <span
          ref={percentRef}
          className="text-[15vw] leading-none font-black tracking-tighter mix-blend-difference text-white select-none font-mono"
        >
          0
        </span>
      </div>
    </div>
  );
}