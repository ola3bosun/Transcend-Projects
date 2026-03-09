"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  useGSAP(() => {
    // LIFT: Force the curtain to start DOWN (covering the screen) and pull it UP
    gsap.fromTo(
      ".global-curtain",
      { y: "100dvh" }, // Snaps to bottom instantly on load
      {
        y: "0",        // Pulls back up to the ceiling
        duration: 0.8,
        ease: "power4.inOut",
      }
    );
    
  }, [pathname]);

  return (
    <div>
      {/* The curtain now spawns freshly on every single page load */}
      <div 
        className="global-curtain fixed z-[9999] bg-curtain pointer-events-none left-0 w-full h-[100dvh]"
        style={{ bottom: "100%" }}
      />
      
      <div ref={contentRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}