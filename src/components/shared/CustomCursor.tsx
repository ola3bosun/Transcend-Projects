"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  // 1. Detect if the user is on a mouse-driven device
  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true);
    }
  }, []);

  useGSAP(() => {
    if (!isDesktop || !cursorRef.current || !dotRef.current) return;

    // 2. High-Performance GSAP Tracking
    // quickTo bypasses the standard GSAP ticker for zero-latency tracking
    const xMoveCursor = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3.out" });
    const yMoveCursor = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3.out" });
    
    const xMoveDot = gsap.quickTo(dotRef.current, "x", { duration: 0, ease: "none" });
    const yMoveDot = gsap.quickTo(dotRef.current, "y", { duration: 0, ease: "none" });

    const moveCursor = (e: MouseEvent) => {
      xMoveCursor(e.clientX);
      yMoveCursor(e.clientY);
      xMoveDot(e.clientX);
      yMoveDot(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // 3. Hover Interaction Logic
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // If hovering over anything clickable
      if (target.closest("a, button, input, textarea")) {
        gsap.to(cursorRef.current, { 
          scale: 0.8, 
          rotation: 45, // Turns the square into a diamond
          duration: 0.3, 
          ease: "power4.out" 
        });
        gsap.to(dotRef.current, { 
          opacity: 0, 
          duration: 0.2 
        });
      } else {
        // Revert to default state
        gsap.to(cursorRef.current, { 
          scale: 1, 
          rotation: 0, // Back to square orientation
          duration: 0.3, 
          ease: "power4.out" 
        });
        gsap.to(dotRef.current, { 
          opacity: 1, 
          duration: 0.2 
        });
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isDesktop, pathname]); // Re-run logic if route changes 

  if (!isDesktop) return null;

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-white pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 will-change-transform backdrop-blur-xs"
      />
      
      {/* Inner Precision Dot */}
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
    </>
  );
}