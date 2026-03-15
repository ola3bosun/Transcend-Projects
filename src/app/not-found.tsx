"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { FallingText } from "@/components/ui/FallingText";
import  ScrambleLink  from "@/components/shared/ScrambleLink";

export default function NotFound() {
    // hides the footer while this page is active
  useEffect(() => {
    const footer = document.getElementById("global-footer");
    if (footer) footer.style.display = "none";
    
    // Cleanup: Bring it back when they click the button to go home
    return () => {
      if (footer) footer.style.display = "block";
    };
  }, []);
  const containerRef = useRef<HTMLDivElement>(null);

  // CSS lock to hide the footer
  useEffect(() => {
    const footer = document.getElementById("global-footer");
    if (footer) footer.style.display = "none";
    return () => {
      if (footer) footer.style.display = "block";
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(".error-element", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 w-full max-w-[1600px] mx-auto relative z-10 pointer-events-auto overflow-hidden">
      
      {/* Top Header */}
      <div className="w-full flex justify-between items-start error-element border-b border-foreground/20 pb-4">
        <span className="font-bold system-text text-foreground">
          <ScrambleLink text="ERROR_CODE: 404" href="/" />
        </span>
       
        <TransitionLink
          href="/"
          className="group relative inline-flex items-center gap-4 text-sm font-mono font-bold tracking-widest uppercase text-foreground"
        >
            <span>
              <ScrambleLink text="[ INITIATE_RETURN_PROTOCOL ]" href="/" />
            </span>
        </TransitionLink>
      </div>

      <div className="flex-1 w-full flex items-center justify-center -mt-10 error-element">
        <FallingText
          text="You shouldn't be HERE. REQUESTED DOES NOT EXIST."
          highlightWords={["ASSET", "NOT", "EXIST"]}
          trigger="hover"
          gravity={.98}
        />
      </div>

    </div>
  );
}