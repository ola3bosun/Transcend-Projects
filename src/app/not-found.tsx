"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import { TransitionLink } from "@/components/ui/TransitionLink";
import ScrambleLink from "@/components/shared/ScrambleLink";

// The SSR Fix: Force the physics engine to strictly load in the browser
// FUCK MATTER.JS
const FallingText = dynamic(
  () => import("@/components/ui/FallingText").then((mod) => mod.FallingText),
  { ssr: false }
);

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(".error-element", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 w-full max-w-[1600px] mx-auto relative z-10 pointer-events-auto overflow-hidden">
      
      {/* Top Header */}
      <div className="w-full flex justify-between items-start error-element border-b border-foreground/20 pb-4">
        <span className="font-mono system-text text-gray-500">
          <ScrambleLink text="[ ERROR_CODE: 404 ]" href="/" />
        </span>
       
        <TransitionLink
          href="/"
          className="group relative inline-flex items-center gap-4 text-sm font-mono font-bold tracking-widest uppercase text-foreground hover:opacity-50 transition-opacity"
        >
            <span>
              [ INITIATE_RETURN_PROTOCOL ]
            </span>
        </TransitionLink>
      </div>

      <div className="flex-1 w-full flex items-center justify-center -mt-10 error-element">
        <FallingText
          text="YOU SHOULDN'T BE HERE. REQUESTED ASSET DOES NOT EXIST."

          highlightWords={["HERE.", "NOT", "EXIST."]}
          trigger="hover"
          gravity={0.98}
        />
      </div>

    </div>
  );
}